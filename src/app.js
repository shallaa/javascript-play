/*global $*/

global.$ = require('jquery');
require('modernizr');

$(_ => {
  $(window).resize(_ => {
    const width = $(window).width();
    const height = $(window).height();
    
    $('#content').height(height).find('fieldset').width(width / 2);
  });
  
  $(window).resize();
});