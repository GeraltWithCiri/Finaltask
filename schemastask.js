const { Date } = require("mongoose");
const mongoose = require("mongoose");
const Supplier = require("./supplierModel");
const { ObjectId } = require("mongodb");
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true, // Ensures the id is unique
    description: "Unique identifier for the user",
  },
  name: {
    type: String,
    required: true,
    description: "Full name of the user",
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures the email is unique
    description: "Email address of the user",
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Validates email format
      },
      message: props => `${props.value} is not a valid email address!`,
    },
  },
  age: {
    type: Number,
    required: false,
    min: 0,
    description: "Age of the user (non-negative)",
  },
  isActive: {
    type: Boolean,
    required: false,
    default: true,
    description: "Indicates whether the user's account is active",
  },
}, {
  timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
});

module.exports = mongoose.model('User', userSchema);
