(function($) {
    $.fn.scrollToTop = function(options) {
        var config = {
            "speed" : 400
        };

        if (options) {
            $.extend(config, {
                "speed" : options
            });
        }

        return this.each(function() {

            var $this = $(this);

            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $this.fadeIn();
                } else {
                    $this.fadeOut();
                }
            });

            $this.click(function(e) {
                e.preventDefault();
                $("body, html").animate({
                    //返回顶部后的上边距像素值，0 代表直接到顶
                    scrollTop : 0
                }, config.speed);
            });

        });
    };
})(jQuery);
