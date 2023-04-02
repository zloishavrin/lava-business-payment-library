# lava-business-payment-library-nodejs

## Установка

Установить можно используя менеджеры пакетов, например, npm.

```javascript
npm install zloishavrin/lava-business-payment-library
```

## Использование

Реализованы все методы доступные в API LAVA BUSINESS

### Выставление счета

Обязательно указываются сумма на которую выставляется счёт, уникальный идентификатор счёта (можно использовать Date() для этого), а также уникальный идентификатор проекта в Lava (если был указан в конструкторе, то не обязательно указывать в методе).

```javascript
  lavaApi.createInvoice({

    shopId: SHOP_ID,
    sum: SUM,
    orderId: new Date().getTime()

})
