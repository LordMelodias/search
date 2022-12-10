$(document).ready(function () {

$("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#post_result .post").filter(function() {

        $(this).toggle($(this).text()
        .toLowerCase().indexOf(value) > -1)

    });
});

});