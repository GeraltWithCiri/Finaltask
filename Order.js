db.orders.aggregate([
  {
    $match: {
      order_date: {
        $gte: new Date("2021-01-01"), // Start of 2021
        $lt: new Date("2022-01-01")  // End of 2021
      }
    }
  },
  {
    $group: {
      _id: { month: { $month: "$order_date" } }, // Group orders by month
      order_count: { $sum: 1 } // Count the number of orders per month
    }
  }
]);
