// Express.js Backend for Admin Page

const express = require('express');
const router = express.Router();
const fullMenuItems = require('../public/data/data'); // Assuming data.js is in a data folder
const User = require('../models/user');
const path = require('path');


// Fetch all menu items
router.get('/api/menu', (req, res) => {
    res.json(fullMenuItems);
});

// Delete a menu item by ID
router.delete('/api/menu/:id', (req, res) => {
    const { id } = req.params;
    const index = fullMenuItems.findIndex(item => item.id === id);

    if (index !== -1) {
        fullMenuItems.splice(index, 1);
        res.status(200).send({ message: 'Menu item deleted successfully.' });
    } else {
        res.status(404).send({ message: 'Menu item not found.' });
    }
});

// Fetch all users
router.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching users.', error });
    }
});

// Delete a user by ID
router.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);

        if (user) {
            res.status(200).send({ message: 'User deleted successfully.' });
        } else {
            res.status(404).send({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting user.', error });
    }
});
router.get('/admin', (req, res) => {
    res.render('admin');      
});


module.exports = router;
