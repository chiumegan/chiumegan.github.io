$(function(){
    $('.btn-menu').on('click', function(){
        $(this).toggleClass('active');
    })
})

$(function(){
    $('.st-1, .st-2, .st-3, .st-4, .st-5, .st-6').hover(
        function(){
            $(this).toggleClass('big');
    })
})

$(function(){
    $('.st-1').hover(
        function() {
            $('.work-1').addClass('active');
        },
        function() {
            $('.work-1').removeClass('active');
        }
    );

    $('.st-2').hover(
        function() {
            $('.work-2').addClass('active');
        },
        function() {
            $('.work-2').removeClass('active');
        }
    );

    $('.st-3').hover(
        function() {
            $('.work-3').addClass('active');
        },
        function() {
            $('.work-3').removeClass('active');
        }
    );

    $('.st-4').hover(
        function() {
            $('.work-4').addClass('active');
        },
        function() {
            $('.work-4').removeClass('active');
        }
    );

    $('.st-5').hover(
        function() {
            $('.work-5').addClass('active');
        },
        function() {
            $('.work-5').removeClass('active');
        }
    );

    $('.st-6').hover(
        function() {
            $('.work-6').addClass('active');
        },
        function() {
            $('.work-6').removeClass('active');
        }
    );
});
