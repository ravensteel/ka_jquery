(function (app, $) {
  'use strict';

  var IMAGES = 'data/images/', preload;

  /**
   *
   * @constructor
   */
  function Gallery(images) {

    //add gallery listeners
    $(document).on({
      click: imageSelected,
      mouseover: imageSelected
    }, '#gallery a');

    preloadImages(images);

    //show first image by default
    showImage(images[0].full);
  }

  app.Gallery = Gallery;

  //--- private functions ---//
  /**
   * Preloads full images
   * @param images
   */
  function preloadImages(images) {
    preload = [];
    $.each(images, function (idx, data) {
      var img = new Image();
      img.src = IMAGES + data.full;
      preload.push(img);
    });
  }

  /**
   * Handles tap/mouseover event over gallery image.
   *
   * @param evt
   */
  function imageSelected(evt) {
    evt.preventDefault();
    var imageName = $(this).data('id');
    showImage(imageName);
  }

  /**
   * Display selected image
   * @param imageName
   */
  function showImage(imageName) {
    var imageEl = $('#photo > img');
    if (imageEl.length === 0) {
      //create new image element
      imageEl = $('<img>');
      $('#photo').append(imageEl);
    }
    imageEl.attr('src', IMAGES + imageName);
  }

}(window.app = window.app || {}, jQuery));
