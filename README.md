# Currency Exchange Backend (Node.js + Express)

This is the backend service for a Currency Converter application built using Node.js and Express.
The backend is deployed on Microsoft Azure App Service and provides APIs to convert currencies
using real-time exchange rates.

---

## Features

- Currency conversion API
- Uses external Exchange Rate API
- MVC folder structure
- Centralized error handling
- Environment variable based configuration
- Deployed on Azure App Service
- Ready to connect with frontend

---

## Tech Stack

- Node.js
- Express.js
- Axios
- dotenv
- Azure App Service
- Git & GitHub

---

## Environment Variables

Create a .env file in the root directory (this file is ignored by git):

LOCAL PORT=3005  
EXCHANGE_API_KEY=my_api_key

---

## API Endpoint

### Convert Currency

POST /api/convert

Request Body:
{
  "amount": 100,
  "sourceCurrency": "USD",
  "targetCurrency": "INR"
}

Response:
{
  "sourceAmount": 100,
  "sourceCurrency": "USD",
  "targetCurrency": "INR",
  "targetAmount": 8300
}

---

## How It Works

1. Frontend sends amount and currency details
2. Backend fetches real-time exchange rates using API key
3. Conversion is calculated on server
4. Converted amount is returned as response

---

## Deployment

- Backend deployed on Azure App Service
- Node.js runtime on Linux
- Environment variables managed in Azure settings
- Azure auto builds and runs the application

---

## Status

Backend deployed successfully  
API working correctly  
Ready for frontend integration

---

## Author

Pranay Praveen
