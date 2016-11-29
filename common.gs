regions = {
  "us-east-1"     : "us-east-1",
  "us-east-2"     : "us-east-2",
  "us-west-1"     : "us-west-1",
  "us-west-2"     : "us-west-2",
  "eu-west-1"     : "eu-ireland",
  "ap-southeast-1": "apac-sin",
  "ap-southeast-2": "apac-syd",
  "ap-northeast-1": "apac-tokyo",
  "sa-east-1"     : "sa-east-1",
  "eu-central-1"  : "eu-central-1"
}

function onInstall(e) {
  onOpen(e);
}

function callback(json) {
  return eval(json);
}

function getOdRegion(region) {
  return regions[getRiRegion(region)];
}

function getRiRegion(region) {
  if(region) { return region; }
  return "ap-northeast-1";
}

function onOpen(e){
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createAddonMenu();
  menu.addItem('Show manual', 'showSideManual');
  menu.addToUi();
}

function showSideManual() {
  var html = HtmlService.createHtmlOutputFromFile('SideManual');
  html.setTitle('AWS Pricing Helper Manual');
  var ui = SpreadsheetApp.getUi();
  ui.showSidebar(html);
}

function getPriceData(url) {
  var key = Utilities.base64Encode(url);
  var cacheHandler = new cCacheHandler.CacheHandler(600,null,false,false,CacheService.getPublicCache(), key);
//  var cache = CacheService.getPublicCache();
//  var cached = cache.get(key);
//  if (cached == null) {
//    cached = UrlFetchApp.fetch(url).getContentText();
//    cache.put(key, cached);
//  }
  var cached = cacheHandler.getCache(key);
  if (cached == null) {
    cached = UrlFetchApp.fetch(url).getContentText();
    cacheHandler.putCache(cached, key);
  }
  return cached;
}
