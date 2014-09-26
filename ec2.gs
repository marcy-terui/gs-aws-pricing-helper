function get_ec2_od_price(type, region, url) {
  var data = eval(getPriceData(url));
  var regions = data['config']['regions'];
  for (var i = 0; i < regions.length; i++) {
    if(regions[i]['region'] == getOdRegion(region)) {
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

function get_ec2_ri_price(type, region, term, is_hourly, url) {
  var data = eval(getPriceData(url));
  var regions = data['config']['regions'];
  for (var i = 0; i < regions.length; i++) {
    if(regions[i]['region'] == getRiRegion(region)) {
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
