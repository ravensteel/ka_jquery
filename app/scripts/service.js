(function(app, $){
'use strict';

  var AD_URL = 'data/ad.json',
    readyCallbacks = null;

  /**
   *
   * @constructor
   */
  function Service(){
    readyCallbacks = $.Callbacks();
  }

  app.Service = Service;

  Service.prototype.onDataReady = function(fn){
    readyCallbacks.add(fn);
  };

  Service.prototype.load = function(){
    $.get(AD_URL, dataLoaded);
  };

  //--- private functions ---//

  function dataLoaded(data){
    readyCallbacks.fire(data);
  }

}(window.app = window.app || {}, jQuery));
