

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
      modalReceipt(data);
  });
    
    
    


})

function packery() {
    var pckry;

    var $container = $('.packery-container');
    $container.packery({
        columnWidth: 330,
        rowHeight: 100,
        gutter: 2
    });
    // get item elements, jQuery-ify them
    var $itemElems = $( $container.packery('getItemElements') );

    // make item elements draggable
    $itemElems.draggable();

    // bind Draggable events to Packery
    $container.packery( 'bindUIDraggableEvents', $itemElems );

    pckry = $container.data('packery');
}

function modalReceipt(data) {
    $('.receiptModalButton').on('click',function() {
        // $('#receiptModal .modal-title').html('');
        // $('#receiptModal .modal-title').
        var id = $(this).attr('row');

        var object = _.findWhere(data, {'receipt_id': id|0});
        $('receiptModal .modal-title').html('');
        console.log(object.Merchant);
        $('receiptModal .modal-title').html(object.Merchant);
        $('#receiptModal').modal('show');
    })
}