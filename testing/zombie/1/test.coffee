chai = require 'chai'
chai.should()

Browser = require 'zombie'

Browser.localhost 'localhost', 3001
browser = new Browser()


describe 'browser', ->

  before (done) ->
    # browser.silent = true
    # browser.on('console', (level, message) -> (
    #   console.log('#     ', message))
    # )
    browser.visit '/demo/?widget-development&pixi_debug', ->
      done()


  describe 'visiting', ->

    it 'should success', ->
      browser.assert.success()

    it 'should see the image', ->
      browser.assert.element '#image1'



  describe 'is showing the ad?', ->

    id = '#pixenka-ad-container'

    it 'should see pixenka container', ->
      browser.assert.element id

    it 'should set the ad', ->
      browser.assert.containerParam 'bannerUrl',
        'http://ads.pixenka.com/demos/avon/luck/banner2.swf'

    it 'should set ad to image width', ->
      browser.assert.containerParam 'imageWidth', '400'

    it 'should set flipper ad height to 100px', ->
      browser.assert.evaluate "$('#{id}').height()", '100'


Browser.Assert.prototype.containerParam = (param, expected, message) ->
  browser.assert.attribute(
    "#pixenka-ad-container object param[name='flashvars']",
    'value',
    -> (
      params = fromQueryStringToObj(arguments[0].split('&'))
      console.log params
      params[param].should.equal expected
    ),
    message
  )

fromQueryStringToObj = (params) ->
  if params == '' then return {}

  [ b, i ] = [ {}, 0 ]

  while i < params.length
    p = params[i++].split('=', 2)
    if p.length == 1
      b[p[0]] = ''
    else
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '))

  return b
