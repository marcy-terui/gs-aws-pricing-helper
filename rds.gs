function get_rds_od_price(type, region, url) {
  var data = eval(getPriceData(url));
  var regions = data['config']['regions'];
  for (var i = 0; i < regions.length; i++) {
    var tmp_region = regions[i]['region'];
    if(tmp_region == getOdRegion(region)) {
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

function get_rds_ri_price(type, region, term, is_hourly, url, purchaseOption) {
  return get_rds_price(type, region, term, is_hourly, url, "purchaseOptions", purchaseOption);
}

function get_rds_price(type, region, term, is_hourly, url, termType, purchaseOption) {
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

function get_rds_old_ri_price(type, region, term, is_hourly, is_multi, url) {
  var data = eval(getPriceData(url));
  var regions = data['config']['regions'];
  for (var i = 0; i < regions.length; i++) {
    var tmp_region = regions[i]['region'];
    if(tmp_region == getOdRegion(region)) {
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
