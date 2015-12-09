var inquirer = require('inquirer');

function contains(actual, expected) {
	return actual.trim().replace(/\s/g, '').toLowerCase()
			.indexOf(expected.trim().replace(/\s/g, '').toLowerCase()) >= 0;
}

var questions = {
	Q1: {
		type    : 'input',
		name    : 'answer',
		message : 'Enter your answer for Q1:',
		validate: function (input) {
			var valid = contains(input, 'SELECT uniqueCount') &&
				contains(input, 'PageView') &&
				!contains(input, 'PageAction') &&
				contains(input, 'appName = \'wix-ecommerce-checkout-statics\'');
			if (valid) {
				return 'Wrong !';
			} else {
				return true;
			}
		}
	},
	Q2: {
		type    : 'input',
		name    : 'answer',
		message : 'Enter your answer for Q2:',
		validate: function (input) {
			var valid = contains(input, 'SELECT count') &&
				contains(input, 'from PageAction') &&
				contains(input, 'actionName=\'error\'') &&
				contains(input, 'appName like \'wix-ecommerce%\'') &&
				contains(input, 'facet staticUrl') &&
				contains(input, 'TIMESERIES');
			if (valid) {
				return 'Wrong !';
			} else {
				return true;
			}
		}
	},
	Q3: {
		type    : 'input',
		name    : 'answer',
		message : 'Enter your answer for Q3:',
		validate: function (input) {
			var valid = contains(input, '(filter(uniqueCount(session), WHERE actionName=\'error\')/uniqueCount(session))') &&
				contains(input, 'PageView') &&
				contains(input, 'PageAction');
			if (valid) {
				return 'Wrong !';
			} else {
				return true;
			}
		}
	}
};

function ask() {
	inquirer.prompt([{
		type   : 'list',
		name   : 'type',
		message: 'Choose question:',
		choices: [
			'Q1',
			'Q2',
			'Q3'
		]
	}], function (answers) {
		inquirer.prompt([questions[answers.type]], ask)
	});
}

ask();