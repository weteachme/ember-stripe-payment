/**
 * Copyright 2016, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import Ember from 'ember';
import Base from 'ember-cp-validations/validators/base';

const {
  isEmpty,
  assert,
  getProperties,
  $
} = Ember;

/**
 *  Validate credit card.
 *
 *   #### Options
 *  - `type` (**String**): Can be the one of the following options [`number`, `expiry`, `cvc`]
 *  - `divider` (**String**): Divider used for expiry. e.g. '/' or '-'
 *  - `card-type` (**String**): Can be the one of the following options [`visa`, `mastercard`, `amex`]
 *
 *  ```javascript
 *  // Examples
 *  validator('credit-card', {
 *    type: 'number'
 *  })
 *  validator('credit-card', {
 *    type: 'expiry',
 *    divider: '/'
 *  })
 *  validator('credit-card', {
 *    type: 'cvc',
 *    'card-type': 'amex'
 *  })
 *  validator('credit-card', {
 *      type: 'number',
 *      message: 'Card number is invalid.'
 *  })
 *  ```
 *
 *  @class Format
 *  @module Validators
 *  @extends Base
 */
export default Base.extend({
  validate(value, options, model, attribute) {
    const { type, divider, cardType } = getProperties(options, ['type', 'divider', 'card-type']);

    assert(`[ember-cp-validations] [validator:credit-card] [${attribute}] no options were passed in`, !isEmpty(Object.keys(options)));

    if(type === 'number' && !$.payment.validateCardNumber(value)) {
      return this.createErrorMessage(type || 'invalid', value, options);
    }

    if(type === 'expiry') {
      const [ month, year ] = value.split(divider);
      if(!$.payment.validateCardExpiry(month, year)) {
        return this.createErrorMessage(type || 'invalid', value, options);
      }
    }

    if(type === 'cvc' && !$.payment.validateCardCVC(value, cardType)) {
      return this.createErrorMessage(type || 'invalid', value, options);
    }

    return true;
  }
});
