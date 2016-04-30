'use strict';

const MusicBrainzOAuth2Strategy = require('..').Strategy;
const expect = require('chai').expect;
const _ = require('lodash');

const testOptions = {
	clientID: 'foo',
	clientSecret: 'bar',
	callbackURL: 'http://localhost/cb',
	scope: 'profile'
};


describe('MusicBrainzOAuth2Strategy', () => {
	const strategy = new MusicBrainzOAuth2Strategy(testOptions, () => {});

	it('should be named musicbrainz-oauth2', () => {
		expect(strategy.name).to.equal('musicbrainz-oauth2');
	});

	it('should throw if constructed without a verify callback', () => {
		expect(() =>
			new MusicBrainzOAuth2Strategy(testOptions)
		).to.throw(
			TypeError, 'MusicBrainzOAuth2Strategy requires a verify callback'
		);
	});

	it('should throw if constructed without a clientID option', () => {
		expect(() =>
			new MusicBrainzOAuth2Strategy(
				_.omit(testOptions, 'clientID'), () => {}
			)
		).to.throw(
			TypeError, 'MusicBrainzOAuth2Strategy requires a clientID option'
		);
	});

	it('should throw if constructed without a clientSecret option', () => {
		expect(() =>
			new MusicBrainzOAuth2Strategy(
				_.omit(testOptions, 'clientSecret'), () => {}
			)
		).to.throw(
			TypeError,
			'MusicBrainzOAuth2Strategy requires a clientSecret option'
		);
	});

	it('should throw if constructed without a callbackURL option', () => {
		expect(() =>
			new MusicBrainzOAuth2Strategy(
				_.omit(testOptions, 'callbackURL'), () => {}
			)
		).to.throw(
			TypeError,
			'MusicBrainzOAuth2Strategy requires a callbackURL option'
		);
	});

	it('should throw if constructed without a scope option', () => {
		expect(() =>
			new MusicBrainzOAuth2Strategy(
				_.omit(testOptions, 'scope'), () => {}
			)
		).to.throw(
			TypeError,
			'MusicBrainzOAuth2Strategy requires a scope option'
		);
	});
});
