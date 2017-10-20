//compile handlebars
var outputTable = document.getElementById('outputTable');
var scriptTemplate = document.getElementById('dataTable');
var dataTable = document.getElementById('data-table');
var compileTable = Handlebars.compile(scriptTemplate.innerHTML);


$(function() {
  $.ajax({
    type: 'GET',
    url: '/api/shoes',
    success: function(data) {
      console.log(data);
      compileTable({data})
      outputTable.innerHTML = compileTable({shoe:data
        //console.log(compileTable);
      })
      console.log(compileTable({shoe:data}));
    }
  });
});


// This functions alllows us to search throw stock by given brand, size, quantity and color
$(document).ready(function() {
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").each(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
