// RWD漢堡選單
$(function(){
    $('.btn-menu').on('click', function(){
        $(this).toggleClass('active');
    })
})

// // 工作流程dot hover、進度條
$(function() {
    // 記錄已經點擊過的點的索引
    var clickedIndices = [];

    $('.st-1, .st-2, .st-3, .st-4, .st-5, .st-6').hover(
        function() {
            var index = $(this).data('index');
            if (!clickedIndices.includes(index)) {
                $(this).addClass('big');
            }
        },
        function() {
            var index = $(this).data('index');
            if (!clickedIndices.includes(index)) {
                $(this).removeClass('big');
            }
        }
    );

    $('.st-1, .st-2, .st-3, .st-4, .st-5, .st-6').on('click', function() {
        var width = $(this).data('width');
        var index = $(this).data('index');

        if (!clickedIndices.includes(index)) {
            clickedIndices.push(index);
        }

        $('.line').css('width', width);

        if (window.innerWidth <= 992) {
            $('.work').each(function(i) {
                if (i === index - 1) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        } else {
            $('.work').each(function(i) {
                if (i < index) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        }

        $('.w-title').each(function(i) {
            if (i < index) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });

        $('.step-dot div').each(function() {
            if ($(this).data('index') <= index) {
                $(this).addClass('big');
            } else {
                $(this).removeClass('big');
            }
        });
    });

});

$(document).ready(function() {
    $('#myinput').on("keyup", function() {
        // 抓搜尋關鍵字
        var value = $(this).val().toLowerCase();

        // 抓下方符合的block
        $('.pro-card').filter(function() {
            $(this).toggle($(this).find('.program-info-title').text().toLowerCase().indexOf(value) > -1)
        });
    });
});




