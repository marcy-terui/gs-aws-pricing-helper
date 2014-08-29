/**
 * Get price of hourly payment on RDS for PostgreSQL standard deployment ondemand instance.
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @customfunction
 */
function RDS_PGSQL_STD_OD(type, region) {
  return get_rds_od_price(type, region, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-standard-deployments.min.js");
}

/**
 * Get price of hourly payment on RDS for PostgreSQL standard deployment ondemand instance.
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @customfunction
 */
function RDS_PGSQL_MULTI_OD(type, region) {
  return get_rds_od_price(type, region, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-multiAZ-deployments.min.js");
}

/**
 * Get price of advanced payment on RDS for PostgreSQL standard deployment reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_PGSQL_STD_RI_LIGHT_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-light-utilization-reserved-instances.min.js");
}

/**
 * Get price of advanced payment on RDS for PostgreSQL standard deployment reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_PGSQL_STD_RI_MEDIUM_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-medium-utilization-reserved-instances.min.js");
}

/**
 * Get price of advanced payment on RDS for PostgreSQL standard deployment reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_PGSQL_STD_RI_HEAVY_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, false, false, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-heavy-utilization-reserved-instances.min.js");
}

/**
 * Get price of hourly payment on RDS for PostgreSQL standard deployment reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_PGSQL_STD_RI_LIGHT_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-light-utilization-reserved-instances.min.js");
}

/**
 * Get price of hourly payment on RDS for PostgreSQL standard deployment reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_PGSQL_STD_RI_MEDIUM_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-medium-utilization-reserved-instances.min.js");
}

/**
 * Get price of hourly payment on RDS for PostgreSQL standard deployment reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_PGSQL_STD_RI_HEAVY_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, true, false, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-heavy-utilization-reserved-instances.min.js");
}

/**
 * Get price of advanced payment on RDS for PostgreSQL Multi-AZ deployment reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_PGSQL_MULTI_RI_LIGHT_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-light-utilization-reserved-instances.min.js");
}

/**
 * Get price of advanced payment on RDS for PostgreSQL Multi-AZ deployment reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_PGSQL_MULTI_RI_MEDIUM_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-medium-utilization-reserved-instances.min.js");
}

/**
 * Get price of advanced payment on RDS for PostgreSQL Multi-AZ deployment reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_PGSQL_MULTI_RI_HEAVY_AD(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, false, true, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-heavy-utilization-reserved-instances.min.js");
}

/**
 * Get price of hourly payment on RDS for PostgreSQL Multi-AZ deployment reserved instance(Light utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_PGSQL_MULTI_RI_LIGHT_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-light-utilization-reserved-instances.min.js");
}

/**
 * Get price of hourly payment on RDS for PostgreSQL Multi-AZ deployment reserved instance(Medium utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_PGSQL_MULTI_RI_MEDIUM_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-medium-utilization-reserved-instances.min.js");
}

/**
 * Get price of hourly payment on RDS for PostgreSQL Multi-AZ deployment reserved instance(Heavy utilization).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @param {term} Reserved term(years,optional)
 * @customfunction
 */
function RDS_PGSQL_MULTI_RI_HEAVY_HOUR(type, region, term) {
  if(!term) term = 1
  return get_rds_ri_price(type, region, term, true, true, "http://a0.awsstatic.com/pricing/1/rds/postgresql/pricing-heavy-utilization-reserved-instances.min.js");
}
