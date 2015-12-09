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
		// setCustomAttribute staticsUrl to http://statics.com/projects/version/
	})
	.service('NREUMService', function (NREUMWrapper) {
		this.addPageAction = function (actionName, actionValue) {
			// add actionName with 'value' column to be actionValue
		};

		this.reportError = function (errorMessage) {
			// report new Error(errorMessage). don't forget to report to Insights also!
		};

		this.load = function () {
			// report the finished event
		};
	});