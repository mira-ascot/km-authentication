# KM Authentication

A simple Node.js proxy server that receives authentication requests from
Infobip and forwards them to the Kuwait Municipality AD authentication
API.

## 🚀 Features

-   Receives `POST /auth` requests with `username` and `password`
-   Forwards the request to\
    `https://kmapi.baladia.gov.kw/km-adauth/api/Auth/login`
-   Returns the external API's response back to the caller
-   Simple Express.js + Axios setup

------------------------------------------------------------------------

## 📁 Project Structure

    KM_Authentication/
    │ package.json
    │ index.js
    │ config.js
    └── routes/
        └── auth.js

------------------------------------------------------------------------

## 🔧 Installation

``` bash
npm install
```

------------------------------------------------------------------------

## ▶️ Running the Server

``` bash
npm start
```

Server default port: **3000**

------------------------------------------------------------------------

## 🧪 Example Request

POST `http://localhost:3000/auth`

``` json
{
  "username": "23423",
  "password": "B@md8745"
}
```

------------------------------------------------------------------------

## 🛠 Tech Stack

-   Node.js
-   Express.js
-   Axios

------------------------------------------------------------------------

## ✨ Notes

This server acts as a middle-layer between Infobip and the Baladia AD
authentication API, ensuring your credentials stay secure and the flow
stays clean.
