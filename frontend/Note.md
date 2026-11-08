# ENG SUPPLY – Frontend Folders

## 1. assets/
**العربي:** مجلد الأصول، يُستخدم لتخزين الصور والشعارات والأيقونات والخطوط والملفات الثابتة المستخدمة في الموقع.

**English:** Stores images, logos, icons, fonts, and other static resources used throughout the website.

## 2. components/
**العربي:** مجلد المكونات، يحتوي على عناصر واجهة قابلة لإعادة الاستخدام في أكثر من صفحة، مثل شريط التنقل وبطاقات المنتجات والأزرار.

**English:** Contains reusable UI components shared across multiple pages, such as Navbar, Product Cards, and Buttons.

## 3. pages/
**العربي:** مجلد الصفحات، يحتوي على الصفحات الرئيسية للموقع، مثل الصفحة الرئيسية وصفحة المنتجات وتفاصيل المنتج وتسجيل الدخول.

**English:** Contains the main website pages, such as Home, Products, Product Details, and Login.

## 4. styles/
**العربي:** مجلد التنسيقات، يحتوي على ملفات CSS المسؤولة عن تصميم الموقع، والألوان والخطوط وتنسيقات الصفحات والاستجابة لمختلف أحجام الشاشات.

**English:** Contains CSS files responsible for website styling, colors, typography, page layouts, and responsive design.

## 5. i18n/
**العربي:** مجلد تعدد اللغات، مسؤول عن إعداد وإدارة اللغات والترجمات في الموقع، ويدعم العربية والإنجليزية مع تغيير اتجاه الصفحة تلقائياً.

**English:** Manages website internationalization and translations, supporting Arabic and English with automatic RTL/LTR direction switching.

### Translation Subfolders

- **locales/ar/** – ملفات الترجمة العربية / Arabic translation files.
- **locales/en/** – ملفات الترجمة الإنجليزية / English translation files.

## layouts

هذا المجلد رح يحتوي الهيكل العام للموقع، مثل 
Navbar وFooter 
وترتيب محتوى الصفحات.

## 6. hooks/

**العربي:** مجلد الـ Hooks المخصصة، يحتوي على وظائف React قابلة لإعادة الاستخدام لإدارة منطق التطبيق، مثل جلب البيانات من الخادم، وإدارة السلة، ومتابعة حالة تسجيل الدخول.

**English:** Contains custom React Hooks for reusable application logic, such as fetching data from the server, managing the shopping cart, and tracking authentication state.

## 7. services/

**العربي:** مجلد الخدمات، يحتوي على الملفات المسؤولة عن التواصل مع الـ Backend وواجهات API، مثل جلب المنتجات، وإرسال الطلبات، وتسجيل الدخول، والتعامل مع البيانات.

**English:** Contains service modules responsible for communicating with the backend and APIs, such as fetching products, submitting orders, handling login, and managing data.

## 8. utils/

**العربي:** مجلد الأدوات المساعدة، يحتوي على دوال عامة قابلة لإعادة الاستخدام في أجزاء مختلفة من المشروع، مثل تنسيق الأسعار بالدينار الأردني، وتنسيق التواريخ، والتحقق من صحة البيانات.

**English:** Contains reusable utility functions used across different parts of the application, such as formatting prices in Jordanian Dinars, formatting dates, and validating data.

## 9. context/

**العربي:** مجلد إدارة الحالة العامة، يُستخدم لمشاركة البيانات والحالات بين مكونات React المختلفة دون الحاجة إلى تمرير البيانات يدوياً بين المكونات، مثل بيانات المستخدم وسلة المشتريات.

**English:** Manages global application state and shares data across different React components without manually passing props, such as user information and shopping cart data.

## 10. constants/

**العربي:** مجلد الثوابت، يحتوي على القيم الثابتة المستخدمة في أجزاء مختلفة من المشروع، مثل أسماء التصنيفات، وحالات الطلبات، والعملة، واللغات المدعومة.

**English:** Stores constant values used across different parts of the application, such as product categories, order statuses, currency, and supported languages.

## 11. routes/

**العربي:** مجلد المسارات، مسؤول عن تنظيم التنقل بين صفحات الموقع وتحديد المسار الذي تظهر عنده كل صفحة، مثل الرئيسية والمنتجات والسلة وتسجيل الدخول.

**English:** Organizes frontend navigation and defines the paths used to display each website page, such as Home, Products, Cart, and Login.

## 12. config/

**العربي:** مجلد الإعدادات، يحتوي على ملفات إعدادات الواجهة الأمامية، مثل عنوان الـ API وإعدادات الاتصال بالـ Backend والإعدادات العامة للتطبيق.

**English:** Stores frontend configuration files, such as the API base URL, backend connection settings, and general application settings.

## 13. validators/

**العربي:** مجلد التحقق من البيانات، يحتوي على قواعد ووظائف للتحقق من صحة البيانات التي يدخلها المستخدم، مثل البريد الإلكتروني ورقم الهاتف وكلمات المرور وبيانات الطلبات.

**English:** Contains validation rules and functions for checking user input, such as email addresses, phone numbers, passwords, and order information.