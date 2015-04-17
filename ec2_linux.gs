/**
 * Get price of hourly payment on EC2 Linux ondemand instance.
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @customfunction
 */
function EC2_LINUX_OD(type, region) {
  return get_ec2_od_price(type, region, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/linux-unix-shared.min.js");
}

/**
 * Get price of advanced payment on EC2 Linux reserved instance(No Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_LINUX_RI_NO_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, false, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/linux-unix-shared.min.js", "noUpfront");
}

/**
 * Get price of advanced payment on EC2 Linux reserved instance(Partial Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_LINUX_RI_PART_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, false, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/linux-unix-shared.min.js", "partialUpfront");
}

/**
 * Get price of advanced payment on EC2 Linux reserved instance(All Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_LINUX_RI_ALL_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, false, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/linux-unix-shared.min.js", "allUpfront");
}

/**
 * Get price of hourly payment on EC2 Linux reserved instance(No Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_LINUX_RI_NO_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, true, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/linux-unix-shared.min.js", "noUpfront");
}

/**
 * Get price of hourly payment on EC2 Linux reserved instance(Partial Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_LINUX_RI_PART_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, true, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/linux-unix-shared.min.js", "partialUpfront");
}

/**
 * Get price of hourly payment on EC2 Linux reserved instance(All Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_LINUX_RI_ALL_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, true, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/linux-unix-shared.min.js",  "allUpfront");
}

/**
 * Get price of advanced payment on EC2 Linux reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_LINUX_RI_LIGHT_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_old_ri_price(type, region, term, false, "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-light.min.js");
}

/**
 * Get price of advanced payment on EC2 Linux reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_LINUX_RI_MEDIUM_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_old_ri_price(type, region, term, false, "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-medium.min.js");
}

/**
 * Get price of advanced payment on EC2 Linux reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_LINUX_RI_HEAVY_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_old_ri_price(type, region, term, false, "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-heavy.min.js");
}

/**
 * Get price of hourly payment on EC2 Linux reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_LINUX_RI_LIGHT_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_old_ri_price(type, region, term, true, "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-light.min.js");
}

/**
 * Get price of hourly payment on EC2 Linux reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_LINUX_RI_MEDIUM_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_old_ri_price(type, region, term, true, "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-medium.min.js");
}

/**
 * Get price of hourly payment on EC2 Linux reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_LINUX_RI_HEAVY_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_old_ri_price(type, region, term, true, "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-heavy.min.js");
}
