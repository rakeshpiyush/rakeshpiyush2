// routes/cart.js
const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

router.post('/add', async (req, res) => {
  try {
    const newItem = new CartItem(req.body);
    await newItem.save();
    res.status(201).json('Item added to cart');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const items = await CartItem.find({ userId: req.params.userId }).populate('productId');
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
