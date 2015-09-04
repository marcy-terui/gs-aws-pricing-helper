/**
 * Get price of hourly payment on RDS for MySQL standard deployment ondemand instance.
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @customfunction
 */
function RDS_MYSQL_STD_OD(type, region) {
  return get_rds_od_price(type, region, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-standard-deployments.min.js");
}

/**
 * Get price of hourly payment on RDS for MySQL Multi-AZ deployment ondemand instance.
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_OD(type, region) {
  return get_rds_od_price(type, region, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-multiAZ-deployments.min.js");
}

/**
 * Get price of advanced payment on RDS for MySQL standard deployment reserved instance(No Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_STD_RI_NO_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, false, "https://a0.awsstatic.com/pricing/1/rds/reserved-instances/mysql-standard.min.js", "noUpfront");
}

/**
 * Get price of advanced payment on RDS for MySQL standard deployment reserved instance(Partial Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_STD_RI_PART_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, false, "https://a0.awsstatic.com/pricing/1/rds/reserved-instances/mysql-standard.min.js", "partialUpfront");
}

/**
 * Get price of advanced payment on RDS for MySQL standard deployment reserved instance(All Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_STD_RI_ALL_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, false, "https://a0.awsstatic.com/pricing/1/rds/reserved-instances/mysql-standard.min.js", "allUpfront");
}

/**
 * Get price of hourly payment on RDS for MySQL standard deployment reserved instance(No Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_STD_RI_NO_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, true, "https://a0.awsstatic.com/pricing/1/rds/reserved-instances/mysql-standard.min.js", "noUpfront");
}

/**
 * Get price of hourly payment on RDS for MySQL standard deployment reserved instance(Partial Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_STD_RI_PART_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, true, "https://a0.awsstatic.com/pricing/1/rds/reserved-instances/mysql-standard.min.js", "partialUpfront");
}

/**
 * Get price of hourly payment on RDS for MySQL Multi-AZ deployment reserved instance(All Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_STD_RI_ALL_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, true, "https://a0.awsstatic.com/pricing/1/rds/reserved-instances/mysql-standard.min.js", "allUpfront");
}

/**
 * Get price of advanced payment on RDS for MySQL Multi-AZ deployment reserved instance(No Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_RI_NO_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, false, "https://a0.awsstatic.com/pricing/1/rds/reserved-instances/mysql-multiAZ.min.js", "noUpfront");
}

/**
 * Get price of advanced payment on RDS for MySQL Multi-AZ deployment reserved instance(Partial Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_RI_PART_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, false, "https://a0.awsstatic.com/pricing/1/rds/reserved-instances/mysql-multiAZ.min.js", "partialUpfront");
}

/**
 * Get price of advanced payment on RDS for MySQL Multi-AZ deployment reserved instance(All Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_RI_ALL_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, false, "https://a0.awsstatic.com/pricing/1/rds/reserved-instances/mysql-multiAZ.min.js", "allUpfront");
}

/**
 * Get price of hourly payment on RDS for MySQL Multi-AZ deployment reserved instance(No Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_RI_NO_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, true, "https://a0.awsstatic.com/pricing/1/rds/reserved-instances/mysql-multiAZ.min.js", "noUpfront");
}

/**
 * Get price of hourly payment on RDS for MySQL Multi-AZ deployment reserved instance(Partial Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_RI_PART_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, true, "https://a0.awsstatic.com/pricing/1/rds/reserved-instances/mysql-multiAZ.min.js", "partialUpfront");
}

/**
 * Get price of hourly payment on RDS for MySQL Multi-AZ deployment reserved instance(All Upfront).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_RI_ALL_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, true, "https://a0.awsstatic.com/pricing/1/rds/reserved-instances/mysql-multiAZ.min.js", "allUpfront");
}

/**
 * Get price of advanced payment on RDS for MySQL standard deployment reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_STD_RI_LIGHT_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_old_ri_price(type, region, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-light-utilization-reserved-instances.min.js");
}

/**
 * Get price of advanced payment on RDS for MySQL standard deployment reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_STD_RI_MEDIUM_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_old_ri_price(type, region, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-medium-utilization-reserved-instances.min.js");
}

/**
 * Get price of advanced payment on RDS for MySQL standard deployment reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_STD_RI_HEAVY_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_old_ri_price(type, region, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-heavy-utilization-reserved-instances.min.js");
}

/**
 * Get price of hourly payment on RDS for MySQL standard deployment reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_STD_RI_LIGHT_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_old_ri_price(type, region, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-light-utilization-reserved-instances.min.js");
}

/**
 * Get price of hourly payment on RDS for MySQL standard deployment reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_STD_RI_MEDIUM_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_old_ri_price(type, region, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-medium-utilization-reserved-instances.min.js");
}

/**
 * Get price of hourly payment on RDS for MySQL standard deployment reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_STD_RI_HEAVY_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_old_ri_price(type, region, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-heavy-utilization-reserved-instances.min.js");
}

/**
 * Get price of advanced payment on RDS for MySQL Multi-AZ deployment reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_RI_LIGHT_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_old_ri_price(type, region, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-light-utilization-reserved-instances.min.js");
}

/**
 * Get price of advanced payment on RDS for MySQL Multi-AZ deployment reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_RI_MEDIUM_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_old_ri_price(type, region, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-medium-utilization-reserved-instances.min.js");
}

/**
 * Get price of advanced payment on RDS for MySQL Multi-AZ deployment reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_RI_HEAVY_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_old_ri_price(type, region, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-heavy-utilization-reserved-instances.min.js");
}

/**
 * Get price of hourly payment on RDS for MySQL Multi-AZ deployment reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_RI_LIGHT_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_old_ri_price(type, region, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-light-utilization-reserved-instances.min.js");
}

/**
 * Get price of hourly payment on RDS for MySQL Multi-AZ deployment reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_RI_MEDIUM_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_old_ri_price(type, region, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-medium-utilization-reserved-instances.min.js");
}

/**
 * Get price of hourly payment on RDS for MySQL Multi-AZ deployment reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_MYSQL_MULTI_RI_HEAVY_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_old_ri_price(type, region, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/mysql/pricing-heavy-utilization-reserved-instances.min.js");
}
