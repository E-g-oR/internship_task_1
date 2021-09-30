module.exports = {
	presets: [
		['@babel/preset-env', { targets: { node: 'current' } }],
		'@babel/preset-react',
		'@babel/preset-typescript'
	],
	 "plugins": [["@babel/plugin-proposal-class-properties", { "loose": false }]],
    // Babel >= 7.13.0 (https://babeljs.io/docs/en/assumptions)
    "assumptions": {
        "setPublicClassFields": false
    }
}