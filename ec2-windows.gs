/**
 * Get price of hourly payment on EC2 Windows Server ondemand instance.
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @customfunction
 */
function EC2_WINDOWS_OD(type, region) {
  return get_ec2_od_price(type, region, "mswin", "https://a0.awsstatic.com/pricing/1/ec2/mswin-od.min.js");
}

/**
 * Get price of advanced payment on EC2 Windows Server reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_WINDOWS_RI_NO_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, false, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/windows-shared.min.js", "noUpfront");
}

/**
 * Get price of advanced payment on EC2 Windows Server reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_WINDOWS_RI_PART_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, false, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/windows-shared.min.js", "partialUpfront");
}

/**
 * Get price of advanced payment on EC2 Windows Server reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_WINDOWS_RI_ALL_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, false, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/windows-shared.min.js", "allUpfront");
}

/**
 * Get price of hourly payment on EC2 Windows Server reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_WINDOWS_RI_NO_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, true, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/windows-shared.min.js", "noUpfront");
}

/**
 * Get price of hourly payment on EC2 Windows Server reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_WINDOWS_RI_PART_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, true, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/windows-shared.min.js", "partialUpfront");
}

/**
 * Get price of hourly payment on EC2 Windows Server reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_WINDOWS_RI_ALL_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, true, "https://a0.awsstatic.com/pricing/1/ec2/ri-v2/windows-shared.min.js", "allUpfront");
}

/**
 * Get price of advanced payment on EC2 Windows Server reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_WINDOWS_RI_LIGHT_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, false, "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-light.min.js");
}

/**
 * Get price of advanced payment on EC2 Windows Server reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_WINDOWS_RI_MEDIUM_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_old_ri_price(type, region, term, false, "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-medium.min.js");
}

/**
 * Get price of advanced payment on EC2 Windows Server reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_WINDOWS_RI_HEAVY_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_old_ri_price(type, region, term, false, "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-heavy.min.js");
}

/**
 * Get price of hourly payment on EC2 Windows Server reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_WINDOWS_RI_LIGHT_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_old_ri_price(type, region, term, true, "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-light.min.js");
}

/**
 * Get price of hourly payment on EC2 Windows Server reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_WINDOWS_RI_MEDIUM_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_old_ri_price(type, region, term, true, "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-medium.min.js");
}

/**
 * Get price of hourly payment on EC2 Windows Server reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_WINDOWS_RI_HEAVY_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_old_ri_price(type, region, term, true, "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-heavy.min.js");
}
