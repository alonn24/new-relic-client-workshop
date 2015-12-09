'use strict';

describe('NREUM', function () {
	var NREUMService;
	beforeEach(function () {
		module('NREUMApp');
		inject(function (_NREUMService_) {
			NREUMService = _NREUMService_;
		});
	});

	it('expect to tag a session', function () {
		expect(window.NREUM.setCustomAttribute).toHaveBeenCalledWith('staticsUrl', 'http://statics.com/projects/version/');
	});

	it('expect to add page action', function () {
		NREUMService.addPageAction('actionName', 'actionValue');
		expect(window.NREUM.addPageAction).toHaveBeenCalledWith('actionName', {value: 'actionValue'});
	});

	it('expect to notice error', function () {
		NREUMService.reportError('my error');
		expect(window.NREUM.noticeError).toHaveBeenCalledWith(new Error('my error'));
		expect(window.NREUM.addPageAction).toHaveBeenCalledWith('error', {message: 'my error'});
	});

	it('expect to report finished', function () {
		NREUMService.load();
		expect(window.NREUM.finished).toHaveBeenCalledWith();
	});
});