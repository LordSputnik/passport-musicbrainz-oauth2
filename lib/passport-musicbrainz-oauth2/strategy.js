'use strict';

const util = require('util');
const _defaults = require('lodash.defaults');
const OAuth2Strategy = require('passport-oauth2').Strategy;
const InternalOAuthError = require('passport-oauth2').InternalOAuthError;

function Strategy(options, verify) {
	const defaultOptions = {
		authorizationURL: 'https://musicbrainz.org/oauth2/authorize',
		tokenURL: 'https://musicbrainz.org/oauth2/token'
	};

	if (!verify) {
		throw new TypeError(
			'MusicBrainzOAuth2Strategy requires a verify callback'
		);
	}

	const REQUIRED_OPTIONS = [
		'clientID', 'clientSecret', 'callbackURL', 'scope'
	];
	REQUIRED_OPTIONS.forEach((requiredOption) => {
		if (!options[requiredOption]) {
			throw new TypeError(
				`MusicBrainzOAuth2Strategy requires a ${requiredOption} option`
			);
		}
	});

	const modifiedOptions = _defaults(options, defaultOptions);
	OAuth2Strategy.call(this, modifiedOptions, verify);
	this.name = 'musicbrainz-oauth2';
}

util.inherits(Strategy, OAuth2Strategy);

Strategy.prototype.userProfile = function userProfile(accessToken, done) {
	this._oauth2.get(
		'https://musicbrainz.org/oauth2/userinfo', accessToken,
		(err, body) => {
			if (err) {
				return done(
					new InternalOAuthError('failed to fetch user profile')
				);
			}

			try {
				const profile = JSON.parse(body);
				return done(null, profile);
			}
			catch (parseErr) {
				return done(parseErr);
			}
		}
	);
};

module.exports = Strategy;
