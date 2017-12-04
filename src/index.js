var Handlebars = require('handlebars');

require('./sass/main.scss');
require('./javascript/templates.js');

// Sets the `innerHTML` content of the element with
// `elementId` to the rendered context of `templateObjName`.
function setTemplateToElement (elementId, templateObjName) {

	// Optional third parameter. String name of the header Background
	// image for the specified page.
	var context = Array.prototype.slice.call(arguments)[2];

	if (typeof context === 'undefined') {
		var ctx = {};
	} else {
		var ctx = {
			hasBackground: true,
			backgroundClass: context
		}
	}

	var dest = document.getElementById(elementId);
	dest.innerHTML = Handlebars.templates[templateObjName](ctx);
}

var Modal = function (id) {
	this.displayState = false;
	this.id = id;
}

Modal.prototype.toggleDisplay = function () {
	this.displayState = !this.displayState;

	var modal = document.getElementsByClassName('modal')[this.id - 1];
	modal.className = "modal display-" + this.displayState;

	console.log(this.displayState);
}

window.main = {

	// `context` is an optional string parameter of
	// the specific hero image name that will be rendered for
	// the page's header
	init: function (context) {
		if (typeof context === 'undefined')
			window.onload = function () {

				// DEFAULT hero page render options
				setTemplateToElement("top-header", "header");
				setTemplateToElement("bottom-footer", "footer");
			} 

		else {
			window.onload = function () {
				setTemplateToElement("top-header", "header", context);
				setTemplateToElement("bottom-footer", "footer");
				
				if (context == "tickets-hero") {
					var availableDates = document.getElementsByClassName('AVAIL');
					var modals = document.getElementsByClassName('modal-overlay');
					var closeBtns = document.getElementsByClassName('close-btn');

					var m_arr = [];

					for (var i = 0; i < availableDates.length; i++) {
						(function (i) {	
							m_arr.push(new Modal(i+1));

							var el = m_arr[i];

							availableDates[i].onclick = function () {
								el.displayState = true;

								var modal = document.getElementsByClassName('modal')[i];
								modal.className = "modal display-true";

								console.log(el.displayState);
							}

							modals[i].onclick = function () {
								el.toggleDisplay();
							}

							closeBtns[i].onclick = function () {
								el.toggleDisplay();
							}

						})(i);
					}
				}
			}
		}
	}
}

// Renders default header and footer
// on pages that don't have a specific background
// image passed to `init`.
main.init();

