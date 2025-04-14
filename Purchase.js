db.purchases.find({
  purchase_date: {
    $gte: new Date("2021-01-01"), // Start of January 2021
    $lt: new Date("2021-02-01")  // End of January 2021
  }
}, { product_name: 1, purchase_date: 1 }); // Only return product name and purchase date
