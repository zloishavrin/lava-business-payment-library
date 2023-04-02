const axios = require("axios");
const crypto = require("crypto");

const createSignature = (key, data) => {

	return crypto.createHmac("sha256", key)
		.update(JSON.stringify(data))
		.digest("hex");

}

class LavaPayment {

	constructor (

		shopId,
		secretKey,
		domainName = 'ru'

	) {

		this.shopId = shopId;
		this.secretKey = secretKey;
		this.domainName = domainName;

	}

	request(o, body = {}) {

		return new Promise((resolve, reject) => {

			axios.post(`https://api.lava.${this.domainName}/${o}`, JSON.stringify(body),
						{

							headers: {

								Accept: 'application/json',
								'Content-Type': 'application/json',
								Signature: createSignature(this.secretKey, body),
							
							},

			  			})
			.then(response => resolve(response.data))
			.catch(error => {

				console.error(error);
				reject(error);
			
			});

		  });

	}
	
	createPayoff(data) {

		return this.request('business/payoff/create',
							{

								shopId: data.shopId || this.shopId,
								...data

							})

	}

	payoffInfo(data) {

		return this.request('business/payoff/info',
							{

								shopId: data.shopId || this.shopId,
								...data

							})

	}

	getTariffsPayoff(shopId) {

		return this.request('business/payoff/get-tariffs',
							{

								shopId: shopId || this.shopId

							})

	}

	createInvoice(data) {

		return this.request('business/invoice/create',
							{

								shopId: data.shopId || this.shopId,
								...data

							})

	}

	statusInvoice(data) {

		return this.request('business/invoice/status',
							{

								shopId: data.shopId || this.shopId,
								...data

							})

	}

	getAvailableTariffs(shopId) {

		return this.request('business/invoice/get-available-tariffs',
							{

								shopId: shopId || this.shopId

							})

	}

	getBalance(shopId) {

		return this.request('business/shop/get-balance',
							{

								shopId: shopId || this.shopId

							})

	}

}
	
module.exports = {LavaPayment};
