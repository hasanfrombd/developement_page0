(function ($) {
    "use strict";
    var loadingText    = '<i class="fa fa-circle-o-notch fa-spin"></i> loading...';
    var buttonText     = "";
    var selectedDomain = "";

    $("#inlineFormInputKeyword").keyup(function(event) {
        if (event.keyCode === 13) {
            $('.search-btn').click();
        }
    });

    //paginate button click
    $("body").on('click', '.theme-pagination .page-link', function (e) {
        var stringValue = $(this).data('page');
        if (typeof stringValue == "string") {
            stringValue = stringValue.match(/\d+/);
        }
        getThemes(route,'pagination', stringValue);
    });

    $('.search-btn').on('click', function (e) {
        getThemes(route,'search', 1);
    });

    $(".styles, .featured, .categories").on('click', function (e) {

        getThemes(route,$(this).text(), 1);
    });

    $(".form-check-input").not(".filter_less").on('click', function (e) {
        var ischecked= $(this).is(':checked');
        var value = '';
        if(!ischecked){
            value = $(this).val();
        }
        getThemes(route, value, 1);
    });

    function getThemes(route='/sites/create', value,  page = 1) {
        var keyword    = `&keyword=${$("input[name=keyword]").val()}`;
        var featured    = value == 'Featured' ? '' : $("input[name=featured]:checked").val() ? `&featured=${ $("input[name=featured]:checked").val()}` : '';
        let categories = [];
        let styles = [];

        $.each($("input[name='categories']:checked"), function () {
            categories.push($(this).val());
        });
        categories = [...new Set(categories)].filter(function(item) {
            return item !== value
        })

        $.each($("input[name='styles']:checked"), function () {
            styles.push($(this).val());
        });
        styles = [...new Set(styles)].filter(function(item) {
            return item !== value
        })

        styles            = styles.length > 0 ? `&styles=${encodeURIComponent(JSON.stringify(styles))}` : '';
        categories            = categories.length > 0 ? `&categories=${encodeURIComponent(JSON.stringify(categories))}` : '';
        let params           = `page=${page}&filter=true${keyword}${styles}${categories}${featured}`
        window.location.href = `${route}?${params}`;

    }

    // ------------end themes filtering-------------
})(jQuery);
