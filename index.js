/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-flash',

  included: function(app) {
    this._super.included(app);
    app.import('vendor/ember-cli-flash/styles.css');
  }
};
