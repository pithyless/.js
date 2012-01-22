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
