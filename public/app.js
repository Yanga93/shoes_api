$(function() {
  var $orders = $('#shoes-output');
  $.ajax({
    url: 'http://localhost:4000/api/shoes',
    type: 'get',
  }).done(function(data) {
    console.log(data);
    $.each($orders, function (i, order) {
      $orders.append('<li>my shoe order</li>');
    });
  })
});
