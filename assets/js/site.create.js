(function ($) {
    "use strict";
    var loadingText = '<span id="button_loader"><i class="fa fa-circle-o-notch fa-spin"></i> loading...</span>';

    var searching = '<span style="font-family:poppins;" id="button_loader"> Searching ...</span>';
    var holding = '<span style="font-family:poppins; id="button_loader"> Please Hold ...</span>';
    var done = '<span style="font-family:poppins; id="button_loader">Almost Done ...</span>';
    const urlParams = new URLSearchParams(window.location.search);
    if((selected == 0 && location.hash != "#step-1")){
        const url =window.location.href.split('#')[0]
        window.location.replace(url+"#step-1");
    } else if (selected != 0) {
        const url =window.location.href.split('#')[0]
        window.location.replace(url+"#step-5");
        if (urlParams.get('filter') == 'true'){
            $(document).ready(function(){
                $('#tab-1').click();
            });
        }
    }

    $(document).ready(function(){
        $(`#demo-${selectedDemoId}`).click();
        $(`#backup-${backupDate}`).click();
    });

    $("body").on('click', ".select-demo", function (e) {
        e.preventDefault();
        var demo_id = $(this).data('id');
        $("input[name='demo_id']").val(demo_id);
        $('#smartwizard').smartWizard("next");
    });

    $("body").on('click', ".select-backup", function (e) {
        e.preventDefault();
        var backupDate = $(this).data('id');
        $("input[name='backupDate']").val(backupDate);
        $('#smartwizard').smartWizard("next");
    });

    $('#siteForm').on('keyup keypress', function (event) {
        var code;

        if (event.key !== undefined) {
            code = event.key;
        } else if (event.keyIdentifier !== undefined) {
            code = event.keyIdentifier;
        } else if (event.keyCode !== undefined) {
            code = event.keyCode;
        }
        if (code === 13 || code == 'Enter') {
            event.preventDefault();
            return false;
        }
    });

    $("#domain-name").on('keyup', function (event) {
        var code;
        event.preventDefault();

        if (event.key !== undefined) {
            code = event.key;
        } else if (event.keyIdentifier !== undefined) {
            code = event.keyIdentifier;
        } else if (event.keyCode !== undefined) {
            code = event.keyCode;
        }
        if (code === 13 || code == 'Enter') {
            $(".do-domain-search").click();
        }
        return false;
    });

    $("body").on('click', '.do-domain-search', function (e) {
        e.preventDefault();
        var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
        var query = $('#domain-name').val();
        var $button = $(this);
        var buttonOldtext = $button.html();
        var loopCount = 0;
        $button.html(searching);

        var buttonstatus = setInterval(function () {
            loopCount++;
            // if (loopCount > 1) {
            //      $button.html(searching);
            // }
            if (loopCount > 4) {
                $button.html(holding);
            }
            if (loopCount > 9) {
                $button.html(done);
            }
        }, 1000);


        // $button.html(loadingText);
        $button.attr('disabled', 'disabled');

        function simpleTemplating(data) {

            var html = '<ul class="list-group">';
            $.each(data, function(index, item){
                var screenwidth = $(window).width();
                const liClasses =  screen.width <= 768 ? 'flex-sm-row flex-column' : 'justify-content-between';
                const buttonstyle =  screen.width <= 768 ? 'margin:0px 0px 10px 0px' : '';
                const buttonClasses =  screen.width <= 768 ? 'd-flex justify-content-between px-1 w-100 align-items-baseline' : 'd-flex w-40';

                const priceClasses =  screen.width <= 768 ? 'name p-2 w-100' : 'name px-2';
                const price = item.availability == 1 ? `<div style="width: 25%;"><span class="price" style="padding-top: 10px">$${item.price}/year</span></div>` :`<div style="width: 25%;"><span style="padding-top: 10px;">Unavailable</span></div>`;
                const image = item.availability == 1 ? '/images/icon/checked.svg' :'/images/icon/unavailable.svg';
                const butten = item.availability == 1 ?
                    `<div style="width: 30%;"><button type="button" class="custom-btn btn-6 btn-6-bn purchase-domain select-domain" style="${buttonstyle}">Purchase domain</button></div><div style="width: 45%;"><button type="button" class="custom-btn btn-6 btn-6-bn purchase-domain select-domain-purchase" style="background: linear-gradient(to right, #047ac8, #091E71) !important;">Transfer domain</button></div>`
                    :
                    `<div style="width: 30%;"><button type="button" class="custom-btn btn-5 i-own-domain select-domain" style="${buttonstyle}">I own the domain</button></div><div style="width: 45%;"><button type="button" class="custom-btn btn-6 btn-6-bn purchase-domain select-domain-purchase" style="background: linear-gradient(to right, #047ac8, #091E71) !important;">Transfer domain</button></div>`;

                html += `<li class="list-group-item d-flex ${liClasses} align-items-center p-md-5 p-sm-1 p-1">
                            <div class="${priceClasses}" style="text-align:center;">
                                <img src="${base_url + image} " class="domain-icon mr-md-3 mr-sm-1 mr-1"></img>
                                ${item.name}
                            </div>
                            <div class="${buttonClasses}">
                                ${price}
                                ${butten}
                            </div>
                        </li>`;
            });
            html += '</ul>';
            return html;
        }

        $.ajax({
            /* the route pointing to the post function */
            url: base_url + '/sites/domain',
            type: 'POST',
            /* send the csrf-token and the input to the controller */
            data: { _token: CSRF_TOKEN, query },
            dataType: 'JSON',
            /* remind that 'data' is the response of the AjaxController */
            success: function (response) {
                $('#pagination-container').pagination({
                    dataSource: response,
                    callback: function(data, pagination) {
                        var html = simpleTemplating(data);
                        $('#data-container').html(html).removeClass('d-none');
                    }
                });

                $("#tab-steps").css("height", "auto");
                clearInterval(buttonstatus);
                $button.html(buttonOldtext);
                $button.removeAttr('disabled');
                setTimeout(() => {
                    StickyFooter();
                }, 1000);


            },
            error: (response) => {
                $('#domainNameError').text(response.responseJSON.errors.query);
                $("#tab-steps").css("height", "auto");
                clearInterval(buttonstatus);
                $button.html(buttonOldtext);
                $button.removeAttr('disabled');

                setTimeout(() => {
                    StickyFooter();
                }, 1000);
            }
        });

    });

    /* PAGINATION FUNCTIONS */

    function displayRowsByCount(currentPage) {
        var totalPagenum = $('.domains').find(".item-pagination .page-count b").length;

        if(currentPage ==1){
            $('.domains').find('.prev').addClass('pagi-disabled')
        }else{
            $('.domains').find('.prev').removeClass('pagi-disabled')
        }
        if(totalPagenum == (currentPage+2)){
            $('.domains').find('.next').addClass('pagi-disabled')
        }else{
            $('.domains').find('.next').removeClass('pagi-disabled')
        }

        $('.domains').find(".domain-box").hide();
        var pageSize = $('.domains ').attr("data-count");
        for (var k = (currentPage * pageSize) - (pageSize - 1); k <= (currentPage * pageSize); k++) {

            $('.domains').find(".domain-box:nth-child(" + k + ")").show();

        }

        showPaginationstep(currentPage);
        $('#cloneable_domain').hide();
        var customPaggiOffset = $('.domains').offset().top;
        $('html, body').animate({ scrollTop: '' + (customPaggiOffset - 200) + 'px' }, 800);
    }


    function showPaginationstep(currentPage){
        var totalPagenum = $('.domains').find(".item-pagination .page-count b").length;

        var total_show = 7;
        var privPage = 2;
        var totalPage = totalPagenum - 2;
        var currentPage = currentPage;
        var firstPosition = (currentPage - privPage) - privPage;
        var lastPosition = currentPage + total_show;
        // if first postion is less than 1
        if (firstPosition < 1 || firstPosition == 0) {
            firstPosition = 1;
        }
        // if last position is greater than total page
        if (lastPosition > totalPage) {
            lastPosition = totalPage;
        }

        // calculation of total diff in pagination
        var diff = lastPosition - firstPosition;


        if(diff != total_show){
            var diffFromLast = total_show - diff;
            firstPosition = firstPosition - diffFromLast;

            if(firstPosition == currentPage){
                firstPosition = currentPage - privPage;
                lastPosition = lastPosition - privPage;
            }
            if (firstPosition < 1 || firstPosition == 0) {
                firstPosition = 1;
            }
        }

        if(currentPage == 2){
            lastPosition = lastPosition + 1 ;
        }

        // hide all item
        $('.domains').find(".item-pagination .page-count .pagination-item").hide();

        // show prev and next item
        $('.domains').find(".item-pagination .prev").show();
        $('.domains').find(".item-pagination .next").show();


        for (var i = firstPosition + 1; i <= lastPosition + 1; i++) {
            //  show only paginate item
            var i = i;
            $('.domains').find(".item-pagination .page-count .pagination-item:nth-child(" + i + ")").show();
            $('.domains').find(".item-pagination .page-count .selected").show();
        }


    }

    /* PAGINATION FUNCTIONS END */





    $("input[name=title], input[name=password]").on('keyup', function (event) {

        $(this).removeClass('is-invalid');
        $(this).parent().find('.invalid-feedback').addClass('hidden');
        $(this).parent().find('.password-formet').removeClass('hidden');

    });
    $('body').on('click', '.select-domain', function (e) {
        var $parent = $(this).parent().parent().parent();
        var name = $parent.find(".name").text();
        var price = $parent.find(".price").text();

        $("input[name=domain]").val(name);
        $("input[name=domain_price]").val(price);

        if ($(this).hasClass('purchase-domain')) {
            $("input[name=domain_type]").val("purchase_request");
        } else if($(this).hasClass('i-own-domain')){
            $("input[name=domain_type]").val("already_owned");
        }
        $('#smartwizard').smartWizard("next");
    });

    $('body').on('click', '.select-domain-purchase', function (e) {
       console.log("purchased domain");
    });

    if ($("#coupon_code").val()) {
        $(window).on("load", function () {
            coupon_code();
        });
    }

    $('#coupon_code').on('input', debounce(function () {
        coupon_code()
    }, 500));

    function coupon_code() {
        var couponCode = $("#coupon_code").val();
        var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
        var planId = $("input[name=plan]").val();
        $.ajax({
            /* the route pointing to the post function */
            url: base_url + '/sites/coupon?type=site',
            type: 'POST',
            /* send the csrf-token and the input to the controller */
            data: { _token: CSRF_TOKEN, coupon_code: couponCode, plan_id: planId },
            dataType: 'JSON',
            /* remind that 'data' is the response of the AjaxController */
            success: (response) => {
                if (response.length != 0) {
                    $("input[name=plan_price]").val(response.price);
                    var couponDiscount = response.discount;
                    $(".coupon-discount").text("$"+couponDiscount.toFixed(2));
                    $(".coupon-discount").text("$"+couponDiscount.toFixed(2));
                    var finalPrice = parseFloat($('.final-price').text()) - response.discount;
                    $('.final-price').text(finalPrice);
                }
                if (response.coupon_status == false) {
                    if (couponCode != ''){
                        $("#coupon_errors").fadeIn("slow");
                        $("#coupon_errors").html(response.msg);
                        $("#coupon_errors").delay(1000).fadeOut();
                    }
                } else {
                    $("#coupon_success").fadeIn("slow");
                    $("#coupon_success").html(response.msg);
                    $("#coupon_success").delay(1000).fadeOut();
                }
            },
            error: (XMLHttpRequest, textStatus, errorThrown) => {
                $("#tab-steps").css("height", "auto");
                let errors = XMLHttpRequest.responseText.errors;
                if (!XMLHttpRequest.responseText.errors) {
                    errors = JSON.parse(XMLHttpRequest.responseText);
                }
                displayErrors(errors);
            }
        });
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $(".PlanButton").on('click', function (e) {
        var planId = $(this).data('id');
        $("input[name=plan]").val(planId);
        var planPrice = $('#planPrice-'+ planId).text();
        var planPrice = planPrice ? planPrice : 0.00;
        $("input[name=plan_price]").val(planPrice);
        $("input[name=plan_duration]").val($('#planDuration-'+ planId).text());
        $('#smartwizard').smartWizard("next");
    });

    $(".servicePlanButton").on('click', function (e) {
        var buttonElement = $(this);
        professionalServiceCategories.forEach(function(category) {
            var buttonText = buttonElement.text();
            var servicePlanId = buttonElement.data('id');
            var category_id = buttonElement.val();
            if (category.id == category_id) {
                if (buttonText == "Selected"){
                    buttonElement.removeClass('serviceSelected');
                    buttonElement.text("Select");
                    $("input[name='service_plan_for_cat_" + category.id + "']").val('');
                    $("input[name='service_plan_price_for_cat_" + category.id + "']").val(0.00);
                    $("input[name='service_plan_duration_for_cat_" + category.id + "']").val('');
                } else {
                    $("button[value=" + buttonElement.val() + "]").text("Select");
                    $("button[value=" + buttonElement.val() + "]").removeClass('serviceSelected');
                    buttonElement.addClass('serviceSelected');
                    buttonElement.text("Selected");
                    $("input[name='service_plan_for_cat_" + category.id + "']").val(servicePlanId);
                    $("input[name='service_plan_price_for_cat_" + category.id + "']").val($('#servicePlanPrice-'+servicePlanId).text());
                    $("input[name='service_plan_duration_for_cat_" + category.id + "']").val($('#servicePlanDuration-'+servicePlanId).text());
                }
            }
        });
        //$('#smartwizard').smartWizard("next");
    });

    $("#smartwizard").on("showStep", function (e, anchorObject, stepIndex, stepDirection) {
        $("#inlineFormInputKeyword").val('');
        if(location.hash == "#step-1"){
            $(".sw-btn-prev").hide();
            $(".sw-btn-next").hide();
            $(".btn-finish").hide();
        } else if(location.hash == "#step-2"){
            $(".sw-btn-prev").show();
            $(".sw-btn-next").show();
            $('.sw-btn-next').text('Next');
            $(".btn-finish").hide();
        }if(location.hash == "#step-3"){
            $(".sw-btn-prev").show();
            $('.sw-btn-next').text('Skip');
            $(".sw-btn-next").show();
            $(".btn-finish").hide();
            $("input[name=domain_type]").val("skip_domain");
        }if(location.hash == "#step-4"){
            $(".sw-btn-prev").show();
            $(".sw-btn-next").hide();
            $(".btn-finish").hide();
        }if(location.hash == "#step-5"){
            $(".sw-btn-prev").show();
            $('.sw-btn-next').text('Next');
            $(".sw-btn-next").show();
            $(".btn-finish").hide();
        }if(location.hash == "#step-6"){
            $(".sw-btn-prev").show();
            $(".sw-btn-next").hide();
            $(".btn-finish").show();
            var domainPrice = 0.00;
            if($("input[name=domain_type]").val() == 'skip_domain') {
                $("#domain").hide();
                $("input[name=domain]").val('');
            } else if ($("input[name=domain_type]").val() == 'already_owned'){
                $("#domain").show();
                $(".domain-name").text($("input[name=domain]").val());
                $(".domain-price").text('I own this domain');
            } else {
                $("#domain").show();
                $(".domain-name").text($("input[name=domain]").val());
                var price = $("input[name=domain_price]").val().replace('/year', '');
                $(".domain-price").text(price);
                var price = price.replace('$', '');
                domainPrice =  parseFloat(price);
            }

            let planPrice =  parseFloat($("input[name=plan_price]").val());
            $('.plan-price').text(planPrice);
            if (planPrice < 1) {
                $('.plan-price').text('Trial');
            }
            $('.plan-duration').text( $("input[name=plan_duration]").val());

            var professionalServiceTotalPrice = professionalServiceCategories.reduce((accumulator, category) => {

                var currentValue = $("input[name='service_plan_price_for_cat_" + category.id + "']").val();
                var currentDuration = $("input[name='service_plan_duration_for_cat_" + category.id + "']").val();

                if(currentValue < 1){
                    $('.service-plan-price-for-'+ category.id).text('');
                    $('.service-plan-duration-for-'+ category.id).text('');
                    $('#servicePlanForCat_'+ category.id).hide();
                } else {
                    $('#servicePlanForCat_'+ category.id).show();
                    $('.service-plan-price-for-'+ category.id).text(currentValue);
                    $('.service-plan-duration-for-'+ category.id).text(currentDuration);
                }

                return accumulator += parseFloat(currentValue);


            }, 0);
            $('.final-price').text(domainPrice + planPrice + professionalServiceTotalPrice);
            if(professionalServiceTotalPrice>1) {
                $("#paypalLabel").hide();
                $(".payment_method_text").hide();
                selectPayment('stripe');
            } else {
                $("#servicePlan").hide();
                $("#paypalLabel").show();
                $(".payment_method_text").show();
                selectPayment('paypal');
            }
            if ($("#coupon_code").val()) {
                coupon_code();
            }
        }

        if (stepIndex == null) {
            $("html, body").animate({ scrollTop: 0 }, 600);
            document.body.scrollTop            = 0; // For Safari
            document.documentElement.scrollTop = 0;
        }
    });


    $("#smartwizard").on("leaveStep", function (e, anchorObject, currentStepIndex, nextStepIndex, stepDirection) {
        $(".errors").addClass("hidden");
        if (nextStepIndex == 0) {
            $("#smartwizard .toolbar").hide();
        } else {
            $("#smartwizard .toolbar").show();
        }

        if (nextStepIndex == 2) {

            $("html, body").animate({ scrollTop: 0 }, 600);
            document.body.scrollTop            = 0; // For Safari
            document.documentElement.scrollTop = 0;


            var title = $("input[name=title]").val();
            var password = $("input[name=password]").val();
            if (!title) {
                $("input[name=title]").focus();
                $("input[name=title]").addClass('is-invalid');
                $("input[name=title]").parent().find('.invalid-feedback').removeClass('hidden');
                return false;
            }

            if (!password) {
                $("input[name=password]").focus();
                $("input[name=password]").addClass('is-invalid');
                $("input[name=password]").parent().find('.password-formet').addClass('hidden');
                $("input[name=password]").parent().find('.invalid-feedback').removeClass('hidden');
                return false;
            } else {
                // Return a promise object
                return new Promise((resolve, reject) => {

                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });

                    // Ajax call to fetch your content
                    $.ajax({
                        method: "POST",
                        url: base_url + '/password/validation',
                        data: { password: password },

                    }).done(function (res) {
                        var html = 'Ajax data about ' + repo + ' loaded from GitHub';
                        html += 'URL:' + ajaxURL;
                        html += 'Name:' + res.collected.metadata.name;

                        // Resolve the Promise with the content
                        resolve(html);
                        $('#smartwizard').smartWizard("next");

                    }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
                        reject("An error loading the resource");

                        $("#tab-steps").css("height", "auto");
                        let errors = XMLHttpRequest.responseText.errors;
                        if (!XMLHttpRequest.responseText.errors) {
                            errors = JSON.parse(XMLHttpRequest.responseText);
                        }

                        $("input[name=password]").focus();
                        $("input[name=password]").addClass('is-invalid');
                        $("input[name=password]").parent().find('.password-formet').addClass('hidden');
                        $("input[name=password]").parent().find('.invalid-feedback').removeClass('hidden');
                        $("input[name=password]").parent().find('.invalid-feedback').text(errors.errors.password[0]);

                        // Hide the loader
                        // $('#smartwizard').smartWizard("next");
                        $('#smartwizard').smartWizard("prev");
                    });

                });
            }
            return false;
        }

        if (nextStepIndex == 5) {

        } else {

        }
        $("html, body").animate({ scrollTop: 0 }, 600);
        document.body.scrollTop            = 0; // For Safari
        document.documentElement.scrollTop = 0;

       console.log('item',nextStepIndex);

        setTimeout(() => {
            StickyFooter();
        }, 1000);
    });

    function displaySiteErrors(res, $button) {
        $('#loader').addClass('hidden');
        $(".errors").removeClass("hidden");
        $button.removeAttr('disabled');
        $button.removeClass('disabled');
        $button.html("Finish");
        if (res.errors.aws_account_id) {
            var err =  res.errors.aws_account_id;
        } else if (res.errors.site_create_limit) {
            var err =  res.errors.site_create_limit;
        } else if (res.errors.demo_id) {
            var err = "The demo field is required";
        } else if (res.errors.title) {
            var err =  res.errors.title;
        } else if (res.errors.password) {
            var err =  res.errors.password;
        } else if (res.errors.domain) {
            var err =  res.errors.domain;
        } else if (res.errors.domain_type) {
            var err =  res.errors.domain_type;
        } else if (res.errors.plan) {
            var err =  res.errors.plan;
        }
        $("#errors").append(`<div class="alert validation-error alert-dismissible fade show mx-5" role="alert">
                  ` + err + `
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  </div>`);
    }



    function displayErrors(res, $button) {


        // console.log(res.errors.domain);

        $.each(res.errors, function (i, error) {

            let errorLine = error.constructor === Array ? error[0] : error;


            $(".errors").append("<li>" + errorLine + "</li>");

        });

        $('#loader').addClass('hidden');
        $(".errors").removeClass("hidden");
        $button.removeAttr('disabled');
        $button.removeClass('disabled');
        $button.html("Finish");


    }

    $('.fname').hide();
    $('.lname').hide();

    $("#siteForm").on('submit', function (e) {
        e.preventDefault();
        var $form = $(this);
        console.log($form)
        var $button = $(".btn-finished");
        $button.attr('disabled', 'disabled');
        $button.addClass('disabled');
        $button.html(loadingText);
        $("#errors").empty();
        $.ajax({
            /* the route pointing to the post function */
            url: base_url + '/sites',
            type: 'POST',
            /* send the csrf-token and the input to the controller */
            data: $form.serialize(),
            dataType: 'JSON',
            beforeSend: function () { // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
                $('#loader').removeClass('hidden')
            },
            /* remind that 'data' is the response of the AjaxController */
            success: (response) => {
                // console.log(response);

                $("#tab-steps").css("height", "auto");
                $(".create-success").removeAttr('hidden');
                if (response.payment_platform == 'PayPal') {
                    window.location.href = response.paypal_url;
                } else if (response.payment_platform == 'Stripe' || response.payment_platform == null ) {
                    top.location.href = base_url + "/thank-you";
                } else {
                    $("#AmazonPayButton").click();
                    $('#loader').addClass('hidden');

                }
            },
            error: (XMLHttpRequest, textStatus, errorThrown) => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                $("#tab-steps").css("height", "auto");
                let errors = XMLHttpRequest.responseText.errors;
                if (!XMLHttpRequest.responseText.errors) {
                    errors = JSON.parse(XMLHttpRequest.responseText);
                }
                $('#loader').addClass('hidden');
                $button.removeAttr('disabled');
                $button.removeClass('disabled');
                $button.html("Finish");

                displaySiteErrors(errors, $button);
            }
        });

    });


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


    function StickyFooter() {
        let difference = $(document).height() - $(window).height();
        if (difference == 0) {
            $(".footer").addClass('sticky-footer')
        } else {
            $(".footer").removeClass('sticky-footer')
        }
    }

    $(window).on('load', function () {
        let footerInterval = setInterval(() => {
            if (!$("#global-loader").is(':visible')) {
                StickyFooter();
                clearInterval(footerInterval);
            }
        }, 3000);
    });




})(jQuery);
