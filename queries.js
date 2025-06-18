use BakeryShop

db.products.find({ isAvailable: true });

db.products.find({ price: { $lt: 3 } });

db.products.find({ 
  category: "Pastry", 
  popularity: { $gt: 4.5 } 
});

db.products.updateOne(
  { name: "Croissant" },
  { $set: { price: 2.75 } }
);

db.products.updateOne(
  { name: "Tiramisu" },
  { 
    $set: { 
      isAvailable: true, 
      dailyStock: 15,
      lastRestock: new Date() 
    } 
  }
);

db.products.deleteOne({ name: "Tiramisu" });

db.products.aggregate([
  {
    $group: {
      _id: "$category",
      avgPrice: { $avg: "$price" },
      count: { $sum: 1 },
      totalDailyStock: { $sum: "$dailyStock" }
    }
  },
  {
    $sort: { avgPrice: -1 }
  }
]);

db.customers.find({ "address.city": "Springfield" });

db.customers.find({ loyaltyPoints: { $gt: 200 } });

db.customers.find({
  lastVisit: {
    $gte: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
  }
});

db.customers.updateOne(
  { email: "emma.j@example.com" },
  { $inc: { loyaltyPoints: 25 } }
);

db.customers.updateOne(
  { email: "james.s@example.com" },
  { 
    $set: { 
      "address.street": "789 Oak Ave",
      "address.zip": "62703" 
    } 
  }
);

db.customers.deleteOne({ 
  lastVisit: { 
    $lt: new Date(new Date() - 365 * 24 * 60 * 60 * 1000) 
  } 
});

db.customers.aggregate([
  {
    $group: {
      _id: "$address.city",
      customerCount: { $sum: 1 },
      avgLoyaltyPoints: { $avg: "$loyaltyPoints" },
      earliestJoinDate: { $min: "$joinDate" }
    }
  }
]);

db.orders.find({ status: "Completed" });

db.orders.find({ total: { $gt: 20 } });

db.orders.find({
  orderDate: {
    $gte: new Date(new Date().setDate(new Date().getDate()-1)),
    $lt: new Date()
  }
});

db.orders.updateOne(
  { orderId: "ORD1004" },
  { $set: { status: "Refunded" } }
);

db.orders.updateOne(
  { orderId: "ORD1002" },
  { $inc: { total: -2.00 } }
);

db.orders.deleteOne({ orderId: "ORD1006" });

db.orders.aggregate([
  {
    $group: {
      _id: "$paymentMethod",
      count: { $sum: 1 },
      totalRevenue: { $sum: "$total" },
      avgOrderValue: { $avg: "$total" }
    }
  },
  {
    $sort: { totalRevenue: -1 }
  }
]);

db.employees.find({ position: { $in: ["Baker", "Head Baker"] } });

db.employees.find({
  hireDate: {
    $gte: new Date(new Date().setFullYear(new Date().getFullYear()-1))
  }
});

db.employees.find({ salary: { $gt: 40000 } });

db.employees.updateOne(
  { email: "michael.t@bakery.com" },
  { $inc: { salary: 2000 } }
);

db.employees.updateOne(
  { email: "jessica.j@bakery.com" },
  { $set: { shifts: ["Monday", "Wednesday", "Friday", "Sunday"] } }
);

db.employees.deleteOne({ email: "daniel.w@bakery.com" });

db.employees.aggregate([
  {
    $group: {
      _id: "$position",
      avgSalary: { $avg: "$salary" },
      count: { $sum: 1 },
      minHireDate: { $min: "$hireDate" }
    }
  },
  {
    $sort: { avgSalary: -1 }
  }
]);
y
db.suppliers.find({ deliveryDays: "Wednesday" });

db.suppliers.find({
  contractStart: {
    $lt: new Date("2020-01-01")
  }
});

db.suppliers.find({
  lastDelivery: {
    $gte: new Date(new Date() - 3 * 24 * 60 * 60 * 1000)
  }
});

db.suppliers.updateOne(
  { name: "Springfield Flour Co." },
  { 
    $set: { 
      contactPerson: "Richard Johnson",
      phone: "555-0301" 
    } 
  }
);

db.suppliers.updateOne(
  { name: "Midwest Dairy" },
  { $push: { productsSupplied: "yogurt" } }
);

db.suppliers.deleteOne({ 
  lastDelivery: { 
    $lt: new Date(new Date() - 90 * 24 * 60 * 60 * 1000) 
  } 
});

db.suppliers.aggregate([
  {
    $project: {
      name: 1,
      numberOfProducts: { $size: "$productsSupplied" }
    }
  },
  {
    $sort: { numberOfProducts: -1 }
  }
]);
