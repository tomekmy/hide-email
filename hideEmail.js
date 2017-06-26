(function($) {
	$.fn.hideEmail = function(user, site) {
		this.each(function() {
			var string = '<a href="&#109;&#097;&#105;&#108;&#116;&#111;:'+user+'&#064;'+site+'">'+user+'&#064;'+site+'</a>';
			$(this).append(string);
		});
	};
})(jQuery);
