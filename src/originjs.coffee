Origin = undefined
root = undefined

Origin = ->
  searchValue = undefined
  self = undefined
  _gclid = undefined
  _utmz = undefined
  cookieExist = undefined

  searchValue = (l, n, s) ->
    c = undefined
    i = undefined
    i2 = undefined
    i3 = undefined
    if !l or l == '' or !n or n == '' or !s or s == ''
      return '-'
    c = '-'
    i = l.indexOf(n)
    i3 = n.indexOf('=') + 1
    if i > -1
      i2 = l.indexOf(s, i)
      if i2 < 0
        i2 = l.length
      c = l.substring(i + i3, i2)
    c

  self = this
  _utmz = searchValue(document.cookie, '__utmz=', ';')
  _gclid = searchValue(_utmz, 'utmgclid=', '|')

  cookieExist = ->
    index = undefined
    index = document.cookie.indexOf('; __utmz=')
    index != -1

  self.initialize = ->
    if cookieExist()
      return {
        getSource: ->
          if _gclid != '-'
            'google'
          else
            searchValue _utmz, 'utmcsr=', '|'
        getMedium: ->
          if _gclid != '-'
            'cpc'
          else
            searchValue _utmz, 'utmcmd=', '|'
        getContent: ->
          searchValue _utmz, 'utmcct=', '|'
        getCampaign: ->
          searchValue _utmz, 'utmccn=', '|'
        getTerm: ->
          searchValue _utmz, 'utmctr=', '|'
        getParams: ->
          params = window.location.search
          if params.length > 0
            JSON.parse '{"' + decodeURIComponent(params).slice(1).split('=').join('":"').split('&').join('","') + '"}'
          else
            {}

      }
    else
      setTimeout (->
        self.initialize()
        return
      ), 500
    return

  self.initialize.apply self, arguments

root = if typeof exports != 'undefined' and exports != null then exports else window
root.$Origin = Origin
return
