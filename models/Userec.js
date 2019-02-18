var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Userec Model
 * ==========
 */
var Userec = new keystone.List('Userec');

Userec.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Userec.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Registration
 */
Userec.defaultColumns = 'name, email, isAdmin';
Userec.register();
