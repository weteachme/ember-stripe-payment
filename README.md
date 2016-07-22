# Ember-stripe-payment

Wrapper for Stripe jquery.payment

## Install
- `ember install https://github.com/weteachme/ember-stripe-payment.git`
- `ember generate ember-stripe-payment`

## Usage
Validate credit card.

#### Options
- `type` (**String**): Can be the one of the following options [`number`, `expiry`, `cvc`]
- `divider` (**String**): Divider used for expiry. e.g. '/' or '-'
- `card-type` (**String**): Can be the one of the following options [`visa`, `mastercard`, `amex`]

```javascript
// Examples
validator('credit-card', {
  type: 'number'
})
validator('credit-card', {
  type: 'expiry',
  divider: '/'
})
validator('credit-card', {
  type: 'cvc',
  'card-type': 'amex'
})
validator('credit-card', {
    type: 'number',
    message: 'Card number is invalid.'
})
```

