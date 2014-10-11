

$(document).ready(function () {

  jQuery.getJSON( "receipt_data/dashboard_receipt_data.json", function( data ) {
      $('#receiptContainer').append('<div id="items" class="packery-container" style="clear: both" row=""></div>');

      $.each( data, function( index, element ) {
        // console.log(element);
        var template = $("#receiptTemplate").html()
        // console.log(template)
        var compiled = _.template(template)
        $('#items').append(compiled(element));
      });
     
      packery();
  });
    
    
    


})

function packery() {
    var pckry;

    var $container = $('.packery-container');
    $container.packery({
        columnWidth: 300,
        rowHeight: 150,
        gutter: 5
    });
    // get item elements, jQuery-ify them
    var $itemElems = $( $container.packery('getItemElements') );

    // make item elements draggable
    $itemElems.draggable();

    // bind Draggable events to Packery
    $container.packery( 'bindUIDraggableEvents', $itemElems );

    pckry = $container.data('packery');
}

// function modalReceipt() {
//     $('#item').each(function() {

//     });
// }