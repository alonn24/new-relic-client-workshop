// Cheater!
// Nothing to see here ! !

































































































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
			if (!contains(input, 'SELECT uniqueCount') || !contains(input, 'PageView')) {
				return 'Wrong! You need to query unique count from PageView.';
			} else if (contains(input, 'PageAction')) {
				return 'Wrong! You don\'t need to query PageAction.';
			} else if (!contains(input, 'appName = \'wix-ecommerce-checkout-statics\'')) {
				return 'Wrong! Notice the app name.';
			} else if (contains(input, 'since 1 day ago')) {
				return 'Wrong! Notice the time frame.';
			}
			return true;
		}
	},
	Q2: {
		type    : 'input',
		name    : 'answer',
		message : 'Enter your answer for Q2:',
		validate: function (input) {
			if (!contains(input, 'SELECT count') || contains(input, 'from PageAction')) {
				return 'Wrong! You need to query count from PageAction.';
			} else if (contains(input, 'from PageView')) {
				return 'Wrong! You don\'t need to query PageView.';
			} else if (!contains(input, 'actionName=\'error\'')) {
				return 'Wrong! You need to query only errors.';
			} else if (!contains(input, 'appName like \'wix-ecommerce%\'')) {
				return 'Wrong! You need to query \'wix-ecommerce\' projects.'
			} else if (!contains(input, 'facet staticUrl')) {
				return 'Wrong! You need to facet staticUrl.';
			} else if (!contains(input, 'TIMESERIES')) {
				return 'Wrong! you need to use TIMESERIES.';
			}
			return true;
		}
	},
	Q4: {
		type    : 'input',
		name    : 'answer',
		message : 'Enter your answer for Q4:',
		validate: function (input) {
			if (!contains(input, 'PageAction') || !contains(input, 'actionName=\'finished\'')) {
				return 'Wrong! You need to query the finished form PageAction.';
			} else if (!contains(input, 'appName like \'wix-ecommerce%\'')) {
				return 'Wrong! You need to query \'wix-ecommerce\' projects.'
			} else if (!contains(input, 'histogram(timeSinceLoad, 20, 100)')) {
				return 'Wrong! You need to show an histogram with up to 20 with 100 buckets.'
			}
			return true;
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
			'Q3',
			'Q4'
		]
	}], function (answers) {
		inquirer.prompt([questions[answers.type]], ask)
	});
}

ask();