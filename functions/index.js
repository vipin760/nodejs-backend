const functions = require('firebase-functions')
const app = require('../index')
const express = require('express')
const webApi = express()
webApi.use('/',app)

exports.webApi = functions.https.onRequest(webApi)