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
		// setCustomAttribute here using NREUMWrapperProvider
	})
	.service('NREUMService', function (NREUMWrapper) {
		this.addPageAction = function (actionName, actionValue) {
			// addPageAction here using NREUMWrapper
		};

		this.reportError = function (errorMessage) {
			// reportError here using NREUMWrapper
		};

		this.load = function () {
			// report finished here using NREUMWrapper
		};
	});