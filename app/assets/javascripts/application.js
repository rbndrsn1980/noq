// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require ./vendor/noty/jquery.noty
//= require ./vendor/noty/themes/default
//= require ./vendor/noty/layouts/top.js
//= require ./vendor/noty/themes/default
//= require ./vendor/handlebars-1.0.0-rc.4
//= require ./vendor/ember-1.0.0-rc.4
//= require ./vendor/ember-data
//= require ./vendor/localstorage_adapter
//= require ./vendor/moment
//= require ./ember/app
//= require home

$(function() {

  var hideAlert = function() {
    $('div.alert').fadeOut(200); 
  }

  setTimeout(hideAlert, 2000);
  
});


