'use strict';

beforeEach(function () {
	window.NREUM = {
		addPageAction : function () {},
		noticeError : function () {},
		addToTrace : function () {},
		finished : function () {},
		setCustomAttribute : function () {}
	};

	for(var key in window.NREUM) {
		if (window.NREUM.hasOwnProperty(key) && typeof window.NREUM[key] === 'function') {
			spyOn(window.NREUM, key).and.callThrough();
		}
	}
});