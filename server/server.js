require('dotenv').config();
require('newrelic');
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

let imagesHost = process.env.SERVICE_IMAGES_HOST || 'http://localhost:3003';
let checkoutHost = process.env.SERVICE_CHECKOUT_HOST || 'http://localhost:3002';
let reviewsHost = process.env.SERVICE_REVIEWS_HOST || 'http://localhost:3004';
let detailsHost = process.env.SERVICE_DETAILS_HOST || 'http://localhost:3001';

// Services Host API
app.use(proxy('/api/images', {target: imagesHost}));
app.use(proxy('/api/checkout', {target: checkoutHost}));
app.use(proxy('/api/product', {target: reviewsHost}));
app.use(proxy('/api/reviews', {target: reviewsHost}));
app.use(proxy('/api/', {target: detailsHost}));

app.listen(port, () => console.log(`listening to port ${port}`));
