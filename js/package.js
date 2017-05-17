

/*
(function (window) {
    $.fn.openModal = function (options) {
        var opts = $.extend({},defaults,options);
        var tmp = '<div class="panel panel-primary">\
                      <div class="panel-heading">'+opts.header+'</div>\
                      <div class="panel-body">'+opts.content+'</div>\
                      <div class="panel-footer">'+opts.footer+'</div>\
                    </div>';

        $('body').append(tmp);

    };
    var defaults = {
        header:'信息内容',
        content:'主体内容',
        footer:'底部内容'
    }
})(window);
*/

(function (window) {
    window.package = {};
    package.version = 1.1;
    package.openModal = function (options) {
        var opts = $.extend({},defaults,options);
        var tmp = '<div class="panel panel-primary">\
                      <div class="panel-heading">'+opts.header+'</div>\
                      <div class="panel-body">'+opts.content+'</div>\
                      <div class="panel-footer">'+opts.footer+'</div>\
                    </div>';
        $('body').append(tmp);
    };

    var defaults = {
        header:'header',
        content:'content',
        footer:'footer'
    }
})(window);













