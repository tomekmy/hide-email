(function($) {
	$.fn.hideEmail = function(user, site, tag) {
		this.each(function() {
		    if(tag) {
					var string = '<a href="&#109;&#097;&#105;&#108;&#116;&#111;:'+user+'&#064;'+site+'">'+tag+'</a>';
		    } else {
					var string = '<a href="&#109;&#097;&#105;&#108;&#116;&#111;:'+user+'&#064;'+site+'">'+user+'&#064;'+site+'</a>';
		    }
		    $(this).append(string);
		});
	};
})(jQuery);
