var Handlebars = require('handlebars');

(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<section id='hero-top' class = \""
    + container.escapeExpression(((helper = (helper = helpers.backgroundClass || (depth0 != null ? depth0.backgroundClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"backgroundClass","hash":{},"data":data}) : helper)))
    + "\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "<section id = 'hero-top'>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<nav id = \"main-navigation\">\n	<ul>\n		<li>\n			<a href=\"analysis.html\">Analysis</a>\n		</li>\n		<li>\n			<a href=\"crew.html\">Cast/Crew</a>\n		</li>\n		<li>\n			<a href=\"related.html\">Related Works</a>\n		</li>\n	</ul>\n</nav>\n\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hasBackground : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "	<nav>\n		<h1>\n			<a href=\"index.html\">Antigone: A Theatre Experience</a>\n		</h1>\n		<a href=\"about.html\">About</a>\n		<a href=\"tickets.html\">Tickets</a>\n	</nav>\n</section>";
},"useData":true});
templates['footer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id = \"footer-a\">\n	<b>Location:</b> Hunter College Frederick Loewe Theatre\n					<br>\n				68th Street and Lexington Avenue\n				New York, NY 10065\n	<ul class = \"social-media\">\n		<li>\n			<a href = \"https://www.facebook.com/HunterCollegeTheatreDepartment/\">\n				<img alt = \"facebook link\" src = \"images/facebook-icon.png\">\n			</a>\n		</li>\n		<li>\n			<a href = \"https://twitter.com/hunter_college?lang=en\">\n				<img alt = \"twitter link\" src = \"images/twitter-icon.png\">\n			</a>\n		</li>\n		<li>\n			<a href = \"https://www.youtube.com/user/HunterCollege\">\n				<img alt = \"youtube link\" src = \"images/youtube-icon.png\">\n			</a>\n		</li>\n	</ul>\n</section>\n<section id = \"footer-b\">\n	<p>This theatrical production is NOT real. All photographs and images are property of their respective owners.</p>\n\n	<span>Javier Minchala |</span>\n	<span><a>Github</a></span>\n</section>\n";
},"useData":true});
})();