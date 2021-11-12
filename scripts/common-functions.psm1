function ExecuteTerraformAction {
    [CmdletBinding()]
    param (
        [string][Parameter(Mandatory = $true)] $restoreAndBuild,
        [string][Parameter(Mandatory = $true)] $packProjects,
        [string][Parameter(Mandatory = $true)] $tfAction
    )
    
    begin {
        $projects = @(
            "Ohpen.Executive.Dashboard.WebApi"
        )

        $NET_CORE_APP_31 = "netcoreapp3.1"
        $SLN_NAME = "Ohpen.Executive.Dashboard"

        if ($restoreAndBuild -eq 'true') {
            dotnet restore ..\src\$SLN_NAME.sln
            dotnet build ..\src\$SLN_NAME.sln -c Release  --no-restore   
        }

        if ($packProjects -eq 'true') {
            if (!(Test-Path .\artifacts)) { mkdir .\artifacts; }

            foreach ($project in $projects) {
                dotnet lambda package -c Release -f $NET_CORE_APP_31 --project-location "..\src\$project" --output-package ".\artifacts\$project.zip"  
            }       
        }

        $env = "dev"
        $client = "ohp"
        $tfvars_file = "$env-$client.tfvars"
        $tfvars_path = ".\env\$tfvars_file"
        $currentBranch = $( git branch --show-current ).Replace('/', '-')
        $app_version = $currentBranch
        $deployment_time = Get-Date -Format "yyyy-MM-dd-HH:mm:ss"

        $stateGroup = "$env-$client-$service_group"

        Write-Host "env=$env"
        Write-Host "client=$client"
        Write-Host "tfvars_file=$tfvars_file"
        Write-Host "app_version=$app_version"
        Write-Host "stateGroup=$stateGroup"

        # Comment backend.tf
        ((Get-Content -path .\backend.tf) -replace '^', "# ") | Set-Content -Path .\backend.tf
        # change tfm_deploy_role
        ((Get-Content -path .\_locals.tf) -replace '^[\W]+(.*#DEPLOY_FROM_PIPE)'    , '  #$1')  | Set-Content -Path .\_locals.tf
        ((Get-Content -path .\_locals.tf) -replace '^[\W]+#(.*#DEPLOY_FROM_LOCAL)'  , '  $1')   | Set-Content -Path .\_locals.tf

        terraform init

        $tfvarsInitialContent = Get-Content $tfvars_path -Raw

        # Add new variables here
        Add-Content -Path $tfvars_path -Value "`n"
        Add-Content -Path $tfvars_path -Value "app_version=`"$app_version`""
        Add-Content -Path $tfvars_path -Value "service_group=`"$service_group`""
        Add-Content -Path $tfvars_path -Value "deployment_time=`"$deployment_time`""
    }
    
    process {
        Write-Host "tf action: $tfAction"
        Invoke-Expression "$tfAction -var-file=`"$tfvars_path`""
    }
    
    end {
        Set-Content -Path $tfvars_path -Value $tfvarsInitialContent -NoNewline

        # Undo Comment backend.tf
        ((Get-Content -path .\backend.tf) -replace '^# ', "") | Set-Content -Path .\backend.tf

        # change tfm_deploy_role
        ((Get-Content -path .\_locals.tf) -replace '^[\W]+#(.*#DEPLOY_FROM_PIPE)', '  $1')  | Set-Content -Path .\_locals.tf
        ((Get-Content -path .\_locals.tf) -replace '^[\W]+(.*#DEPLOY_FROM_LOCAL)', '  #$1') | Set-Content -Path .\_locals.tf
    }
}