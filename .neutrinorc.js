module.exports = {
	options: {
		mains: {
			popup: 'popup/popup.js',
			background: 'background/background.js',
		}
	},
	use: [
		'@neutrinojs/web-extension'
	]
};
