function get_ebs_price(region, type_name, sub_price) {
  if(!sub_price) sub_price = false
  var data = eval(getPriceData("http://a0.awsstatic.com/pricing/1/ebs/pricing-ebs.min.js"));
  var regions = data['config']['regions'];
  for (var i = 0; i < regions.length; i++) {
    if(regions[i]['region'] == getOdRegion(region)) {
      var types = regions[i]['types'];
      for (var j = 0; j < types.length; j++) {
        if(types[j]['name'] == type_name) {
          if(!sub_price) { return types[j]['values'][0]['prices']['USD']; }
          else { return types[j]['values'][1]['prices']['USD']; }
        }
      }
    }
  }
}

/**
 * Get price of hourly payment (per GB) on EBS General Purpose (SSD) volumes.
 *
 * @param {region} Region(optional)
 * @customfunction
 */
function EBS_GP2_STORAGE(region) {
  return get_ebs_price(region, "Amazon EBS General Purpose (SSD) volumes");
}

/**
 * Get price of hourly payment (per GB) on EBS Magnetic volumes.
 *
 * @param {region} Region(optional)
 * @customfunction
 */
function EBS_MAGNETIC_STORAGE(region) {
  return get_ebs_price(region, "Amazon EBS Magnetic volumes");
}

/**
 * Get price of hourly payment (per GB) on EBS Provisioned IOPS (SSD) volumes.
 *
 * @param {region} Region(optional)
 * @customfunction
 */
function EBS_PIOPS_STORAGE(region) {
  return get_ebs_price(region, "Amazon EBS Provisioned IOPS (SSD) volumes");
}

/**
 * Get price of hourly payment (per IOPS) on EBS Provisioned IOPS (SSD) volumes.
 *
 * @param {region} Region(optional)
 * @customfunction
 */
function EBS_PIOPS_PROV(region) {
  return get_ebs_price(region, "Amazon EBS Provisioned IOPS (SSD) volumes", true);
}

/**
 * Get price of hourly payment (per 1M IO requests) on EBS Provisioned IOPS (SSD) volumes.
 *
 * @param {region} Region(optional)
 * @customfunction
 */
function EBS_MAGNETIC_IO(region) {
  return get_ebs_price(region, "Amazon EBS Magnetic volumes", true);
}

/**
 * Get price of hourly payment (per 1M IO requests) on EBS Provisioned IOPS (SSD) volumes.
 *
 * @param {region} Region(optional)
 * @customfunction
 */
function EBS_SNAPSHOT_STORAGE(region) {
  return get_ebs_price(region, "ebsSnapsToS3");
}
