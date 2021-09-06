$(document).ready(function () {
    var quantitiy = 0;
    $('.quantity-right-plus').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        $('#quantity').val(quantity + 1);


        // Increment

    });

    $('.quantity-left-minus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });

});

function del_cart(name) {
    return confirm('Bạn muốn xoá  : ' + name + ' ?');
}

function update_qty(rowId, qty) {
    $.get('home/reservation/update-cart-dish/' + rowId + '/' + qty,
        function () {
            window.location.reload();
        }
    );
}

$("#addRow").click(function () {
    var html1 = $('#table').html();
    var html = '';
    html += `<div id="inputFormRow">
                     <div class="input-group mb-3">
                        <select name="tables[][id]" class="form-control">
                            ${html1}
                        </select>
                        <div class="input-group-append">
                        <button id="removeRow" type="button"
                                class="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </div>`;
    $('#newRow').append(html);
});

// remove row
$(document).on('click', '#removeRow', function () {
    $(this).closest('#inputFormRow').remove();
});

var x = 0;
$("#addRow1").click(function () {
    var html1 = $('#dishes').html();
    var html = '';
    x++;
    html += `<div id="inputFormRow1">
                    <div class="input-group mb-3">
                        <select name="dishes[${x}][id]" class="form-control">
                            ${html1}
                        </select>
                        <input type="number" name="dishes[${x}][qty]" class="form-control">
                        <input type="hidden" name="dishes[${x}][price]" class="form-control" value="{{ $dish->price }}">
                        <div class="input-group-append">
                            <button id="removeRow1" type="button"
                                class="btn btn-danger">Remove</button>
                        </div>
                    </div>
                 </div>`;
    $('#newRow1').append(html);
});

// remove row
$(document).on('click', '#removeRow1', function () {
    $(this).closest('#inputFormRow1').remove();
});
