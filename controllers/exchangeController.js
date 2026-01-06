const exchangeRateService = require("../service/ExchangeRateService");

exports.convertCurrency = (req, res, next) => {
    const { amount, sourceCurrency, targetCurrency } = req.body;
    if (!amount || !sourceCurrency || !targetCurrency) {
        return res.status(400).json({status: "failed", message: "Missing required fields" });
    }

    const targetAmount = exchangeRateService.convert(amount, sourceCurrency, targetCurrency);

    res.json({status: "success",targetAmount});
}