/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-stripe-payment',
  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    app.import(app.bowerDirectory + '/jquery.payment/lib/jquery.payment.min.js');

    return app;
  }
};
