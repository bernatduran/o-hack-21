################################################################## 
##      CALL ME FROM INSIDE THE scripts/deploy_from_local_env ####
################################################################## 
param (
    [string][Parameter(Mandatory = $true)] $restoreAndBuild,
    [string][Parameter(Mandatory = $true)] $packProjects
)

# ValidatePath
if (Test-Path "./common-functions.psm1") {
    Import-Module "./common-functions.psm1"    -Force
    pushd $(pwd)
    cd ../terraform
}
else {
    throw "call me from inside the folder scripts/deploy_from_local_env"
}   

try { 
    # Check AWS Profiles
    #validateAWSDeploymentProfile

    # Define the TF Action
    $scriptBlock = "terraform apply -auto-approve"

    executeTerraformAction              `
        -restoreAndBuild $restoreAndBuild  `
        -packProjects $packProjects        `
        -tfAction $scriptBlock

    Write-Host "To repeat this execution run the following command: "                               -ForegroundColor Green -BackgroundColor Black
    Write-Host "./tfdeployfromlocalmachine $($restoreAndBuild) $($packProjects)"  -ForegroundColor DarkYellow -BackgroundColor Black
}
finally {
    popd
}

