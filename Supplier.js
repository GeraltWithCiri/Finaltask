db.suppliers.find({
  product_type: { $in: ["Printer", "Computer"] }, // Filter for printers or computers
  supply_date: {
    $gte: new Date("2021-01-01"), // Start of 2021
    $lt: new Date("2022-01-01")  // End of 2021
  }
}, { vendor_name: 1 }); // Return vendor name only
