# Общо описание
Базата данни BakeryShop е проектирана за управление на всички аспекти на хлебарски бизнес. Тя предоставя цялостно решение за:

Управление на продуктовата гама

Проследяване на продажбите и поръчките

Управление на клиентски отношения

Администриране на персонала

Снабдяване с суровини

Базата е създадена за MongoDB и използва NoSQL подход за съхранение на данните.

# Колекции и структура
# 1. Продукти (products)
Съхранява информация за всички изделия в хлебарницата.

# Структура на документи:

javascript
{
  name: String,          // Име на продукта
  category: String,      // Категория (например "Хляб", "Сладкиши")
  price: Number,         // Продажна цена
  cost: Number,          // Производствена цена
  ingredients: [String], // Списък със съставки
  isAvailable: Boolean,  // Дали е в наличност
  dailyStock: Number,    // Количество в наличност
  popularity: Number,    // Популярност (1-5)
  lastRestock: Date      // Дата на последно доставяне
}
# 2. Клиенти (customers)
Съхранява информация за клиентите и техните предпочитания.

# Структура на документи:

javascript
{
  firstName: String,     // Собствено име
  lastName: String,      // Фамилия
  email: String,         // Имейл
  phone: String,         // Телефон
  joinDate: Date,        // Дата на регистрация
  loyaltyPoints: Number, // Точки от лоялна програма
  favoriteItems: [String], // Любими продукти
  lastVisit: Date,       // Дата на последно посещение
  address: {             // Адрес
    street: String,
    city: String,
    state: String,
    zip: String
  }
}
# 3. Поръчки (orders)
Записва всички клиентски поръчки.

# Структура на документи:

javascript
{
  orderId: String,       // Уникален идентификатор
  customerId: ObjectId,  // Референция към клиент
  customerEmail: String, // Имейл на клиента
  orderDate: Date,       // Дата на поръчката
  items: [{              // Артикули в поръчката
    productId: ObjectId,
    name: String,
    price: Number,
    quantity: Number
  }],
  subtotal: Number,      // Междинна сума
  tax: Number,           // Данък
  total: Number,         // Обща сума
  paymentMethod: String, // Начин на плащане
  status: String         // Статус на поръчката
}
# 4. Служители (employees)
Управлява информацията за персонала.

# Структура на документи:

javascript
{
  firstName: String,     // Собствено име
  lastName: String,      // Фамилия
  position: String,      // Длъжност
  email: String,         // Работен имейл
  phone: String,         // Телефон
  hireDate: Date,        // Дата на назначаване
  salary: Number,        // Годишна заплата
  shifts: [String],      // График на работа
  skills: [String]       // Умения
}
# 5. Доставчици (suppliers)
Проследява доставчиците на суровини.

# Структура на документи:

javascript
{
  name: String,          // Име на доставчика
  contactPerson: String, // Лице за контакт
  email: String,         // Имейл
  phone: String,         // Телефон
  productsSupplied: [String], // Доставяни продукти
  deliveryDays: [String], // Дни за доставка
  lastDelivery: Date,    // Дата на последна доставка
  contractStart: Date    // Начало на договор
}
# Инструкции за инсталация и стартиране
# Предварителни изисквания
Инсталиран MongoDB сървър (версия 4.4 или по-нова)

MongoDB shell или MongoDB Compass за взаимодействие

# Стъпки за инсталация
# Стартиране на MongoDB сървър:

mongod

# Създаване на базата данни:

Отворете MongoDB shell:


mongo

Създайте базата данни и колекциите:

use BakeryShop

Изпълнете скрипта за инициализация (insert.js):

load('insert.js')

#Проверка на инсталацията:


show collections  (Трябва да покаже 5 колекции)
db.products.count()   (Трябва да върне 10)

# Алтернативна инсталация с MongoDB Compass
Отворете MongoDB Compass

Свържете се към вашия MongoDB сървър

Създайте нова база данни "BakeryShop"

Създайте 5-те колекции

Импортирайте примерните данни от JSON файлове

# Примерни заявки
За да започнете работа с базата данни:

Намерете всички налични продукти:

db.products.find({ isAvailable: true })

Намерете поръчки за днес:

db.orders.find({ 
  orderDate: { 
    $gte: new Date(new Date().setHours(0,0,0,0)) 
  } 
})
Намерете служители със заплата над 40000:

db.employees.find({ salary: { $gt: 40000 } })
