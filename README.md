# passport-musicbrainz-oauth2
[![Build Status](https://img.shields.io/travis/LordSputnik/passport-musicbrainz-oauth2.svg)](https://travis-ci.org/LordSputnik/passport-musicbrainz-oauth2)
[![Dependency Status](https://img.shields.io/david/LordSputnik/passport-musicbrainz-oauth2.svg)](https://david-dm.org/LordSputnik/passport-musicbrainz-oauth2)
[![devDependency Status](https://img.shields.io/david/dev/LordSputnik/passport-musicbrainz-oauth2.svg)](https://david-dm.org/LordSputnik/passport-musicbrainz-oauth2#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/LordSputnik/passport-musicbrainz-oauth2.svg)](https://codeclimate.com/github/LordSputnik/passport-musicbrainz-oauth2)

[MusicBrainz OAuth 2](https://musicbrainz.org/doc/Development/OAuth2)
authentication strategy for [Passport.js](http://passportjs.org/).

This module allows for authentication with MusicBrainz from within a Node.js
application. It was built for use in BookBrainz.

## Install
    $ npm install passport-musicbrainz-oauth2

## Usage
Usage is very similar to passport-oauth2, which this library wraps. The
required parameters are `clientID`, `clientSecret`, `callbackURL` and `scope` —
see [here](https://musicbrainz.org/doc/Development/OAuth2) for more
information. A typical use case looks like this:

```javascript
const MusicBrainzOAuth2Strategy = require('passport-musicbrainz-oauth2');
passport.use(new MusicBrainzOAuth2Strategy(
  {
    clientID: MUSICBRAINZ_CLIENT_ID,
    clientSecret: MUSICBRAINZ_CLIENT_SECRET,
    callbackURL: 'https://www.example.com/auth/musicbrainz-oauth2/callback',
    scope: 'profile'
  },
  function(accessToken, refreshToken, profile, done) {
    // Fetch user here
  }
));
```
