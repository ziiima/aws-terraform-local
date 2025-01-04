
provider "aws" {
    region                      = "ap-northeast-1"
    skip_credentials_validation = true
    skip_metadata_api_check     = true
    skip_requesting_account_id  = true

    endpoints {
        cognitoidentity = "http://cognito:3000"
        cognitoidp = "http://cognito:3000"
    }
}

resource "aws_cognito_user_pool" "pool" {
  name = "my-user-pool"
}
