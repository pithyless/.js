if ($('#content h2:first').text() == 'Roadmap') {

  // Reload to show defects and stories
  function getParameters(paramName) {
    var searchString = window.location.search.substring(1),
        i, val, params = searchString.split("&");
    var values = [];
  
    for (i=0;i<params.length;i++) {
      val = params[i].split("=");
      if (val[0] == paramName) {
        values.push(unescape(val[1]));
      }
    }
    return values;
  }

  var ids = getParameters('tracker_ids[]');
  if (ids.indexOf('1') == -1 || ids.indexOf('2') == -1 || ids.indexOf('4') == -1) {
    window.location.href = window.location.pathname + '?tracker_ids[]=1&tracker_ids[]=2&tracker_ids[]=4'
  }


  // Show Priority

  $('table.related-issues').find('tr.hascontextmenu').each(function() {
    var task = $(this).find('td:nth(1) a');
    var status = '';
    if(task.hasClass('priority-3')) {
      status = 'Normal';
    } else if(task.hasClass('priority-4')) {
      status = 'Low';
    } else if(task.hasClass('priority-5')) {
      status = 'Very Low';
    }
    $(this).append('<td>' + status + '</td>');
  });


  // Show Status

  $('table.related-issues').find('tr.hascontextmenu').each(function() {
    var $row = $(this);
    var task = $row.find('td:nth(1) a');
    var status = '';
    if(task.hasClass('status-1')) {
      status = 'New';
    } else if(task.hasClass('status-3')) {
      status = 'Resolved';
      $row.css('color', '#0A992C');
    } else if(task.hasClass('status-5')) {
      status = 'Closed';
      $row.css('color', '#999').css('text-decoration', 'line-through');
    }
    $row.append('<td>' + status + '</td>');
  });


}
