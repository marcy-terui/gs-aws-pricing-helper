//Common

OD_REGION_NAME = "apac-tokyo"
RI_REGION_NAME = "ap-northeast-1"

function callback(json) {
  return eval(json);
}

function exchange_yen(usd) {
  if (!usd) usd = 1;
  var response = UrlFetchApp.fetch("http://rate-exchange.appspot.com/currency?from=usd&to=jpy");
  var data = JSON.parse(response.getContentText());
  return data['rate'] * usd;
}