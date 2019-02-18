var keystone = require('keystone');
var User = new keystone.List('User');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'stats';

	// view.query('stats', Stats.model.find().sort('sortOrder'));

	view.render('stats');

}
