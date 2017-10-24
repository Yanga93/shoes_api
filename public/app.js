//compile handlebars
var outputTable = document.getElementById('outputTable');
var scriptTemplate = document.getElementById('dataTable');
var dataTable = document.getElementById('data-table');
var compileTable = Handlebars.compile(scriptTemplate.innerHTML);


$(function() {

  var $brand = $('#brand-new-stock');
  var $color = $('#color-new-stock');
  var $size = $('#size-new-stock');
  var $price = $('#price-new-stock');
  var $quantity = $('#quantity-new-stock');

  function displayStock() {
    $.ajax({
      type: 'GET',
      url: '/api/shoes',
      success: function(data) {
        compileTable({
          data
        })
        outputTable.innerHTML = compileTable({
          shoe: data
        })
      }
    });
  }
  displayStock();

  $('#send-item').on('click', function() {

    var shoe = {
      brand: $brand.val(),
      color: $color.val(),
      size: $size.val(),
      price: $price.val(),
      in_stock: $quantity.val()
    };

    $.ajax({
      type: 'POST',
      url: '/api/shoes',
      data: shoe,
      success: function(newShoe) {
        displayStock();
      }
    })

    document.getElementById('brand-new-stock').value = ""
    document.getElementById('color-new-stock').value = ""
    document.getElementById('size-new-stock').value = ""
    document.getElementById('price-new-stock').value = ""
    document.getElementById('quantity-new-stock').value = ""
  })

  $('#add-cart').on('click', function(idea) {
    var id = id.target.value;
    console.log(idea.value);
    $.ajax({
      type: "POST",
      url: "/api/shoes/sold/" + id,
      success: function(soldShoe) {
        // console.log(soldShoe);

          displayStock();
      }
    });
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
