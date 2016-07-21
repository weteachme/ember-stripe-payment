import { moduleFor, test } from 'ember-qunit';

var options, message, validator;
moduleFor('validator:credit-card', 'Unit | Validator | credit-card', {
  needs: ['validator:messages'],
  setup: function() {
    validator = this.subject();
  }
});

test('number', function(assert) {
  assert.expect(1);
  options = {
    type: 'number'
  };
  options = validator.buildOptions(options, {}).copy();
  message = validator.validate('4242 4242 4242 4242', options);
  assert.equal(message, true);
});

test('expiry', function(assert) {
  assert.expect(1);
  options = {
    type: 'expiry',
    divider: '/'
  };
  options = validator.buildOptions(options, {}).copy();
  message = validator.validate('12/2030', options);
  assert.equal(message, true);
});

test('cvc - visa', function(assert) {
  assert.expect(1);
  options = {
    type: 'cvc',
    'card-type': 'visa'
  };
  options = validator.buildOptions(options, {}).copy();
  message = validator.validate(123, options);
  assert.equal(message, true);
});

test('cvc - amex', function(assert) {
  assert.expect(1);
  options = {
    type: 'cvc',
    'card-type': 'amex'
  };
  options = validator.buildOptions(options, {}).copy();
  message = validator.validate(1123, options);
  assert.equal(message, true);
});
