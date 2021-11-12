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
            dotnet restore ..\backend\src\$SLN_NAME.sln
            dotnet build ..\backend\src\$SLN_NAME.sln -c Release  --no-restore   
        }

        if ($packProjects -eq 'true') {
            if (!(Test-Path ..\artifacts)) { mkdir ..\artifacts; }

            foreach ($project in $projects) {
                dotnet lambda package -c Release -f $NET_CORE_APP_31 --project-location "..\backend\src\$project" --output-package "..\artifacts\$project.zip"  
            }       
        }

        $currentBranch = $( git branch --show-current ).Replace('/', '-')
        $app_version = $currentBranch
        $deployment_time = Get-Date -Format "yyyy-MM-dd-HH:mm:ss"

        Write-Host "app_version=$app_version"

        terraform init

    }
    
    process {
        Write-Host "tf action: $tfAction"
        Invoke-Expression "$tfAction"
    }
    
    end {
    }
}