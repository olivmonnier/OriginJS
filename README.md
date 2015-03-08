# OriginJS

## Requirement
* google analytics installed

## Getting started
```javascript
bower install originjs
```
or
```javascript
npm install originjs
```
## How it works
```javascript
var origin = new $Origin();

origin.getSource() //=> return utm_source
origin.getMedium() //=> return utm_medium
origin.getContent() //=> return utm_content
origin.getCampaign() //=> return utm_campaign
origin.getTerm() //=> return utm_term
origin.getParams() //=> return url params in object type
```
## Contributing
1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Added some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## Licence
```
MIT
```
