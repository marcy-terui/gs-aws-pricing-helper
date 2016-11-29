function get_ec2_od_price(size, region, os, url) {
  var data = eval(getPriceData(url));
  var regions = data['config']['regions'];
  for (var i = 0; i < regions.length; i++) {
    if(regions[i]['region'] == getRiRegion(region)) {
      var instypes = regions[i]['instanceTypes'];
      for (var j = 0; j < instypes.length; j++) {
        sizes = instypes[j]['sizes']
        for (var k = 0; k < sizes.length; k++) {
          if(sizes[k]['size'] == size) {
            var val = sizes[k]['valueColumns'];
            for (var k = 0; k < val.length; k++) {
              if (val[k]['name'] == os) {
                return val[k]['prices']['USD']
              }
            }
          }
        }
      }
    }
  }
}


function get_ec2_ri_price(type, region, term, is_hourly, url, purchaseOption) {
  return get_ec2_price(type, region, term, is_hourly, url, "purchaseOptions", purchaseOption);
}

function get_ec2_price(type, region, term, is_hourly, url, termType, purchaseOption) {
  var data = eval(getPriceData(url));
  var regions = data['config']['regions'];
  for (var i = 0; i < regions.length; i++) {
    if(regions[i]['region'] == getRiRegion(region)) {
      var instypes = regions[i]['instanceTypes'];
      for (var j = 0; j < instypes.length; j++) {
        if(instypes[j]['type'] == type) {
          var terms = instypes[j]['terms'];
          for (var l = 0; l < terms.length; l++) {
            if((terms[l]['term'] == "yrTerm1Standard" && term == 1)
               || (terms[l]['term'] == "yrTerm3Standard" && term == 3)) {
              var purchaseOptions = terms[l][termType]
              for (var k = 0; k < purchaseOptions.length; k++) {
                if (purchaseOptions[k]['purchaseOption'] == purchaseOption) {
                  if (is_hourly == null) {
                    return parseFloat(purchaseOptions[k]['prices']['USD']);
                  }
                  var valueColumns = purchaseOptions[k]['valueColumns'];
                  for (var m = 0; m < valueColumns.length; m++) {
                    if (is_hourly && valueColumns[m]['name'] == "monthlyStar") {
                      return parseFloat(valueColumns[m]['prices']['USD']) / 730.0;
                    }
                    if (!is_hourly && valueColumns[m]['name'] == "upfront") {
                      return parseFloat(valueColumns[m]['prices']['USD']);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function get_ec2_old_ri_price(type, region, term, is_hourly, url) {
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
