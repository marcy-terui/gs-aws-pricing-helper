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

function get_rds_ri_price(type, region, term, is_hourly, is_multi, url) {
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
