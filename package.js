Package.describe({
	name: 'phpfox:connect',
	version: '0.0.1',
	summary: 'phpFox Integration',
	git: 'https://git.younetco.com/phpfox-mobile/phpfox-integration',
	documentation: 'README.md',
});

Npm.depends({
	apn: '2.2.0',
});

Package.onUse(function(api) {

	api.versionsFrom('1.8.0.2');

	api.use([
		'ecmascript',
	]);

	api.addFiles('server.js', 'server');
	api.export('APN', 'server');
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('phpfox:connect');
	api.mainModule('phpfox-integration-tests.js', 'server');
});
