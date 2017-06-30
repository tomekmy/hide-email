(function ($) {
    $.fn.hideEmail = function (user, site, tag) {
        user = user || 'user';
        site = site || 'site.com';
        tag = tag || user + '&#064;' + site;
        this.each(function () {
            var string = '<a href="&#109;&#097;&#105;&#108;&#116;&#111;:' + user + '&#064;' + site + '">' + tag + '</a>';
            $(this).append(string);
        });
    };
})(jQuery);
