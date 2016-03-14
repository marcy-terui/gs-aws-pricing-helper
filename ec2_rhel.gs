/**
 * Get price of hourly payment on EC2 RHEL ondemand instance.
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @customfunction
 */
function EC2_RHEL_OD(type, region) {
  return get_ec2_od_price(type, region, "RHEL", "http://a0.awsstatic.com/pricing/1/ec2/rhel-od.min.js");
}

/**
 * Get price of advanced payment on EC2 RHEL reserved instance(No Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_RHEL_RI_NO_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, false, "http://a0.awsstatic.com/pricing/1/ec2/ri-v2/red-hat-enterprise-linux-shared.min.js", "noUpfront");
}

/**
 * Get price of advanced payment on EC2 RHEL reserved instance(Partial Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_RHEL_RI_PART_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, false, "http://a0.awsstatic.com/pricing/1/ec2/ri-v2/red-hat-enterprise-linux-shared.min.js", "partialUpfront");
}

/**
 * Get price of advanced payment on EC2 RHEL reserved instance(All Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_RHEL_RI_ALL_AD(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, false, "http://a0.awsstatic.com/pricing/1/ec2/ri-v2/red-hat-enterprise-linux-shared.min.js", "allUpfront");
}

/**
 * Get price of hourly payment on EC2 RHEL reserved instance(No Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_RHEL_RI_NO_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, true, "http://a0.awsstatic.com/pricing/1/ec2/ri-v2/red-hat-enterprise-linux-shared.min.js", "noUpfront");
}

/**
 * Get price of hourly payment on EC2 RHEL reserved instance(Partial Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_RHEL_RI_PART_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, true, "http://a0.awsstatic.com/pricing/1/ec2/ri-v2/red-hat-enterprise-linux-shared.min.js", "partialUpfront");
}

/**
 * Get price of hourly payment on EC2 RHEL reserved instance(All Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function EC2_RHEL_RI_ALL_HOUR(type, region, term) {
  if(!term) term = 1
  return get_ec2_ri_price(type, region, term, true, "http://a0.awsstatic.com/pricing/1/ec2/ri-v2/red-hat-enterprise-linux-shared.min.js",  "allUpfront");
}
