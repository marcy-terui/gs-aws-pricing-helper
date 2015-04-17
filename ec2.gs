function get_ec2_od_price(type, region, url) {
<<<<<<< HEAD
  var data = eval(getPriceData(url));
  var regions = data['config']['regions'];
  for (var i = 0; i < regions.length; i++) {
    if(regions[i]['region'] == getRiRegion(region)) {
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
=======
  return get_ec2_price(type, region, 1, null, url, "onDemandHourly", "ODHourly");
}

function get_ec2_ri_price(type, region, term, is_hourly, url, purchaseOption) {
  return get_ec2_price(type, region, term, is_hourly, url, "purchaseOptions", purchaseOption);
>>>>>>> 57ec96894c65d09eab4ff6b4acee5f09ce899e32
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
            if((terms[l]['term'] == "yrTerm1" && term == 1)
               || (terms[l]['term'] == "yrTerm3" && term == 3)) {
              var purchaseOptions = terms[l][termType]
              for (var k = 0; k < purchaseOptions.length; k++) {
                if (purchaseOptions[k]['purchaseOption'] == purchaseOption) {
                  if (is_hourly == null) {
                    return parseFloat(purchaseOptions[k]['prices']['USD']);
                  }

                  var valueColumns = purchaseOptions[k]['valueColumns'];
                  for (var m = 0; m < valueColumns.length; m++) {
                    if (is_hourly && valueColumns[m]['name'] == "effectiveHourly") {
                      return parseFloat(valueColumns[m]['prices']['USD']);
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
