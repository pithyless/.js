/*

news.ycombinator.com by @holman

Less Hacker News == More productivity

This removes all but top 15 stories.

*/

if(window.location.pathname == '/'){
  $('table table tbody tr:nth-child(n+45)').
    css('display','none')

  $('table table:nth-child(2)').
    append('<a id="moar" href="">More</a>')

  $('#moar').
    click(function(){
      $('table table:nth-child(1) tr').css('display','table-row')
      $(this).hide()
      return false;
    }).
    css('padding', '25px')
}

