$('#p-lang li').each(function() {
  var $this = $(this);
  if($this.hasClass('interwiki-pl') || $this.hasClass('interwiki-en')) {
    $this.css('background-color', 'yellow');
  } else {
    // noop
  }
});
