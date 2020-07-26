$(document).ready(function () {
    $(window).scroll(() => {
        let pos = $(this).scrollTop();
        console.log(pos)
        if (pos >= 121.5999984741211) {
            $("#navbar").addClass("fixed-top");
        } else {
            $("#navbar").removeClass("fixed-top");
        }
    });


    // init Isotope
    let $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

})