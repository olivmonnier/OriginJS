exports.getBrowserLang = function () {
  return window.navigator.lang;
};

exports.getMedium = function () {
  if (document.referrer.search('https?://(.*)(google|bing|yahoo|daum|eniro|naver|msn|aol|lycos|ask|altavista|netscape|cnn|about|mamma|alltheweb|voila|virgilio|baidu|alice|yandex|najdi|mamma|seznam|search|wp|onetcenter|szukacz|yam|pchome|kvasir|ozu|terra|mynet|ekolay|rambler).([^/?]*)') === 0) {
    return 'organic';
  } else if (document.referrer.search('https?://(.*)(facebook|twitter|linkedin).([^/?]*)') === 0) {
    return 'social';
  } else {
    return 'referal';
  }
}

exports.getNavigator = function () {
  let sBrowser, sUsrAg = navigator.userAgent;

  if(sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome";
  } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
  } else if (sUsrAg.indexOf("Opera") > -1) {
      sBrowser = "Opera";
  } else if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
  } else if (sUsrAg.indexOf("MSIE") > -1) {
      sBrowser = "Microsoft Internet Explorer";
  }

  return sBrowser;
}

exports.getParams = function () {
  const decompose = decodeURIComponent(params).slice(1).split('=').join('":"').split('&').join('","');
  const params = window.location.search;

  return (params.length > 0) ? JSON.parse(`{"${decompose}"}`) : {};
};

exports.getSource = function () {
  if (document.referrer.search('https?://(.*)google.([^/?]*)') === 0) {
    return 'Google';
  } else if (document.referrer.search('https?://(.*)bing.([^/?]*)') === 0) {
    return 'Bing';
  } else if (document.referrer.search('https?://(.*)yahoo.([^/?]*)') === 0) {
    return 'Yahoo';
  } else if (document.referrer.search('https?://(.*)facebook.([^/?]*)') === 0) {
    return 'Facebook';
  } else if (document.referrer.search('https?://(.*)twitter.([^/?]*)') === 0) {
    return 'Twitter';
  } else if (document.referrer.search('https?://(.*)linkedin.([^/?]*)') === 0) {
    return 'Linkedin';
  } else {
    return 'Other';
  }
};

exports.getWindowSize = function () {
  return {
    height: window.innerHeight,
    width: window.innerWidth
  }
}
