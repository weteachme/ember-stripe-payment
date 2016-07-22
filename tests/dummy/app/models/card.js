import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),
  number: validator('credit-card', { type: 'number' }),
  expiry: validator('credit-card', { type: 'expiry', divider: '/' }),
  cvc: validator('credit-card', { type: 'cvc',  'card-type': Ember.computed.alias('model.card.type')})
});

export default Model.extend(Validations, {
  type: attr('string'),
  name: attr('string'),
  number: attr('string'),
  expiry: attr('string'),
  cvc: attr('string')
});
