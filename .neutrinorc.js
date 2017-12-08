module.exports = {
	options: {
		mains: {
			content_script: 'content_script.js',
		}
	},
	use: [
		'@neutrinojs/web-extension'
	]
};
