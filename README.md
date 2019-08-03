# Beancount Mobile App

[![License: GPL v3](https://img.shields.io/github/license/xuhcc/beancount-mobile)](https://github.com/xuhcc/beancount-mobile/blob/HEAD/LICENSE)

This is a companion mobile application for [Beancount](http://furius.ca/beancount/) plain-text accounting system.

**Currently available only on Android.**

<a href="https://play.google.com/store/apps/details?id=link.beancount.mobile"><img width="200" alt="Get it on Google Play" src="https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png" /></a>

## Features

* Add transactions
* Open accounts
* View beancount file as plain text
* Switch between files

![File content page](metadata/en-US/images/phoneScreenshots/screenshot_text.png)
![Transaction form](metadata/en-US/images/phoneScreenshots/screenshot_txn.png)

## Change log

See [CHANGELOG](CHANGELOG.md).

## Development

Prerequisites:

* Node.js & NPM
* [NativeScript CLI](https://docs.nativescript.org/angular/start/quick-setup#step-2-install-the-nativescript-cli) 6.0

Install required packages:

```
npm install
```

### Android

Run on emulator:

```
tns run android
```

Build APK:

```
tns build android
```

### Testing

```
npm run lint
npm run test
```

## Donate

Bitcoin: 3GHkLq8jRgsfzaV8N6EjX7BaoMuLdEeu51
