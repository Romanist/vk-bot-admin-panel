var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var User = new keystone.List('User');

User.add({
	arrivTime: { type: Types.Text},
	last_name: { type: Types.Text},
	first_name: { type: Types.Text},
	link: { type: Types.Url},
	step: {type: Types.Text},
	isStarted: { type: Types.Boolean},
	isFinished: { type: Types.Boolean},
	startCount: { type: Types.Number},
	finishCount: { type: Types.Number}
});

// view.query('currentUser', User.model.findOne({ name: 'Роман' }));

User.defaultColumns = 'arrivTime, last_name, first_name, link, step, isStarted, isFinished, startCount, finishCount';
User.register();

