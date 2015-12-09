'use strict';

angular
	.module('NREUMApp', [])
	.provider('NREUMWrapper', function () {
		this.NREUM = window.NREUM;
		this.$get = function () {
			return this;
		}
	})
	.config(function (NREUMWrapperProvider) {
		// report staticsUrl to http://statics.com/projects/version/
		NREUMWrapperProvider.NREUM.setCustomAttribute('staticsUrl', 'http://statics.com/projects/version/');
	})
	.service('NREUMService', function (NREUMWrapper) {
		this.addPageAction = function (actionName, actionValue) {
			// add actionName with 'value' column to be actionValue
			NREUMWrapper.NREUM.addPageAction(actionName, {value: actionValue});
		};

		this.reportError = function (errorMessage) {
			// return new Error(errorMessage)
			NREUMWrapper.NREUM.noticeError(new Error(errorMessage));
			NREUMWrapper.NREUM.addPageAction('error', {message: errorMessage});
		};

		this.load = function () {
			// report the finished event
			NREUMWrapper.NREUM.finished();
		};
	});