(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function getParams() {
  var decompose = decodeURIComponent(params).slice(1).split('=').join('":"').split('&').join('","');
  var params = window.location.search;

  return params.length > 0 ? JSON.parse('{"' + decompose + '"}') : {};
};

function getBrowserLang() {
  return window.navigator.lang;
};

function getSource() {
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

function getMedium() {
  if (document.referrer.search('https?://(.*)(google|bing|yahoo|daum|eniro|naver|msn|aol|lycos|ask|altavista|netscape|cnn|about|mamma|alltheweb|voila|virgilio|baidu|alice|yandex|najdi|mamma|seznam|search|wp|onetcenter|szukacz|yam|pchome|kvasir|ozu|terra|mynet|ekolay|rambler).([^/?]*)') === 0) {
    return 'organic';
  } else if (document.referrer.search('https?://(.*)(facebook|twitter|linkedin).([^/?]*)') === 0) {
    return 'social';
  } else {
    return 'referal';
  }
}

function getWindowSize() {
  return {
    height: window.innerHeight,
    width: window.innerWidth
  };
}

module.exports = {
  getBrowserLang: getBrowserLang,
  getMedium: getMedium,
  getParams: getParams,
  getSource: getSource,
  getWindowSize: getWindowSize
};

},{}]},{},[1]);
