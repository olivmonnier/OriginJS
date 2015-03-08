(function() {
  var Origin, root;

  Origin = void 0;

  root = void 0;

  Origin = function() {
    var _gclid, _utmz, cookieExist, searchValue, self;
    searchValue = void 0;
    self = void 0;
    _gclid = void 0;
    _utmz = void 0;
    cookieExist = void 0;
    searchValue = function(l, n, s) {
      var c, i, i2, i3;
      c = void 0;
      i = void 0;
      i2 = void 0;
      i3 = void 0;
      if (!l || l === '' || !n || n === '' || !s || s === '') {
        return '-';
      }
      c = '-';
      i = l.indexOf(n);
      i3 = n.indexOf('=') + 1;
      if (i > -1) {
        i2 = l.indexOf(s, i);
        if (i2 < 0) {
          i2 = l.length;
        }
        c = l.substring(i + i3, i2);
      }
      return c;
    };
    self = this;
    _utmz = searchValue(document.cookie, '__utmz=', ';');
    _gclid = searchValue(_utmz, 'utmgclid=', '|');
    cookieExist = function() {
      var index;
      index = void 0;
      index = document.cookie.indexOf('; __utmz=');
      return index !== -1;
    };
    self.initialize = function() {
      if (cookieExist()) {
        return {
          getSource: function() {
            if (_gclid !== '-') {
              return 'google';
            } else {
              return searchValue(_utmz, 'utmcsr=', '|');
            }
          },
          getMedium: function() {
            if (_gclid !== '-') {
              return 'cpc';
            } else {
              return searchValue(_utmz, 'utmcmd=', '|');
            }
          },
          getContent: function() {
            return searchValue(_utmz, 'utmcct=', '|');
          },
          getCampaign: function() {
            return searchValue(_utmz, 'utmccn=', '|');
          },
          getTerm: function() {
            return searchValue(_utmz, 'utmctr=', '|');
          },
          getParams: function() {
            var params;
            params = window.location.search;
            if (params.length > 0) {
              return JSON.parse('{"' + decodeURIComponent(params).slice(1).split('=').join('":"').split('&').join('","') + '"}');
            } else {
              return {};
            }
          }
        };
      } else {
        setTimeout((function() {
          self.initialize();
        }), 500);
      }
    };
    return self.initialize.apply(self, arguments);
  };

  root = typeof exports !== 'undefined' && exports !== null ? exports : window;

  root.$Origin = Origin;

  return;

}).call(this);
