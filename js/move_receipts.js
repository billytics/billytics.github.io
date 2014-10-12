

$(document).ready(function () {

  jQuery.getJSON( "receipt_data/dashboard_receipt_data.json", function( data ) {
      $('#receiptContainer').append('<div id="items" class="isotope" style="clear: both" row=""></div>');

      $.each( data, function( index, element ) {
        // console.log(element);
        var template = $("#receiptTemplate").html()
        // console.log(template)
        var compiled = _.template(template)
        $('#items').append(compiled(element));
      });
     
      // packery();
      isotope();
      modalReceipt(data);
  });

})

function isotope() {

    var $container = $('.isotope');
    $container.isotope({
        layoutMode:'fitRows',
        itemSelector: 'item',
        sortBy: 'original-order',
        // columnWidth: 330,
        // rowHeight: 100,
        // gutter: 2
        getSortData: {
          merchant: '.merchant',
          cardType: '.cardType',
          total: '.total parseInt',
          trial: '.trial',
          // date: function( itemElem ) {
          //   // var weight = $( itemElem ).find('.weight').text();
          //   // return parseFloat( weight.replace( /[\(\)]/g, '') );
          // }
        }
    });

     // bind sort button click
      $('#sorts').on( 'click', 'button', function() {
        var sortByValue = $(this).attr('data-sort-by');
        $container.isotope({ sortBy: sortByValue });
      });

      // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
}

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