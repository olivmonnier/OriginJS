Origin = undefined
LaunchOrigin = undefined
root = undefined
Origin = ->
  searchValue = (l, n, s) ->
    return "-"  if not l or l is "" or not n or n is "" or not s or s is ""
    i = undefined
    i2 = undefined
    i3 = undefined
    c = "-"
    i = l.indexOf(n)
    i3 = n.indexOf("=") + 1
    if i > -1
      i2 = l.indexOf(s, i)
      i2 = l.length  if i2 < 0
      c = l.substring((i + i3), i2)
    c

  self = this
  _utmz = searchValue(document.cookie, "__utmz=", ";")
  _gclid = searchValue(_utmz, "utmgclid=", "|")
  findSource: ->
    unless _gclid is "-"
      "google"
    else
      searchValue _utmz, "utmcsr=", "|"

  findMedium: ->
    unless _gclid is "-"
      "cpc"
    else
      searchValue _utmz, "utmcmd=", "|"

  findContent: ->
    searchValue _utmz, "utmcct=", "|"

  findCampaign: ->
    searchValue _utmz, "utmccn=", "|"

  findTerm: ->
    searchValue _utmz, "utmctr=", "|"

LaunchOrigin = (fn) ->
  self = this
  cookieExist = ->
    index = document.cookie.indexOf("; __utmz=")
    index isnt -1

  constructor = (fn) ->
    if cookieExist()
      origin = new Origin()
      fn origin
    else
      setTimeout (->
        self.constructor fn
        return
      ), 500
    return

  constructor.apply self, arguments_
  return

root = (if typeof exports isnt "undefined" and exports isnt null then exports else window)
root.$Origin = Origin
root.$LaunchOrigin = LaunchOrigin