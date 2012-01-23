/*
 *
 * Removes Google tracker links for search results;
 * now clicking on a link does what you think it should.
 *
 * It's far from perfect, but it's a start. Patches welcome!
 *
 */

var removeRedirects = function() {
  setTimeout(function() {
    $('h3.r a').each(function() {
      $(this).removeAttr('onmousedown');
    })
  }, 1500);
};

$('#sblsbb button').click(function() {
  removeRedirects();
});

$('#lst-ib').bind('keydown', function(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if(code == 13) {
    removeRedirects();
  }
});

$(document).ready(function() {
  removeRedirects();
});

/*
 * Spice up the logo
 */

$('#logo img').attr('src', 'http://f.cl.ly/items/1a3I3A1W3J1N172c2a31/mario-180x80.jpg')
              .attr('width', '180').attr('height', '80')
              .css('top', '0px').css('left', '-25px');
$('#logo').css('overflow', 'none').css('height', '73px').css('width', '180px')
          .css('margin-left', '-25px').css('margin-top', '-20px').c;
