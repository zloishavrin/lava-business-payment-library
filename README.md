# lava-business-payment-library

![LAVA-PAYMENT](https://i.ibb.co/XDn8frs/23-1.png)

Unofficial library for working with the LAVA payment system. The official documentation for working with the API is available [here](https://dev.lava.ru/).

## Installation

You can install using package managers such as npm:

```javascript
npm install zloishavrin/lava-business-payment-library
```

Connecting into the project:

```javascript
const { LavaPayment } = require('lava-payment');
```

## Usage

All methods available in the LAVA BUSINESS API are implemented.

### Creating a class instance

It is necessary to pass to the constructor project ID, API-key and domain name (if not specified, the default value of 'ru').

```javascript
const lavaApi = new LavaPayment(SHOP_ID, API_KEY, DOMAIN_NAME);
```

### Creating payoff

The payoff amount, unique payment identifier in the merchant system, project identifier (if it was specified in the constructor, it is not necessary to specify it in the method) must be specified.

```javascript
lavaApi.createPayoff({

  shopId: SHOP_ID,
  amount: AMOUNT,
  orderId: new Date().getTime()

})
```

### Request for payoff information

It is also mandatory to specify a unique project identifier in Lava (if it was specified in the constructor, it is not necessary to specify it in the method). It is also mandatory to specify a unique payment identifier in the merchant system (orderId) or a payoff number (payoffId).

```javascript
lavaApi.payoffInfo({

  shopId: SHOP_ID,
  orderId: new Date().getTime(),
  payoffId: PAYOFF_ID

})
```

### Request for payoff rates

It is mandatory to specify a unique project identifier in Lava (if it was specified in the constructor, it is not necessary to specify it in the method).

```javascript
lavaApi.getTariffsPayoff(SHOP_ID)
```

### Creating invoice

The amount to be invoiced, the project identifier (if it was specified in the constructor, it is not necessary to specify it in the method), the unique payment identifier in the merchant system (you can use Date()) are obligatory.

```javascript
lavaApi.createInvoice({

  shopId: SHOP_ID,
  sum: SUM,
  orderId: new Date().getTime()

})
```

### Invoice status

It is mandatory to specify a unique project identifier in Lava (if it was specified in the constructor, it is not necessary to specify it in the method). The unique payment identifier in the merchant system (orderId) or invoice identifier (invoiceId) must also be specified.

```javascript
lavaApi.statusInvoice({

  shopId: SHOP_ID,
  invoiceId: INVOICE_ID,
  orderId: ORDER_ID

})
```

### Getting a list of payment methods

It is mandatory to specify a unique project identifier in Lava (if it was specified in the constructor, it is not necessary to specify it in the method).

```javascript
lavaApi.getAvailableTariffs(SHOP_ID)
```

### Getting the store balance

It is mandatory to specify a unique project identifier in Lava (if it was specified in the constructor, it is not necessary to specify it in the method).

```javascript
lavaApi.getBalance(SHOP_ID)
```

## Dependencies

Package|Assignment
:-----------:|:--------------------------------------------:
axios|For requests to the LAVA API
crypto|The package is needed to implement the signature creation method
