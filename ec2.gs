//EC2

function get_ec2_od_price(type, url) {
  var response = UrlFetchApp.fetch(url);
  var data = eval(response.getContentText());
  var regions = data['config']['regions'];
  for (var i = 0; i < regions.length; i++) {
    var region = regions[i]['region'];
    if(region == OD_REGION_NAME) {
      var instypes = regions[i]['instanceTypes'];
      for (var j = 0; j < instypes.length; j++) {
        var sizes = instypes[j]['sizes'];
        for (var k = 0; k < sizes.length; k++) {
          var size = sizes[k]['size'];
          if(size == type) {
            return sizes[k]['valueColumns'][0]['prices']['USD'];
          }
        }
      }
    }
  }
}

function get_ec2_ri_price(type, term, is_hourly, url) {
  var response = UrlFetchApp.fetch(url);
  var data = eval(response.getContentText());
  var regions = data['config']['regions'];
  for (var i = 0; i < regions.length; i++) {
    var region = regions[i]['region'];
    if(region == RI_REGION_NAME) {
      var instypes = regions[i]['instanceTypes'];
      for (var j = 0; j < instypes.length; j++) {
        var sizes = instypes[j]['sizes'];
        for (var k = 0; k < sizes.length; k++) {
          var valueColumns = sizes[k]['valueColumns'];
          var size = sizes[k]['size'];
          if(size == type) {
            for (var l = 0; l < valueColumns.length; l++) {
              var priceName = valueColumns[l]['name'];
              if(priceName == "yrTerm1" && term == 1 && !is_hourly) {
                return valueColumns[l]['prices']['USD'];
              }
              if(priceName == "yrTerm1Hourly" && term == 1 && is_hourly) {
                return valueColumns[l]['prices']['USD'];
              }
              if(priceName == "yrTerm3" && term == 3 && !is_hourly) {
                return valueColumns[l]['prices']['USD'];
              }
              if(priceName == "yrTerm3Hourly" && term == 3 && is_hourly) {
                return valueColumns[l]['prices']['USD'];
              }
            }
          }
        }
      }
    }
  }
}

//EC2 Linux

function ec2_linux_od(type) {
  return get_ec2_od_price(type, "http://a0.awsstatic.com/pricing/1.0.19/ec2/linux-od.min.js");
}

function ec2_linux_ri_light_pre(type, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, term, false, "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-light.min.js");
}

function ec2_linux_ri_medium_pre(type, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, term, false, "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-medium.min.js");
}

function ec2_linux_ri_heavy_pre(type, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, term, false, "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-heavy.min.js");
}

function ec2_linux_ri_light_hour(type, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, term, true, "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-light.min.js");
}

function ec2_linux_ri_medium_hour(type, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, term, true, "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-medium.min.js");
}

function ec2_linux_ri_heavy_hour(type, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, term, true, "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-heavy.min.js");
}

//EC2 Windows(Standard)

function ec2_windows_od(type) {
  return get_ec2_od_price(type, "http://a0.awsstatic.com/pricing/1.0.19/ec2/mswin-od.min.js");
}

function ec2_windows_ri_light_pre(type, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, term, false, "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-light.min.js");
}

function ec2_windows_ri_medium_pre(type, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, term, false, "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-medium.min.js");
}

function ec2_windows_ri_heavy_pre(type, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, term, false, "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-heavy.min.js");
}

function ec2_windows_ri_light_hour(type, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, term, true, "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-light.min.js");
}

function ec2_windows_ri_medium_hour(type, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, term, true, "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-medium.min.js");
}

function ec2_windows_ri_heavy_hour(type, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, term, true, "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-heavy.min.js");
}
