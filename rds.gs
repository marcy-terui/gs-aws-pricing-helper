// RDS

function get_rds_od_price(type, url) {
  var response = UrlFetchApp.fetch(url);
  var data = eval(response.getContentText());
  var regions = data['config']['regions'];
  for (var i = 0; i < regions.length; i++) {
    var region = regions[i]['region'];
    if(region == OD_REGION_NAME) {
      var types = regions[i]['types'];
      for (var j = 0; j < types.length; j++) {
        var tiers = types[j]['tiers'];
        for (var k = 0; k < tiers.length; k++) {
          var name = tiers[k]['name'];
          if(name == type) {
            return tiers[k]['prices']['USD'];
          }
        }
      }
    }
  }
}

function get_rds_ri_price(type, term, is_hourly, is_multi, url) {
  var response = UrlFetchApp.fetch(url);
  var data = eval(response.getContentText());
  var regions = data['config']['regions'];
  for (var i = 0; i < regions.length; i++) {
    var region = regions[i]['region'];
    if(region == OD_REGION_NAME) {
      var instypes = regions[i]['instanceTypes'];
      for (var j = 0; j < instypes.length; j++) {
        var tiers = instypes[j]['tiers'];
        if(is_multi && instypes[j]['generation'].search(/Multi-AZ$/) == -1) continue;
        if(!is_multi && instypes[j]['generation'].search(/Single-AZ$/) == -1) continue;
        for (var k = 0; k < tiers.length; k++) {
          var valueColumns = tiers[k]['valueColumns'];
          var size = tiers[k]['size'];
          if(size == type) {
            for (var l = 0; l < valueColumns.length; l++) {
              var priceName = valueColumns[l]['name'];
              if(priceName == "yrTerm1" && term == 1 && !is_hourly) {
                return valueColumns[l]['prices']['USD'];
              }
              if((priceName == "yrTerm1Hourly" || priceName == "yearTerm1Hourly") && term == 1 && is_hourly) {
                return valueColumns[l]['prices']['USD'];
              }
              if(priceName == "yrTerm3" && term == 3 && !is_hourly) {
                return valueColumns[l]['prices']['USD'];
              }
              if((priceName == "yrTerm3Hourly" || priceName == "yearTerm3Hourly") && term == 3 && is_hourly) {
                return valueColumns[l]['prices']['USD'];
              }
            }
          }
        }
      }
    }
  }
}

// RDS for MySQL

function rds_mysql_standard_od(type) {
  return get_rds_od_price(type, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-standard-deployments.min.js");
}

function rds_mysql_multi_od(type) {
  return get_rds_od_price(type, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-multiAZ-deployments.min.js");
}

function rds_mysql_ri_standard_light_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-light-utilization-reserved-instances.min.js");
}

function rds_mysql_ri_standard_medium_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-medium-utilization-reserved-instances.min.js");
}

function rds_mysql_ri_standard_heavy_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-heavy-utilization-reserved-instances.min.js");
}

function rds_mysql_ri_standard_light_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-light-utilization-reserved-instances.min.js");
}

function rds_mysql_ri_standard_medium_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-medium-utilization-reserved-instances.min.js");
}

function rds_mysql_ri_standard_heavy_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-heavy-utilization-reserved-instances.min.js");
}

function rds_mysql_ri_multi_light_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-light-utilization-reserved-instances.min.js");
}

function rds_mysql_ri_multi_medium_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-medium-utilization-reserved-instances.min.js");
}

function rds_mysql_ri_multi_heavy_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-heavy-utilization-reserved-instances.min.js");
}

function rds_mysql_ri_multi_light_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-light-utilization-reserved-instances.min.js");
}

function rds_mysql_ri_multi_medium_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-medium-utilization-reserved-instances.min.js");
}

function rds_mysql_ri_multi_heavy_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-heavy-utilization-reserved-instances.min.js");
}

// RDS for Postgresql

function rds_postgresql_standard_od(type) {
  return get_rds_od_price(type, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-standard-deployments.min.js");
}

function rds_postgresql_multi_od(type) {
  return get_rds_od_price(type, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-multiAZ-deployments.min.js");
}

function rds_postgresql_ri_standard_light_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-light-utilization-reserved-instances.min.js");
}

function rds_postgresql_ri_standard_medium_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-medium-utilization-reserved-instances.min.js");
}

function rds_postgresql_ri_standard_heavy_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-heavy-utilization-reserved-instances.min.js");
}

function rds_postgresql_ri_standard_light_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-light-utilization-reserved-instances.min.js");
}

function rds_postgresql_ri_standard_medium_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-medium-utilization-reserved-instances.min.js");
}

function rds_postgresql_ri_standard_heavy_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-heavy-utilization-reserved-instances.min.js");
}

function rds_postgresql_ri_multi_light_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-light-utilization-reserved-instances.min.js");
}

function rds_postgresql_ri_multi_medium_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-medium-utilization-reserved-instances.min.js");
}

function rds_postgresql_ri_multi_heavy_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-heavy-utilization-reserved-instances.min.js");
}

function rds_postgresql_ri_multi_light_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-light-utilization-reserved-instances.min.js");
}

function rds_postgresql_ri_multi_medium_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-medium-utilization-reserved-instances.min.js");
}

function rds_postgresql_ri_multi_heavy_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-heavy-utilization-reserved-instances.min.js");
}

// RDS for Oracle(License include)

function rds_oracle_standard_od(type) {
  return get_rds_od_price(type, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-standard-deployments.min.js");
}

function rds_oracle_multi_od(type) {
  return get_rds_od_price(type, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-multiAZ-deployments.min.js");
}

function rds_oracle_ri_standard_light_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-light-utilization-reserved-instances.min.js");
}

function rds_oracle_ri_standard_medium_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-medium-utilization-reserved-instances.min.js");
}

function rds_oracle_ri_standard_heavy_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-heavy-utilization-reserved-instances.min.js");
}

function rds_oracle_ri_standard_light_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-light-utilization-reserved-instances.min.js");
}

function rds_oracle_ri_standard_medium_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-medium-utilization-reserved-instances.min.js");
}

function rds_oracle_ri_standard_heavy_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-heavy-utilization-reserved-instances.min.js");
}

function rds_oracle_ri_multi_light_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-light-utilization-reserved-instances.min.js");
}

function rds_oracle_ri_multi_medium_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-medium-utilization-reserved-instances.min.js");
}

function rds_oracle_ri_multi_heavy_pre(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-heavy-utilization-reserved-instances.min.js");
}

function rds_oracle_ri_multi_light_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-light-utilization-reserved-instances.min.js");
}

function rds_oracle_ri_multi_medium_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-medium-utilization-reserved-instances.min.js");
}

function rds_oracle_ri_multi_heavy_hour(type, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/oracle/pricing-li-heavy-utilization-reserved-instances.min.js");
}