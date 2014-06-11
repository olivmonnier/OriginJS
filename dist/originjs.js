(function() {
  var LaunchOrigin, Origin, root;

  Origin = void 0;

  LaunchOrigin = void 0;

  root = void 0;

  Origin = function() {
    var searchValue, self, _gclid, _utmz;
    searchValue = function(l, n, s) {
      var c, i, i2, i3;
      if (!l || l === "" || !n || n === "" || !s || s === "") {
        return "-";
      }
      i = void 0;
      i2 = void 0;
      i3 = void 0;
      c = "-";
      i = l.indexOf(n);
      i3 = n.indexOf("=") + 1;
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
    _utmz = searchValue(document.cookie, "__utmz=", ";");
    _gclid = searchValue(_utmz, "utmgclid=", "|");
    return {
      findSource: function() {
        if (_gclid !== "-") {
          return "google";
        } else {
          return searchValue(_utmz, "utmcsr=", "|");
        }
      },
      findMedium: function() {
        if (_gclid !== "-") {
          return "cpc";
        } else {
          return searchValue(_utmz, "utmcmd=", "|");
        }
      },
      findContent: function() {
        return searchValue(_utmz, "utmcct=", "|");
      },
      findCampaign: function() {
        return searchValue(_utmz, "utmccn=", "|");
      },
      findTerm: function() {
        return searchValue(_utmz, "utmctr=", "|");
      }
    };
  };

  LaunchOrigin = function(fn) {
    var constructor, cookieExist, self;
    self = this;
    cookieExist = function() {
      var index;
      index = document.cookie.indexOf("; __utmz=");
      return index !== -1;
    };
    constructor = function(fn) {
      var origin;
      if (cookieExist()) {
        origin = new Origin();
        fn(origin);
      } else {
        setTimeout((function() {
          self.constructor(fn);
        }), 500);
      }
    };
    constructor.apply(self, arguments_);
  };

  root = (typeof exports !== "undefined" && exports !== null ? exports : window);

  root.$Origin = Origin;

  root.$LaunchOrigin = LaunchOrigin;

}).call(this);
