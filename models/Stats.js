var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Stats Model
 * ==========
 */

var Stats = new keystone.List('Stats');

Stats.add({
	bonuses: { type: Types.Number},
	user0th: { type: Types.Number},
	user1st: { type: Types.Number},
	user1stStarts: { type: Types.Number},
	user5th: { type: Types.Number},
});

Stats.defaultColumns = 'bonuses, user0th, user1st, user1stStarts, user5th';
Stats.register();

