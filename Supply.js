db.supplies.aggregate([
  {
    $group: {
      _id: "$supplier_name", // Group by supplier name
      total_amount: { $sum: "$supply_amount" } // Sum up supply amounts for each supplier
    }
  },
  {
    $match: { total_amount: { $gt: 70000 } } // Filter suppliers with total amount greater than 70,000
  }
]);
