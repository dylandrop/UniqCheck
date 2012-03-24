// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap/transition
//= require bootstrap/alerts
//= require bootstrap/modal
//= require bootstrap/dropdown
//= require bootstrap/scrollspy
//= require bootstrap/tabs
//= require bootstrap/twipsy
//= require bootstrap/popover
//= require bootstrap/button
//= require bootstrap/carousel
//= require bootstrap/collapse

function remove_fields(link) {
  $(link).prev("input[type=hidden]").val("1");
  $(link).closest(".field").hide();
}

function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g")
  $(link).before(content.replace(regexp, new_id));
}
