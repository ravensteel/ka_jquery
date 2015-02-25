(function(app, $, Mustache){
'use strict';

  //private vars
  var ad, service, gallery,
    articleEl, adTemplate;

  //initiate data loading on ready
  $(function(){

    //fast click for mobile
    FastClick.attach(document.body);

    //pre-compile template
    adTemplate = $('#ad-template').html();
    Mustache.parse(adTemplate);

    //dom
    articleEl = $('#article');

    //load ad
    service = new app.Service();
    service.onDataReady(onDataReady);
    service.load();
  });

  /**
   * Invoked when ad has been loaded
   * @param data
   */
  function onDataReady(data){
    ad = data;
    //apply ad data to template
    var rendered = Mustache.render(adTemplate, ad);
    articleEl.html(rendered);

    //init gallery
    gallery = new app.Gallery(ad.images);
  }

}(window.app, jQuery, Mustache));
