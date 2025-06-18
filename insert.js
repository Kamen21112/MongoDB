use BakeryShop

db.products.insertMany([
  {
    name: "Croissant",
    category: "Pastry",
    price: 2.50,
    cost: 0.75,
    ingredients: ["flour", "butter", "yeast", "sugar", "salt"],
    isAvailable: true,
    dailyStock: 50,
    popularity: 4.8,
    lastRestock: new Date("2023-05-15")
  },
  {
    name: "Chocolate Chip Cookie",
    category: "Cookie",
    price: 1.75,
    cost: 0.50,
    ingredients: ["flour", "butter", "sugar", "chocolate chips", "eggs", "vanilla"],
    isAvailable: true,
    dailyStock: 100,
    popularity: 4.9,
    lastRestock: new Date("2023-05-18")
  },
  {
    name: "Sourdough Bread",
    category: "Bread",
    price: 5.99,
    cost: 1.80,
    ingredients: ["flour", "water", "salt", "sourdough starter"],
    isAvailable: true,
    dailyStock: 30,
    popularity: 4.7,
    lastRestock: new Date("2023-05-17")
  },
  {
    name: "Blueberry Muffin",
    category: "Muffin",
    price: 3.25,
    cost: 1.00,
    ingredients: ["flour", "sugar", "eggs", "butter", "blueberries", "baking powder"],
    isAvailable: true,
    dailyStock: 40,
    popularity: 4.6,
    lastRestock: new Date("2023-05-16")
  },
  {
    name: "Tiramisu",
    category: "Dessert",
    price: 4.50,
    cost: 1.50,
    ingredients: ["ladyfingers", "mascarpone", "coffee", "eggs", "sugar", "cocoa"],
    isAvailable: false,
    dailyStock: 0,
    popularity: 4.9,
    lastRestock: new Date("2023-05-10")
  },
  {
    name: "Baguette",
    category: "Bread",
    price: 3.50,
    cost: 1.00,
    ingredients: ["flour", "water", "yeast", "salt"],
    isAvailable: true,
    dailyStock: 25,
    popularity: 4.5,
    lastRestock: new Date("2023-05-19")
  },
  {
    name: "Cinnamon Roll",
    category: "Pastry",
    price: 3.75,
    cost: 1.10,
    ingredients: ["flour", "butter", "cinnamon", "sugar", "yeast", "milk"],
    isAvailable: true,
    dailyStock: 35,
    popularity: 4.8,
    lastRestock: new Date("2023-05-18")
  },
  {
    name: "Red Velvet Cake",
    category: "Cake",
    price: 25.99,
    cost: 8.50,
    ingredients: ["flour", "sugar", "butter", "eggs", "cocoa", "buttermilk", "food coloring"],
    isAvailable: true,
    dailyStock: 5,
    popularity: 4.9,
    lastRestock: new Date("2023-05-17")
  },
  {
    name: "Almond Croissant",
    category: "Pastry",
    price: 3.50,
    cost: 1.20,
    ingredients: ["croissant", "almond paste", "sliced almonds", "sugar"],
    isAvailable: true,
    dailyStock: 20,
    popularity: 4.7,
    lastRestock: new Date("2023-05-19")
  },
  {
    name: "Brownie",
    category: "Dessert",
    price: 2.99,
    cost: 0.80,
    ingredients: ["chocolate", "butter", "sugar", "eggs", "flour", "walnuts"],
    isAvailable: true,
    dailyStock: 60,
    popularity: 4.8,
    lastRestock: new Date("2023-05-19")
  }
]);

db.customers.insertMany([
  {
    firstName: "Emma",
    lastName: "Johnson",
    email: "emma.j@example.com",
    phone: "555-0101",
    joinDate: new Date("2022-01-15"),
    loyaltyPoints: 125,
    favoriteItems: ["Croissant", "Blueberry Muffin"],
    lastVisit: new Date("2023-05-18"),
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zip: "62701"
    }
  },
  {
    firstName: "James",
    lastName: "Smith",
    email: "james.s@example.com",
    phone: "555-0102",
    joinDate: new Date("2021-11-20"),
    loyaltyPoints: 320,
    favoriteItems: ["Sourdough Bread", "Baguette"],
    lastVisit: new Date("2023-05-19"),
    address: {
      street: "456 Oak Ave",
      city: "Springfield",
      state: "IL",
      zip: "62702"
    }
  },
  {
    firstName: "Olivia",
    lastName: "Williams",
    email: "olivia.w@example.com",
    phone: "555-0103",
    joinDate: new Date("2023-02-10"),
    loyaltyPoints: 45,
    favoriteItems: ["Chocolate Chip Cookie", "Brownie"],
    lastVisit: new Date("2023-05-17"),
    address: {
      street: "789 Pine Rd",
      city: "Shelbyville",
      state: "IL",
      zip: "62703"
    }
  },
  {
    firstName: "Liam",
    lastName: "Brown",
    email: "liam.b@example.com",
    phone: "555-0104",
    joinDate: new Date("2020-08-05"),
    loyaltyPoints: 580,
    favoriteItems: ["Red Velvet Cake", "Tiramisu"],
    lastVisit: new Date("2023-05-15"),
    address: {
      street: "101 Elm St",
      city: "Springfield",
      state: "IL",
      zip: "62704"
    }
  },
  {
    firstName: "Sophia",
    lastName: "Jones",
    email: "sophia.j@example.com",
    phone: "555-0105",
    joinDate: new Date("2022-05-18"),
    loyaltyPoints: 210,
    favoriteItems: ["Cinnamon Roll", "Almond Croissant"],
    lastVisit: new Date("2023-05-19"),
    address: {
      street: "202 Maple Dr",
      city: "Shelbyville",
      state: "IL",
      zip: "62705"
    }
  },
  {
    firstName: "Noah",
    lastName: "Garcia",
    email: "noah.g@example.com",
    phone: "555-0106",
    joinDate: new Date("2023-01-30"),
    loyaltyPoints: 75,
    favoriteItems: ["Baguette", "Croissant"],
    lastVisit: new Date("2023-05-16"),
    address: {
      street: "303 Cedar Ln",
      city: "Springfield",
      state: "IL",
      zip: "62706"
    }
  },
  {
    firstName: "Ava",
    lastName: "Miller",
    email: "ava.m@example.com",
    phone: "555-0107",
    joinDate: new Date("2021-09-12"),
    loyaltyPoints: 420,
    favoriteItems: ["Blueberry Muffin", "Chocolate Chip Cookie"],
    lastVisit: new Date("2023-05-18"),
    address: {
      street: "404 Birch Blvd",
      city: "Springfield",
      state: "IL",
      zip: "62707"
    }
  },
  {
    firstName: "William",
    lastName: "Davis",
    email: "william.d@example.com",
    phone: "555-0108",
    joinDate: new Date("2020-04-25"),
    loyaltyPoints: 650,
    favoriteItems: ["Sourdough Bread", "Red Velvet Cake"],
    lastVisit: new Date("2023-05-14"),
    address: {
      street: "505 Spruce Ave",
      city: "Shelbyville",
      state: "IL",
      zip: "62708"
    }
  },
  {
    firstName: "Isabella",
    lastName: "Rodriguez",
    email: "isabella.r@example.com",
    phone: "555-0109",
    joinDate: new Date("2023-03-14"),
    loyaltyPoints: 30,
    favoriteItems: ["Brownie", "Cinnamon Roll"],
    lastVisit: new Date("2023-05-19"),
    address: {
      street: "606 Willow Way",
      city: "Springfield",
      state: "IL",
      zip: "62709"
    }
  },
  {
    firstName: "Benjamin",
    lastName: "Martinez",
    email: "benjamin.m@example.com",
    phone: "555-0110",
    joinDate: new Date("2019-12-03"),
    loyaltyPoints: 720,
    favoriteItems: ["Almond Croissant", "Tiramisu"],
    lastVisit: new Date("2023-05-17"),
    address: {
      street: "707 Aspen Ct",
      city: "Springfield",
      state: "IL",
      zip: "62710"
    }
  }
]);

db.orders.insertMany([
  {
    orderId: "ORD1001",
    customerId: ObjectId(),
    customerEmail: "emma.j@example.com",
    orderDate: new Date("2023-05-18T09:30:00"),
    items: [
      { productId: ObjectId(), name: "Croissant", price: 2.50, quantity: 2 },
      { productId: ObjectId(), name: "Coffee", price: 2.00, quantity: 1 }
    ],
    subtotal: 7.00,
    tax: 0.56,
    total: 7.56,
    paymentMethod: "Credit Card",
    status: "Completed"
  },
  {
    orderId: "ORD1002",
    customerId: ObjectId(),
    customerEmail: "james.s@example.com",
    orderDate: new Date("2023-05-19T08:15:00"),
    items: [
      { productId: ObjectId(), name: "Sourdough Bread", price: 5.99, quantity: 1 },
      { productId: ObjectId(), name: "Baguette", price: 3.50, quantity: 1 }
    ],
    subtotal: 9.49,
    tax: 0.76,
    total: 10.25,
    paymentMethod: "Cash",
    status: "Completed"
  },
  {
    orderId: "ORD1003",
    customerId: ObjectId(),
    customerEmail: "olivia.w@example.com",
    orderDate: new Date("2023-05-17T14:20:00"),
    items: [
      { productId: ObjectId(), name: "Chocolate Chip Cookie", price: 1.75, quantity: 4 },
      { productId: ObjectId(), name: "Brownie", price: 2.99, quantity: 2 }
    ],
    subtotal: 12.98,
    tax: 1.04,
    total: 14.02,
    paymentMethod: "Credit Card",
    status: "Completed"
  },
  {
    orderId: "ORD1004",
    customerId: ObjectId(),
    customerEmail: "liam.b@example.com",
    orderDate: new Date("2023-05-15T11:45:00"),
    items: [
      { productId: ObjectId(), name: "Red Velvet Cake", price: 25.99, quantity: 1 }
    ],
    subtotal: 25.99,
    tax: 2.08,
    total: 28.07,
    paymentMethod: "Credit Card",
    status: "Completed"
  },
  {
    orderId: "ORD1005",
    customerId: ObjectId(),
    customerEmail: "sophia.j@example.com",
    orderDate: new Date("2023-05-19T10:00:00"),
    items: [
      { productId: ObjectId(), name: "Cinnamon Roll", price: 3.75, quantity: 2 },
      { productId: ObjectId(), name: "Almond Croissant", price: 3.50, quantity: 1 },
      { productId: ObjectId(), name: "Tea", price: 1.50, quantity: 1 }
    ],
    subtotal: 12.50,
    tax: 1.00,
    total: 13.50,
    paymentMethod: "Mobile Payment",
    status: "Completed"
  },
  {
    orderId: "ORD1006",
    customerId: ObjectId(),
    customerEmail: "noah.g@example.com",
    orderDate: new Date("2023-05-16T16:30:00"),
    items: [
      { productId: ObjectId(), name: "Baguette", price: 3.50, quantity: 2 },
      { productId: ObjectId(), name: "Croissant", price: 2.50, quantity: 1 }
    ],
    subtotal: 9.50,
    tax: 0.76,
    total: 10.26,
    paymentMethod: "Cash",
    status: "Completed"
  },
  {
    orderId: "ORD1007",
    customerId: ObjectId(),
    customerEmail: "ava.m@example.com",
    orderDate: new Date("2023-05-18T13:15:00"),
    items: [
      { productId: ObjectId(), name: "Blueberry Muffin", price: 3.25, quantity: 3 },
      { productId: ObjectId(), name: "Chocolate Chip Cookie", price: 1.75, quantity: 2 }
    ],
    subtotal: 13.25,
    tax: 1.06,
    total: 14.31,
    paymentMethod: "Credit Card",
    status: "Completed"
  },
  {
    orderId: "ORD1008",
    customerId: ObjectId(),
    customerEmail: "william.d@example.com",
    orderDate: new Date("2023-05-14T10:45:00"),
    items: [
      { productId: ObjectId(), name: "Sourdough Bread", price: 5.99, quantity: 1 },
      { productId: ObjectId(), name: "Red Velvet Cake", price: 25.99, quantity: 1 }
    ],
    subtotal: 31.98,
    tax: 2.56,
    total: 34.54,
    paymentMethod: "Credit Card",
    status: "Completed"
  },
  {
    orderId: "ORD1009",
    customerId: ObjectId(),
    customerEmail: "isabella.r@example.com",
    orderDate: new Date("2023-05-19T15:20:00"),
    items: [
      { productId: ObjectId(), name: "Brownie", price: 2.99, quantity: 1 },
      { productId: ObjectId(), name: "Cinnamon Roll", price: 3.75, quantity: 1 },
      { productId: ObjectId(), name: "Coffee", price: 2.00, quantity: 1 }
    ],
    subtotal: 8.74,
    tax: 0.70,
    total: 9.44,
    paymentMethod: "Mobile Payment",
    status: "Completed"
  },
  {
    orderId: "ORD1010",
    customerId: ObjectId(),
    customerEmail: "benjamin.m@example.com",
    orderDate: new Date("2023-05-17T09:00:00"),
    items: [
      { productId: ObjectId(), name: "Almond Croissant", price: 3.50, quantity: 2 },
      { productId: ObjectId(), name: "Tiramisu", price: 4.50, quantity: 1 }
    ],
    subtotal: 11.50,
    tax: 0.92,
    total: 12.42,
    paymentMethod: "Credit Card",
    status: "Completed"
  }
]);

db.employees.insertMany([
  {
    firstName: "Sarah",
    lastName: "Wilson",
    position: "Head Baker",
    email: "sarah.w@bakery.com",
    phone: "555-0201",
    hireDate: new Date("2018-06-10"),
    salary: 52000,
    shifts: ["Monday", "Tuesday", "Wednesday", "Friday"],
    skills: ["Bread Making", "Pastry", "Cake Decorating"]
  },
  {
    firstName: "Michael",
    lastName: "Taylor",
    position: "Baker",
    email: "michael.t@bakery.com",
    phone: "555-0202",
    hireDate: new Date("2020-03-15"),
    salary: 42000,
    shifts: ["Wednesday", "Thursday", "Friday", "Saturday"],
    skills: ["Bread Making", "Pastry"]
  },
  {
    firstName: "Emily",
    lastName: "Anderson",
    position: "Pastry Chef",
    email: "emily.a@bakery.com",
    phone: "555-0203",
    hireDate: new Date("2019-08-22"),
    salary: 48000,
    shifts: ["Tuesday", "Wednesday", "Thursday", "Saturday"],
    skills: ["Pastry", "Cake Decorating", "Desserts"]
  },
  {
    firstName: "David",
    lastName: "Thomas",
    position: "Cashier",
    email: "david.t@bakery.com",
    phone: "555-0204",
    hireDate: new Date("2021-01-05"),
    salary: 32000,
    shifts: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    skills: ["Customer Service", "POS Systems"]
  },
  {
    firstName: "Jessica",
    lastName: "Jackson",
    position: "Cashier",
    email: "jessica.j@bakery.com",
    phone: "555-0205",
    hireDate: new Date("2022-05-18"),
    salary: 30000,
    shifts: ["Monday", "Wednesday", "Friday", "Sunday"],
    skills: ["Customer Service", "POS Systems"]
  },
  {
    firstName: "Daniel",
    lastName: "White",
    position: "Baker's Assistant",
    email: "daniel.w@bakery.com",
    phone: "555-0206",
    hireDate: new Date("2023-02-10"),
    salary: 28000,
    shifts: ["Tuesday", "Thursday", "Saturday", "Sunday"],
    skills: ["Dough Preparation", "Cleaning"]
  },
  {
    firstName: "Jennifer",
    lastName: "Harris",
    position: "Pastry Chef",
    email: "jennifer.h@bakery.com",
    phone: "555-0207",
    hireDate: new Date("2020-11-15"),
    salary: 45000,
    shifts: ["Monday", "Wednesday", "Friday", "Sunday"],
    skills: ["Pastry", "Chocolate Work"]
  },
  {
    firstName: "Christopher",
    lastName: "Martin",
    position: "Delivery Driver",
    email: "chris.m@bakery.com",
    phone: "555-0208",
    hireDate: new Date("2021-07-20"),
    salary: 35000,
    shifts: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    skills: ["Driving", "Customer Service"]
  },
  {
    firstName: "Amanda",
    lastName: "Thompson",
    position: "Manager",
    email: "amanda.t@bakery.com",
    phone: "555-0209",
    hireDate: new Date("2017-04-05"),
    salary: 60000,
    shifts: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    skills: ["Management", "Scheduling", "Inventory"]
  },
  {
    firstName: "Matthew",
    lastName: "Garcia",
    position: "Baker",
    email: "matthew.g@bakery.com",
    phone: "555-0210",
    hireDate: new Date("2022-09-12"),
    salary: 40000,
    shifts: ["Thursday", "Friday", "Saturday", "Sunday"],
    skills: ["Bread Making", "Pastry"]
  }
]);

db.suppliers.insertMany([
  {
    name: "Springfield Flour Co.",
    contactPerson: "Robert Johnson",
    email: "robert@springfieldflour.com",
    phone: "555-0301",
    productsSupplied: ["flour", "whole wheat flour", "bread flour"],
    deliveryDays: ["Monday", "Wednesday", "Friday"],
    lastDelivery: new Date("2023-05-17"),
    contractStart: new Date("2020-01-15")
  },
  {
    name: "Midwest Dairy",
    contactPerson: "Susan Miller",
    email: "susan@midwestdairy.com",
    phone: "555-0302",
    productsSupplied: ["butter", "milk", "cream", "cheese"],
    deliveryDays: ["Tuesday", "Thursday"],
    lastDelivery: new Date("2023-05-18"),
    contractStart: new Date("2019-05-22")
  },
  {
    name: "Sweet Sugar Inc.",
    contactPerson: "Thomas Davis",
    email: "thomas@sweetsugar.com",
    phone: "555-0303",
    productsSupplied: ["sugar", "brown sugar", "powdered sugar"],
    deliveryDays: ["Monday", "Thursday"],
    lastDelivery: new Date("2023-05-15"),
    contractStart: new Date("2021-03-10")
  },
  {
    name: "Chocolate Delights",
    contactPerson: "Lisa Rodriguez",
    email: "lisa@chocolatedelights.com",
    phone: "555-0304",
    productsSupplied: ["chocolate chips", "cocoa powder", "dark chocolate"],
    deliveryDays: ["Wednesday"],
    lastDelivery: new Date("2023-05-17"),
    contractStart: new Date("2020-11-05")
  },
  {
    name: "Fresh Eggs Farm",
    contactPerson: "James Wilson",
    email: "james@fresheggs.com",
    phone: "555-0305",
    productsSupplied: ["eggs"],
    deliveryDays: ["Monday", "Wednesday", "Friday"],
    lastDelivery: new Date("2023-05-19"),
    contractStart: new Date("2018-07-18")
  },
  {
    name: "Vanilla Valley",
    contactPerson: "Patricia Brown",
    email: "patricia@vanillavalley.com",
    phone: "555-0306",
    productsSupplied: ["vanilla extract", "vanilla beans"],
    deliveryDays: ["Tuesday"],
    lastDelivery: new Date("2023-05-16"),
    contractStart: new Date("2021-01-30")
  },
  {
    name: "Berry Farms",
    contactPerson: "Daniel Taylor",
    email: "daniel@berryfarms.com",
    phone: "555-0307",
    productsSupplied: ["blueberries", "strawberries", "raspberries"],
    deliveryDays: ["Monday", "Thursday"],
    lastDelivery: new Date("2023-05-18"),
    contractStart: new Date("2019-09-12")
  },
  {
    name: "Spice World",
    contactPerson: "Nancy Anderson",
    email: "nancy@spiceworld.com",
    phone: "555-0308",
    productsSupplied: ["cinnamon", "nutmeg", "ginger", "cloves"],
    deliveryDays: ["Friday"],
    lastDelivery: new Date("2023-05-19"),
    contractStart: new Date("2020-04-25")
  },
  {
    name: "Almond Grove",
    contactPerson: "Kevin Harris",
    email: "kevin@almondgrove.com",
    phone: "555-0309",
    productsSupplied: ["almonds", "almond paste", "sliced almonds"],
    deliveryDays: ["Wednesday"],
    lastDelivery: new Date("2023-05-17"),
    contractStart: new Date("2021-02-14")
  },
  {
    name: "Coffee Bean Co.",
    contactPerson: "Jessica Martinez",
    email: "jessica@coffeebean.com",
    phone: "555-0310",
    productsSupplied: ["coffee beans", "ground coffee"],
    deliveryDays: ["Tuesday", "Friday"],
    lastDelivery: new Date("2023-05-16"),
    contractStart: new Date("2017-12-03")
  }
]);
