AWS Pricing Helper (Google Spreadsheet Add-on)
==========
# Overview

AWS Pricing Helper will help you estimate pricing for your AWS resources.

For more details on the functions, please read the description displayed while typing the function into the spreadsheet.

Please use this add-on at your own risk.

# Supported services

- EC2 instances (Linux, Windows)
- RDS instances (MySQL, PostgreSQL, Oracle)
- EBS Volumes

# Default Region "ap-northeast-1"

Because the developer is living in Japan :)  
Change the region by adding a argument to the custom function.

### Region names for argument

- "us-east-1"
- "us-east-2"
- "us-west-1"
- "us-west-2"
- "eu-west-1"
- "eu-central-1"
- "ap-southeast-1"
- "ap-southeast-2"
- "ap-northeast-1"
- "sa-east-1"

# Functions for Ondemand Instances

### Arguments

1. Instance type
1. Region (Optional, default value is "ap-northeast-1")

### Functions
- EC2_LINUX_OD
- EC2_WINDOWS_OD
- RDS_MYSQL_STD_OD
- RDS_MYSQL_MULTI_OD
- RDS_PGSQL_STD_OD
- RDS_PGSQL_MULTI_OD
- RDS_ORACLE_STD_OD
- RDS_ORACLE_MULTI_OD

# Functions for Reserved Instances

### Arguments
1. Instance type
1. Region (Optional, default value is "ap-northeast-1")
1. Reserved years (Optional, default value is 1)

### Functions
- EC2_LINUX_RI_NO_AD
- EC2_LINUX_RI_PART_AD
- EC2_LINUX_RI_ALL_AD
- EC2_WINDOWS_RI_NO_AD
- EC2_WINDOWS_RI_PART_AD
- EC2_WINDOWS_RI_ALL_AD
- EC2_LINUX_RI_NO_HOUR
- EC2_LINUX_RI_PART_HOUR
- EC2_LINUX_RI_ALL_HOUR
- EC2_WINDOWS_RI_NO_HOUR
- EC2_WINDOWS_RI_PART_HOUR
- EC2_WINDOWS_RI_ALL_HOUR
- RDS_MYSQL_STD_RI_NO_AD
- RDS_MYSQL_STD_RI_PART_AD
- RDS_MYSQL_STD_RI_ALL_AD
- RDS_MYSQL_MULTI_RI_NO_AD
- RDS_MYSQL_MULTI_RI_PART_AD
- RDS_MYSQL_MULTI_RI_ALL_AD
- RDS_MYSQL_STD_RI_NO_HOUR
- RDS_MYSQL_STD_RI_PART_HOUR
- RDS_MYSQL_STD_RI_ALL_HOUR
- RDS_MYSQL_MULTI_RI_NO_HOUR
- RDS_MYSQL_MULTI_RI_PART_HOUR
- RDS_MYSQL_MULTI_RI_ALL_HOUR
- RDS_PGSQL_STD_RI_NO_AD
- RDS_PGSQL_STD_RI_PART_AD
- RDS_PGSQL_STD_RI_ALL_AD
- RDS_PGSQL_MULTI_RI_NO_AD
- RDS_PGSQL_MULTI_RI_PART_AD
- RDS_PGSQL_MULTI_RI_ALL_AD
- RDS_PGSQL_STD_RI_NO_HOUR
- RDS_PGSQL_STD_RI_PART_HOUR
- RDS_PGSQL_STD_RI_ALL_HOUR
- RDS_PGSQL_MULTI_RI_NO_HOUR
- RDS_PGSQL_MULTI_RI_PART_HOUR
- RDS_PGSQL_MULTI_RI_ALL_HOUR
- RDS_ORACLE_STD_RI_NO_AD
- RDS_ORACLE_STD_RI_PART_AD
- RDS_ORACLE_STD_RI_ALL_AD
- RDS_ORACLE_MULTI_RI_NO_AD
- RDS_ORACLE_MULTI_RI_PART_AD
- RDS_ORACLE_MULTI_RI_ALL_AD
- RDS_ORACLE_STD_RI_NO_HOUR
- RDS_ORACLE_STD_RI_PART_HOUR
- RDS_ORACLE_STD_RI_ALL_HOUR
- RDS_ORACLE_MULTI_RI_NO_HOUR
- RDS_ORACLE_MULTI_RI_PART_HOUR
- RDS_ORACLE_MULTI_RI_ALL_HOUR

**Old Purchase Options**
- EC2_LINUX_RI_LIGHT_AD
- EC2_LINUX_RI_MEDIUM_AD
- EC2_LINUX_RI_HEAVY_AD
- EC2_WINDOWS_RI_LIGHT_AD
- EC2_WINDOWS_RI_MEDIUM_AD
- EC2_WINDOWS_RI_HEAVY_AD
- EC2_LINUX_RI_LIGHT_HOUR
- EC2_LINUX_RI_MEDIUM_HOUR
- EC2_LINUX_RI_HEAVY_HOUR
- EC2_WINDOWS_RI_LIGHT_HOUR
- EC2_WINDOWS_RI_MEDIUM_HOUR
- EC2_WINDOWS_RI_HEAVY_HOUR
- RDS_MYSQL_STD_RI_LIGHT_AD
- RDS_MYSQL_STD_RI_MEDIUM_AD
- RDS_MYSQL_STD_RI_HEAVY_AD
- RDS_MYSQL_MULTI_RI_LIGHT_AD
- RDS_MYSQL_MULTI_RI_MEDIUM_AD
- RDS_MYSQL_MULTI_RI_HEAVY_AD
- RDS_MYSQL_STD_RI_LIGHT_HOUR
- RDS_MYSQL_STD_RI_MEDIUM_HOUR
- RDS_MYSQL_STD_RI_HEAVY_HOUR
- RDS_MYSQL_MULTI_RI_LIGHT_HOUR
- RDS_MYSQL_MULTI_RI_MEDIUM_HOUR
- RDS_MYSQL_MULTI_RI_HEAVY_HOUR
- RDS_PGSQL_STD_RI_LIGHT_AD
- RDS_PGSQL_STD_RI_MEDIUM_AD
- RDS_PGSQL_STD_RI_HEAVY_AD
- RDS_PGSQL_MULTI_RI_LIGHT_AD
- RDS_PGSQL_MULTI_RI_MEDIUM_AD
- RDS_PGSQL_MULTI_RI_HEAVY_AD
- RDS_PGSQL_STD_RI_LIGHT_HOUR
- RDS_PGSQL_STD_RI_MEDIUM_HOUR
- RDS_PGSQL_STD_RI_HEAVY_HOUR
- RDS_PGSQL_MULTI_RI_LIGHT_HOUR
- RDS_PGSQL_MULTI_RI_MEDIUM_HOUR
- RDS_PGSQL_MULTI_RI_HEAVY_HOUR
- RDS_ORACLE_STD_RI_LIGHT_AD
- RDS_ORACLE_STD_RI_MEDIUM_AD
- RDS_ORACLE_STD_RI_HEAVY_AD
- RDS_ORACLE_MULTI_RI_LIGHT_AD
- RDS_ORACLE_MULTI_RI_MEDIUM_AD
- RDS_ORACLE_MULTI_RI_HEAVY_AD
- RDS_ORACLE_STD_RI_LIGHT_HOUR
- RDS_ORACLE_STD_RI_MEDIUM_HOUR
- RDS_ORACLE_STD_RI_HEAVY_HOUR
- RDS_ORACLE_MULTI_RI_LIGHT_HOUR
- RDS_ORACLE_MULTI_RI_MEDIUM_HOUR
- RDS_ORACLE_MULTI_RI_HEAVY_HOUR

# Functions for EBS Volumes

### Arguments
1. Region (Optional, default value is "ap-northeast-1")

### Functions
- EBS_GP2_STORAGE
- EBS_MAGNETIC_COLD_STORAGE
- EBS_MAGNETIC_TP_STORAGE
- EBS_PIOPS_STORAGE
- EBS_SNAPSHOT_STORAGE
- EBS_PIOPS_PROV

# Feedback

### [Please feedbacks on GitHub issues.](https://github.com/FumblePerson/gs-aws-pricing-helper/issues)
- Questions
- Report bugs
- Feature requests
- etc...

# Changelog

See [CHANGELOG](https://github.com/FumblePerson/gs-aws-pricing-helper/blob/master/CHANGELOG.md)

## Contributing

1. Fork it ( https://github.com/FumblePerson/gs-aws-pricing-helper/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

# License

[MIT License](https://github.com/FumblePerson/gs-aws-pricing-helper/blob/master/LICENSE.txt)
