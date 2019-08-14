Package.describe({
	name: 'phpfox:phpfox-integration',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'rocketchat-phpfox-integration',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/phpfox-mobile/rocketchat-integration.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md',
});

Npm.depends({
	apn: '2.2.0',
});

Package.onUse(function(api) {
	api.versionsFrom('1.8.0.2');
	api.use('ecmascript');
	api.mainModule('phpfox-integration.js');
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('phpfox:phpfox-integration');
	api.mainModule('phpfox-integration-tests.js');
});
