(function () {
  const STORAGE_KEYS = {
    users: 'ip_users',
    currentUser: 'ip_current_user',
    categories: 'ip_categories',
    products: 'ip_products',
    orders: 'ip_orders',
    suppliers: 'ip_suppliers',
    stock: 'ip_stock',
    deals: 'ip_deals',
    staff: 'ip_staff'
  };

  const DEFAULT_USERS = [
    { id: '1', name: 'Ahsan', username: 'waiter1', password: 'pass123', role: 'Waiter', contact: '0300-1111111', address: 'Main Branch' },
    { id: '1', name: 'ali', username: 'waiter2', password: 'pass123', role: 'Waiter', contact: '0300-1111111', address: 'Main Branch' },
    { id: '1', name: 'musa', username: 'waiter3', password: 'pass123', role: 'Waiter', contact: '0300-1111111', address: 'Main Branch' },
    { id: '2', name: 'Sara', username: 'cashier1', password: 'pass123', role: 'Cashier', contact: '0300-2222222', address: 'Counter 1' },
    { id: '2', name: 'Husnain', username: 'manager', password: 'pass123', role: 'Manager', contact: '0300-3333333', address: 'HQ' }
  ];

  const DEFAULT_CATEGORIES = [
    { id: '1', name: '2 Small cup Scoop' },
    { id: '2', name: '3 Medium Cup Scoop ' },
    { id: '3', name: '4 Large Cup Scoop' },
    { id: '4', name: '6 Half Cup Scoops'},
    { id: '5', name: '12 Full Cup Scoops' },
    { id: '6', name: ' Ice Cream Cones' },
    { id: '7', name: 'Ice Shakes'},
    { id: '8', name: 'Cold coffees' },
    { id: '9', name: 'Hot coffees' },
    { id: '10', name: 'Fruit Shakes' },
    { id: '11', name: 'Ice Place Special' },
    { id: '12', name: 'Extra Topping' }
  ];

  const DEFAULT_PRODUCTS = [
    { id: '1', name: 'Small Fresh Cone', price: 80, categoryId: '6'  },
    { id: '2', name: 'Large Fresh Cone', price: 100, categoryId: '6'  },
    { id: '3', name: 'Small fresh Cup', price: 100, categoryId: '6' },
    { id: '4', name: 'Large Fresh Cup', price: 150, categoryId: '6'  },
    { id: '5', name: 'Choco crunch Cone', price: 150, categoryId: '6'  },
    { id: '6', name: 'Scoop Cone', price: 120, categoryId: '6' },
    { id: '7', name: 'Special Dip Cone', price: 180, categoryId: '6'  },
    { id: '8', name: 'Special Caramel Crunch Cone', price: 120, categoryId: '6' },
    { id: '9', name: 'HL Fresh Ice Cream', price: 280, categoryId: '6' },
    { id: '10', name: 'L Fresh Ice Cream', price: 550, categoryId: '6' },
    { id: '11', name: 'Pista Shake', price: 420, categoryId: '7' },
    { id: '12', name: 'fruiti Shake', price: 420, categoryId: '7' },
    { id: '13', name: 'Mango Shake', price: 420, categoryId: '7' },
    { id: '14', name: 'Strawberry Shake', price: 420, categoryId: '7' },
    { id: '15', name: 'Vanila Shake', price: 420, categoryId: '7' },
    { id: '16', name: 'Coconut Shake', price: 420, categoryId: '7' },
    { id: '17', name: 'Chocolate Shake', price: 420, categoryId: '7' },
    { id: '18', name: 'Special Khoya Khajur Shake', price: 450, categoryId: '7' },
    { id: '19', name: 'Chocolate Cold Coffee', price: 420, categoryId: '8' },
    { id: '20', name: 'Vanila  Cold Coffee', price: 420, categoryId: '8' },
    { id: '21', name: 'Caramel  Cold Coffee', price: 420, categoryId: '8' },
    { id: '22', name: 'Milki  hot Coffee', price: 200, categoryId: '9' },
    { id: '23', name: 'Creami  hot Coffee', price: 200, categoryId: '9' },
    { id: '24', name: 'Chocolate  hot Coffee', price: 200, categoryId: '9' },
    { id: '25', name: 'Caramel  hot Coffee', price: 200, categoryId: '9' },
    { id: '26', name: 'Vanila  hot Coffee', price: 200, categoryId: '9' },
    { id: '27', name: 'Black  hot Coffee', price: 150, categoryId: '9' },
    { id: '28', name: 'Mango Fruit Shake', price: 200, categoryId: '10' },
    { id: '29', name: 'Apple Fruit Shake', price: 200, categoryId: '10' },
    { id: '30', name: 'Banana Fruit Shake', price: 200, categoryId: '10' },
    { id: '31', name: 'Banana, Apple Fruit Shake', price: 200, categoryId: '10' },
    { id: '32', name: 'Peach Fruit Shake', price: 200, categoryId: '10' },
    { id: '33', name: 'Strawberry Fruit Shake', price: 200, categoryId: '10' },
    { id: '34', name: 'PineApple Fruit Shake', price: 300, categoryId: '10' },
    { id: '35', name: 'Mix Fruit Shake', price: 420, categoryId: '10' },
    { id: '36', name: 'Fruit Kuktus Shake', price: 420, categoryId: '10' },
    { id: '37', name: 'Khajur Baadam  Shake', price: 420, categoryId: '10' },
    { id: '38', name: 'Baadam  Shake', price: 420, categoryId: '10' },
    { id: '39', name: 'Chocolate Oreo Cone', price: 150, categoryId: '11' },
    { id: '40', name: 'Almond & Peanut Cone', price: 200, categoryId: '11' },
    { id: '41', name: 'Special Fruiti Cone', price: 200, categoryId: '11' },
    { id: '42', name: 'Special Fruiti Cup', price: 300, categoryId: '11' },
    { id: '43', name: 'Extra Topping Per Cup', price: 30, categoryId: '12' },
    { id: '43', name: 'ET Half Pack Cup', price: 50, categoryId: '12' },
    { id: '43', name: 'ET Full Pack Cup', price: 80, categoryId: '12' },
  ];

  const FLAVOR_CATALOG = ['Kulfa', 'Pista Badam', 'Tutti Frutti', 'Mango', 'Strawberry', 'Vanilla', 'Caramel', 'Coconut', 'Chocolate Chip', 'Coffee', 'Oreo', 'Chocolate Fig', 'Blueberry', 'Pineapple', 'Praline', 'Chocolate'];
  const INGREDIENT_CATALOG = [
    ...FLAVOR_CATALOG.map((name) => ({ id: `flavor-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, name, unit: 'Litres' })),
    { id: 'super-waffle-cone', name: 'Super Waffle Cone', unit: 'Count' },
    { id: 'super-cone', name: 'Super Cone', unit: 'Count' },
    { id: 'chocolate-syrup', name: 'Chocolate Syrup', unit: 'Litres' },
    { id: 'dipping-chocolate', name: 'Dipping Chocolate', unit: 'Litres' },
    { id: 'small-cup', name: 'Small Cup', unit: 'Count' },
    { id: 'half-litre-cup', name: 'Half Litre Cup', unit: 'Count' },
    { id: 'one-litre-cup', name: 'One Litre Cup', unit: 'Count' },
    { id: 'one-point-five-litre-cup', name: '1.5 Litre Cup', unit: 'Count' }
  ];
  const SCOOP_CUP_PRICING = {
    '2': { displayName: '2 Scoop Cup', capacity: 2, price: 220 },
    '3': { displayName: '3 Scoop Cup', capacity: 3, price: 300 },
    '4': { displayName: '4 Scoop Cup', capacity: 4, price: 420 },
    '6': { displayName: '6 Scoop Cup', capacity: 6, price: 650 },
    '12': { displayName: '12 Scoop Cup', capacity: 12, price: 1100 }
  };
  const FLAVOR_DETAILS = {
    'Kulfa': { urdu: 'قلفہ', image: 'src/images/pista.jpg' },
    'Pista Badam': { urdu: 'پستہ بادام', image: 'src/images/pista%20badam.jpg' },
    'Tutti Frutti': { urdu: 'ٹوٹی فروٹی', image: 'src/images/tutti%20fruiti.jpg' },
    'Mango': { urdu: 'آم', image: 'src/images/mango.jpg' },
    'Strawberry': { urdu: 'اسٹرابیری', image: 'src/images/strawberry.jpg' },
    'Vanilla': { urdu: 'ونیلا', image: 'src/images/vanila.jpg' },
    'Caramel': { urdu: 'کیریمل', image: 'src/images/caramel.jpg' },
    'Coconut': { urdu: 'ناریل', image: 'src/images/coconut.jpg' },
    'Chocolate Chip': { urdu: 'چاکلیٹ چِپ', image: 'src/images/chocolate%20chip.jpg' },
    'Coffee': { urdu: 'کافی', image: 'src/images/coffee.jpg' },
    'Oreo': { urdu: 'اوريو', image: 'src/images/oreo.jpg' },
    'Chocolate Fig': { urdu: 'چاکلیٹ انجیر', image: 'src/images/chocolate%20fig.jpg' },
    'Blueberry': { urdu: 'بلو بیری', image: 'src/images/blueberry.jpg' },
    'Pineapple': { urdu: 'انناس', image: 'src/images/pineapple.jpg' },
    'Praline': { urdu: 'پرالین', image: 'src/images/praline.jpg' },
    'Chocolate': { urdu: 'چاکلیٹ', image: 'src/images/chocolate.jpg' }
  };
  const PRODUCT_DETAILS = {
    'Small Fresh Cone': { urdu: 'چھوٹا تازہ کون', image: 'src/images/Fresh-cone/fresh-cone1.jpg' },
    'Large Fresh Cone': { urdu: 'بڑا تازہ کون', image: 'src/images/Fresh-cone/fresh-cone.jpg' },
    'Small fresh Cup': { urdu: 'چھوٹا تازہ کپ', image: 'src/images/Fresh-cone/fresh-cup.webp' },
    'Large Fresh Cup': { urdu: 'بڑا تازہ کپ', image: 'src/images/Fresh-cone/fresh-cup1.jpg' },
    'Choco crunch Cone': { urdu: 'چوکو کرنچ کون', image: 'src/images/Fresh-cone/crunch-cone.jpg' },
    'Scoop Cone': { urdu: 'اسکوپ کون', image: 'src/images/Fresh-cone/scoop-cone.jpg' },
    'Special Dip Cone': { urdu: 'اسپیشل ڈپ کون', image: 'src/images/Fresh-cone/special-dip-cone.jpg' },
    'Special Caramel Crunch Cone': { urdu: 'اسپیشل کیریمل کرنچ کون', image: 'src/images/Fresh-cone/caramel-cone.jpg' },
    'HL Fresh Ice Cream': { urdu: 'ایچ ایل فریش آئس کریم', image: 'src/images/Fresh-cone/hl-ic.jpg' },
    'L Fresh Ice Cream': { urdu: 'ایف ایل فریش آئس کریم', image: 'src/images/Fresh-cone/fl-ic.jpg' },
    'Pista Shake': { urdu: 'پستہ شیک', image: 'src/images/shakes/pista.jpg' },
    'fruiti Shake': { urdu: 'فروٹی شیک', image: 'src/images/shakes/fruiti.jpg' },
    'Mango Shake': { urdu: 'آم کا شیک', image: 'src/images/shakes/mango.jpg' },
    'Strawberry Shake': { urdu: 'اسٹرابیری شیک', image: 'src/images/shakes/strawberry.jpg' },
    'Vanila Shake': { urdu: 'ونیلا شیک', image: 'src/images/shakes/vanila.jpg' },
    'Coconut Shake': { urdu: 'ناریل کا شیک', image: 'src/images/shakes/coconut.jpg' },
    'Chocolate Shake': { urdu: 'چاکلیٹ شیک', image: 'src/images/shakes/chocolate.jpg' },
    'Special Khoya Khajur Shake': { urdu: 'اسپیشل کھویا کھجور شیک', image: 'src/images/shakes/khoya-khajur.jpg' },
    'Chocolate Cold Coffee': { urdu: 'چاکلیٹ کولڈ کافی', image: 'src/images/cold-coffee/chocolate.jpg' },
    'Vanila  Cold Coffee': { urdu: 'وینیلا کولڈ کافی', image: 'src/images/cold-coffee/vanila.jpg' },
    'Caramel  Cold Coffee': { urdu: 'کیرامل کولڈ کافی', image: 'src/images/cold-coffee/caramel.jpg' },
    'Milki  hot Coffee': { urdu: 'ملکی ہاٹ کافی', image: 'src/images/hold-coffee/milki.jpg' },
    'Creami  hot Coffee': { urdu: 'کریمی ہاٹ کافی', image: 'src/images/hold-coffee/creami.jpg' },
    'Chocolate  hot Coffee': { urdu: 'چاکلیٹ ہاٹ کافی', image: 'src/images/hold-coffee/chocolate.jpg' },
    'Caramel  hot Coffee': { urdu: 'کیرامل ہاٹ کافی', image: 'src/images/hold-coffee/caramel.jpg' },
    'Vanila  hot Coffee': { urdu: 'ونیلا ہاٹ کافی', image: 'src/images/hold-coffee/vanila.jpg' },
    'Black  hot Coffee': { urdu: 'کالی گرم کافی', image: 'src/images/hold-coffee/black.jpg' },
    'Mango Fruit Shake': { urdu: 'آم  شیک', image: 'src/images/shakes/mango.jpg' },
    'Apple Fruit Shake': { urdu: 'سیب  شیک', image: 'src/images/shakes/apple.jpg' },
    'Banana Fruit Shake': { urdu: 'کیلے  شیک', image: 'src/images/shakes/banana.jpg' },
    'Banana, Apple Fruit Shake': { urdu: 'کیلے , سیب  فروٹ شیک', image: 'src/images/shakes/bana-apple.jpg' },
    'Peach Fruit Shake': { urdu: 'آڑو شیک', image: 'src/images/shakes/peach.jpg' },
    'Strawberry Fruit Shake': { urdu: 'اسٹرابیری فروٹ شیک', image: 'src/images/shakes/strawberry.jpg' },
    'PineApple Fruit Shake': { urdu: 'انناس  فروٹ شیک', image: 'src/images/shakes/pineapple.jpg' },
    'Mix Fruit Shake': { urdu: 'مکس فروٹ شیک', image: 'src/images/shakes/mix.jpg' },
    'Fruit Kuktus Shake': { urdu: 'فروٹ کیکٹس شیک', image: 'src/images/shakes/kuktus.jpg' },
    'Khajur Baadam  Shake': { urdu: 'کھجور بادام شیک', image: 'src/images/shakes/badam.jpg' },
    'Baadam  Shake': { urdu: 'بادام شیک', image: 'src/images/shakes/badm.jpg' },
    'Chocolate Oreo Cone': { urdu: 'چاکلیٹ اوریو کون', image: 'src/images/special/oreo.jpg' },
    'Almond & Peanut Cone': { urdu: 'بادام, مونگ پھلی والا کون', image: 'src/images/special/peanut.jpg' },
    'Special Fruiti Cone': { urdu: 'اسپیشل فروٹی کون', image: 'src/images/special/fruiti.jpg' },
    'Special Fruiti Cup': { urdu: 'اسپیشل فروٹی کپ', image: 'src/images/special/fruitiCup.jpg' },
    'Extra Topping Per Cup': { urdu: '', image: 'src/images/special/a.png' },
    'ET Half Pack Cup': { urdu: '', image: 'src/images/special/b.jpg' },
    'ET Full Pack Cup': { urdu: '', image: 'src/images/special/c.jpg' }
   
  };
  const soundSlots = (names) => names.reduce((slots, name) => {
    slots[name] = '';
    return slots;
  }, {});
  const SOUND_ENTITY_NAMES = [...FLAVOR_CATALOG, ...DEFAULT_PRODUCTS.map((product) => product.name), ...Object.values(SCOOP_CUP_PRICING).map((cup) => cup.displayName)];
  const SOUND_ENTITY_INDEX = new Map();
  SOUND_ENTITY_NAMES.forEach((name, index) => {
    if (!SOUND_ENTITY_INDEX.has(name)) SOUND_ENTITY_INDEX.set(name, index);
  });
  let nextSoundEntityIndex = SOUND_ENTITY_NAMES.length;
  // Replace any action/entity slot with its own file URL; empty slots use distinct generated tones.
  const SOUND_ASSETS = {
    click: '',
    focus: '',
    success: '',
    error: '',
    flavorAdd: { ...soundSlots(FLAVOR_CATALOG), 'Pista': 'src/sound/one%20pista%20add.mp3' },
    flavorRemove: { ...soundSlots(FLAVOR_CATALOG), 'Pista': 'src/sound/one%20pista%20remove.mp3' },
    productAdd: { ...soundSlots([...DEFAULT_PRODUCTS.map((product) => product.name), ...Object.values(SCOOP_CUP_PRICING).map((cup) => cup.displayName)]) },
    productIncrease: { ...soundSlots([...DEFAULT_PRODUCTS.map((product) => product.name), ...Object.values(SCOOP_CUP_PRICING).map((cup) => cup.displayName)]) },
    productDecrease: { ...soundSlots([...DEFAULT_PRODUCTS.map((product) => product.name), ...Object.values(SCOOP_CUP_PRICING).map((cup) => cup.displayName)]) },
    productRemove: { ...soundSlots([...DEFAULT_PRODUCTS.map((product) => product.name), ...Object.values(SCOOP_CUP_PRICING).map((cup) => cup.displayName)]) }
  };

  function uid(prefix) {
    return prefix + '-' + Math.random().toString(36).slice(2, 10);
  }

  function getJSON(key, fallback) {
    const data = localStorage.getItem(key);
    if (!data) return fallback;
    try { return JSON.parse(data); } catch (error) { return fallback; }
  }

  function saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getCurrentUser() {
    return getJSON(STORAGE_KEYS.currentUser, null);
  }

  function setCurrentUser(user) {
    saveJSON(STORAGE_KEYS.currentUser, user);
  }

  function getRoleDashboard(role) {
    const normalized = (role || '').toLowerCase();
    if (normalized === 'waiter') return 'waiter.html';
    if (normalized === 'cashier') return 'cashier.html';
    return 'manager.html';
  }

  function requireRole(requiredRoles) {
    const user = getCurrentUser();
    if (!user) {
      window.location.href = 'index.html';
      return null;
    }
    const allowed = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];
    if (!allowed.includes(user.role)) {
      window.location.href = getRoleDashboard(user.role);
      return null;
    }
    return user;
  }

  function initializeStorage() {
    if (!getJSON(STORAGE_KEYS.users, null)) {
      saveJSON(STORAGE_KEYS.users, DEFAULT_USERS);
    }
    if (!getJSON(STORAGE_KEYS.categories, null)) {
      saveJSON(STORAGE_KEYS.categories, DEFAULT_CATEGORIES);
    }
    if (!getJSON(STORAGE_KEYS.products, null)) {
      saveJSON(STORAGE_KEYS.products, DEFAULT_PRODUCTS);
    }
    const existingStock = getJSON(STORAGE_KEYS.stock, null);
    if (!existingStock || existingStock.some((entry) => entry.productId) || INGREDIENT_CATALOG.some((ingredient) => !existingStock.some((entry) => entry.ingredientId === ingredient.id))) {
      const previous = Array.isArray(existingStock) ? existingStock : [];
      saveJSON(STORAGE_KEYS.stock, INGREDIENT_CATALOG.map((ingredient) => {
        const old = previous.find((entry) => entry.ingredientId === ingredient.id || entry.productName === ingredient.name || entry.name === ingredient.name);
        return {
          id: ingredient.id,
          ingredientId: ingredient.id,
          name: ingredient.name,
          unit: ingredient.unit,
          quantity: Number(old?.quantity || 0),
          used: Number(old?.used || 0),
          minimumThreshold: Number(old?.minimumThreshold || 5),
          lastUpdated: old?.lastUpdated || new Date().toISOString(),
          history: old?.history || []
        };
      }));
    }
    if (!getJSON(STORAGE_KEYS.suppliers, null)) {
      saveJSON(STORAGE_KEYS.suppliers, [
        { id: 's-1', name: 'Mian Dairy', contact: '0300-5550000', email: 'supplier@example.com', companyName: 'Mian Dairy', productsSupplied: 'Cream, toppings', notes: 'Deliveries every Tuesday' }
      ]);
    }
    if (!getJSON(STORAGE_KEYS.staff, null)) {
      saveJSON(STORAGE_KEYS.staff, DEFAULT_USERS);
    }
    if (!getJSON(STORAGE_KEYS.orders, null)) {
      saveJSON(STORAGE_KEYS.orders, []);
    }
    if (!getJSON(STORAGE_KEYS.deals, null)) {
      saveJSON(STORAGE_KEYS.deals, [
        { id: 'd-1', name: 'Family Combo', price: 850, active: true, items: [{ productId: 'p-4', qty: 2 }, { productId: 'p-7', qty: 1 }] }
      ]);
    }
  }

  function getUsers() { return getJSON(STORAGE_KEYS.users, []); }
  function getDisplayName(value, fallback) {
    const name = String(value ?? '').trim();
    return name && name.toLowerCase() !== 'undefined' && name.toLowerCase() !== 'null' ? name : fallback;
  }

  function getCategories() {
    const categories = getJSON(STORAGE_KEYS.categories, []);
    return Array.isArray(categories) ? categories.map((category) => ({ ...category, name: getDisplayName(category.name, 'Uncategorized') })) : [];
  }
  function getProducts() {
    const products = getJSON(STORAGE_KEYS.products, []);
    return Array.isArray(products) ? products.map((product) => ({ ...product, name: getDisplayName(product.name, 'Unnamed product') })) : [];
  }
  function getOrders() { return getJSON(STORAGE_KEYS.orders, []); }
  function saveOrders(orders) { saveJSON(STORAGE_KEYS.orders, orders); }
  function getSuppliers() { return getJSON(STORAGE_KEYS.suppliers, []); }
  function getStock() { return getJSON(STORAGE_KEYS.stock, []); }
  function saveStock(stock) { saveJSON(STORAGE_KEYS.stock, stock); }
  function getDeals() { return getJSON(STORAGE_KEYS.deals, []); }
  function saveDeals(deals) { saveJSON(STORAGE_KEYS.deals, deals); }
  function getStaff() { return getJSON(STORAGE_KEYS.staff, []); }
  function getIngredients() { return INGREDIENT_CATALOG.map((ingredient) => ({ ...ingredient })); }

  function recordOrderStockUsage(order) {
    // Stock is intentionally manual-only. Keep this API for compatibility with
    // existing payment flows, but never mutate inventory from an order.
    return order;
  }

  function formatCurrency(value) {
    return 'Rs ' + Number(value || 0).toLocaleString('en-PK');
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return dateString;
    return date.toLocaleString('en-PK', { dateStyle: 'medium', timeStyle: 'short' });
  }

  function getProductById(productId) {
    return getProducts().find((product) => product.id === productId) || null;
  }

  function getCategoryById(categoryId) {
    return getCategories().find((category) => category.id === categoryId) || null;
  }

  function getFlavorCatalog() {
    return [...FLAVOR_CATALOG];
  }

  function getFlavorDetails(name) {
    return FLAVOR_DETAILS[name] || { urdu: '', image: '' };
  }

  function getProductDetails(name) {
    return PRODUCT_DETAILS[name] || { urdu: '', image: '' };
  }

  function getScoopCupConfig(categoryOrName) {
    const rawName = typeof categoryOrName === 'string' ? categoryOrName : (categoryOrName && categoryOrName.name) ? categoryOrName.name : '';
    const match = String(rawName || '').match(/(\d+)/);
    if (!match) return null;
    const config = SCOOP_CUP_PRICING[match[1]];
    if (!config) return null;
    return { ...config, categoryName: rawName.trim() };
  }

  function getFlavorSelectionTotal(selection) {
    return Object.values(selection || {}).reduce((sum, qty) => sum + Number(qty || 0), 0);
  }

  function formatFlavorBreakdown(selection) {
    const entries = Object.entries(selection || {}).filter(([, qty]) => Number(qty) > 0);
    return entries.length ? entries.map(([flavor, qty]) => `${flavor} ×${qty}`).join(', ') : 'No flavors selected';
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[character]);
  }

  function computeCartTotals(items) {
    const subtotal = items.reduce((sum, item) => sum + (Number(item.unitPrice || 0) * Number(item.quantity || 0)), 0);
    const discount = 0;
    const total = subtotal - discount;
    return { subtotal, discount, total };
  }

  function showToast(message, type) {
    const existing = document.getElementById('toast-icepalace');
    if (existing) existing.remove();

    const node = document.createElement('div');
    node.id = 'toast-icepalace';
    node.textContent = message;
    node.style.position = 'fixed';
    node.style.right = '20px';
    node.style.bottom = '20px';
    node.style.zIndex = '2000';
    node.style.background = type === 'error' ? '#d93d3d' : '#1e8f5c';
    node.style.color = '#fff';
    node.style.borderRadius = '12px';
    node.style.padding = '12px 16px';
    node.style.fontWeight = '700';
    node.style.boxShadow = '0 12px 20px rgba(20,15,15,0.18)';
    document.body.appendChild(node);
    setTimeout(() => node.remove(), 2200);
  }

  let activeAudio = null;
  let activeAudioContext = null;
  let soundSequence = 0;

  function stopActiveSound() {
    soundSequence += 1;
    if (activeAudio) {
      activeAudio.pause();
      activeAudio = null;
    }
    if (activeAudioContext) {
      const context = activeAudioContext;
      activeAudioContext = null;
      context.close().catch((error) => console.warn('Could not stop the previous sound.', error));
    }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    return soundSequence;
  }

  function playTone(type, entityName, sequence) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      activeAudioContext = ctx;
      let entityIndex = SOUND_ENTITY_INDEX.get(entityName);
      if (entityIndex === undefined) {
        entityIndex = nextSoundEntityIndex;
        nextSoundEntityIndex += 1;
        if (entityName) SOUND_ENTITY_INDEX.set(entityName, entityIndex);
      }
      const entityHash = (entityIndex + 1) * 3;
      const baseFrequency = type === 'success' ? 920 : type === 'error' ? 240 : type === 'flavorAdd' ? 620 : type === 'flavorRemove' ? 340 : type === 'productAdd' ? 760 : type === 'productIncrease' ? 1040 : type === 'productDecrease' ? 430 : type === 'productRemove' ? 520 : 420;
      const notes = [baseFrequency + entityHash, baseFrequency + entityHash + 120];
      notes.forEach((frequency, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startAt = ctx.currentTime + index * 0.15;
        osc.type = 'sine';
        osc.frequency.value = frequency;
        gain.gain.setValueAtTime(0.0001, startAt);
        gain.gain.exponentialRampToValueAtTime(0.045, startAt + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startAt);
        osc.stop(startAt + 0.13);
      });
      setTimeout(() => {
        if (activeAudioContext === ctx && soundSequence === sequence) {
          activeAudioContext = null;
          ctx.close().catch((error) => console.warn('Could not close audio context.', error));
        }
      }, 450);
    } catch (error) {
      console.warn('Audio feedback is unavailable in this browser.', error);
    }
  }

  function playSound(type, entityName) {
    const soundAsset = SOUND_ASSETS[type];
    const soundUrl = typeof soundAsset === 'string' ? soundAsset : soundAsset?.[entityName] || '';
    const sequence = stopActiveSound();
    if (soundUrl) {
      const audio = new Audio(soundUrl);
      activeAudio = audio;
      const useToneFallback = (error) => {
        if (soundSequence !== sequence) return;
        console.warn('Sound playback was blocked or unsupported; using generated feedback instead.', error);
        activeAudio = null;
        playTone(type, entityName, sequence);
      };
      try {
        const playback = audio.play();
        if (playback) playback.catch(useToneFallback);
      } catch (error) {
        useToneFallback(error);
      }
    } else {
      playTone(type, entityName, sequence);
    }
  }

  function beep() {
    playSound('click');
  }

  function updateClock() {
    const node = document.getElementById('live-clock');
    if (!node) return;
    node.textContent = new Date().toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  function setSection(sectionName, menuSelector) {
    document.querySelectorAll('.section-content').forEach((section) => {
      const isActive = section.dataset.section === sectionName;
      section.classList.toggle('active', isActive);
    });
    document.querySelectorAll(menuSelector).forEach((item) => {
      const isActive = item.dataset.section === sectionName;
      item.classList.toggle('active', isActive);
    });
  }

  function getOrderCustomerDisplay(order) {
    if (order.type === 'delivery') {
      return order.customerName || 'Delivery customer';
    }
    if (order.type === 'takeaway') {
      return order.customerName || 'Takeaway';
    }
    return 'Table ' + (order.tableNo || '—');
  }

  function renderOrderList(orders, containerId, filterFn) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const filtered = orders.filter(filterFn || (() => true));
    if (!filtered.length) {
      container.innerHTML = '<div class="empty-state">No orders found.</div>';
      return;
    }

    container.innerHTML = filtered.map((order) => {
      const itemCount = (order.items || []).reduce((sum, item) => sum + Number(item.quantity || 0), 0);
      return `
        <div class="panel" style="margin-bottom: 14px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; flex-wrap:wrap;">
            <div>
              <strong>#${order.id}</strong><br>
              <span class="muted">${getOrderCustomerDisplay(order)} • ${order.type}</span>
            </div>
            <span class="status-badge status-${order.status}">${order.status}</span>
          </div>
          <p class="muted" style="margin: 12px 0 0;">${(order.items || []).map((item) => item.name).join(', ') || 'No items'}<br>Items: ${itemCount} • Total: ${formatCurrency(order.total || 0)}</p>
          <div class="action-row">
            <button class="btn btn-secondary js-view-order" data-order-id="${order.id}">View & Edit</button>
            ${order.status !== 'paid' && order.status !== 'cancelled' ? '<button class="btn btn-danger js-cancel-order" data-order-id="' + order.id + '">Cancel</button>' : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  function openOrderModal(orderId) {
    const order = getOrders().find((entry) => entry.id === orderId);
    if (!order) return;

    const modalBackdrop = document.getElementById('order-modal-backdrop');
    if (!modalBackdrop) return;

    const itemRows = (order.items || []).map((item) => `
      <tr>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${formatCurrency(item.unitPrice)}</td>
        <td>${formatCurrency(item.quantity * item.unitPrice)}</td>
      </tr>
    `).join('') || '<tr><td colspan="4">No items</td></tr>';

    const html = `
      <div class="modal">
        <div class="modal-header">
          <h3>Order #${order.id}</h3>
          <button class="modal-close" type="button" data-close-modal="true">×</button>
        </div>
        <div class="order-form-grid">
          <div class="inline-fields">
            <div><strong>Order Type</strong><div>${order.type}</div></div>
            <div><strong>Status</strong><div><span class="status-badge status-${order.status}">${order.status}</span></div></div>
          </div>
          <div class="inline-fields">
            <div><strong>Customer</strong><div>${getOrderCustomerDisplay(order)}</div></div>
            <div><strong>Submitted</strong><div>${formatDate(order.createdAt)}</div></div>
          </div>
          ${order.type === 'delivery' && order.deliveryDate ? `<div><strong>Delivery date</strong><div>${formatDate(order.deliveryDate).split(',')[0]}</div></div>` : ''}
          ${order.message ? `<div class="message-box"><strong>Optional message</strong><p>${order.message}</p></div>` : ''}
          <table>
            <thead>
              <tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr>
            </thead>
            <tbody>${itemRows}</tbody>
          </table>
          <div>
            <div class="bill-row"><span>Subtotal</span><span>${formatCurrency(order.subtotal || 0)}</span></div>
            <div class="bill-row"><span>Discount</span><span>${formatCurrency(order.discount || 0)}</span></div>
            <div class="bill-row total"><span>Total</span><span>${formatCurrency(order.total || 0)}</span></div>
          </div>
          <div class="action-row">
            <button class="btn btn-secondary js-edit-order-modal" data-order-id="${order.id}">Edit Order</button>
            <button class="btn btn-secondary js-print-order-slip" data-order-id="${escapeHtml(order.id)}" data-slip-type="kitchen">Kitchen Slip</button>
            <button class="btn btn-ghost js-print-order-slip" data-order-id="${escapeHtml(order.id)}" data-slip-type="customer">Customer Slip</button>
            ${order.status !== 'cancelled' && order.status !== 'paid' ? '<button class="btn btn-danger js-cancel-order" data-order-id="' + order.id + '">Cancel</button>' : ''}
            <button class="btn btn-ghost" data-close-modal="true">Close</button>
          </div>
        </div>
      </div>
    `;

    modalBackdrop.innerHTML = html;
    modalBackdrop.classList.add('open');
  }

  function printOrderSlip(orderId, slipType) {
    const order = getOrders().find((entry) => String(entry.id) === String(orderId));
    if (!order) return;
    const printerSettings = getPrinterSettings();
    const orderItems = Array.isArray(order.items) ? order.items : [];
    const isKitchen = slipType === 'kitchen';
    const paperWidth = printerSettings.paperWidth;
    const safeOrderId = escapeHtml(order.id);
    const deliveryCharge = Number(order.deliveryCharge || 0);
    const customerTotal = Number(order.total || 0) + deliveryCharge;
    const itemRows = orderItems.map((item) => {
      const name = escapeHtml(item.name || 'Item');
      const quantity = Number(item.quantity || 0);
      const lineTotal = Number(item.unitPrice || 0) * quantity;
      return `<tr><td>${name}</td><td>${quantity}</td>${isKitchen ? '' : `<td>${formatCurrency(item.unitPrice || 0)}</td><td>${formatCurrency(lineTotal)}</td>`}</tr>`;
    }).join('');
    const brandHeader = isKitchen ? '' : `
      <header class="brand">
      
       <strong> <h1>The Ice Palace</h1> </strong>
        
        <div class="small">Address:Circular Road, near DHQ, Narowal<br> Phone Number: <strong>+92 341 4806671</strong></div>
      </header>`;
    const customerDetails = order.type === 'delivery'
      ? `<div class="info-row"><span>Customer</span><strong>${escapeHtml(order.customerName || 'Guest')}</strong></div>
         <div class="info-row"><span>Phone</span><strong>${escapeHtml(order.contactNumber || '—')}</strong></div>
         <div class="info-row"><span>Delivery address</span><strong>${escapeHtml(order.deliveryAddress || '—')}</strong></div>
         <div class="info-row"><span>Delivery date</span><strong>${escapeHtml(order.deliveryDate ? formatDate(order.deliveryDate).split(',')[0] : '—')}</strong></div>`
      : `<div class="info-row"><span>Customer</span><strong>${escapeHtml(order.customerName || getOrderCustomerDisplay(order) || 'Guest')}</strong></div>
         ${order.type === 'dine-in' && order.tableNo ? `<div class="info-row"><span>Table</span><strong>${escapeHtml(order.tableNo)}</strong></div>` : ''}`;
    const totals = isKitchen ? '' : `
      <section class="totals">
        <div class="row"><span>Subtotal</span><span>${formatCurrency(order.subtotal || 0)}</span></div>
        <div class="row"><span>Discount</span><span>− ${formatCurrency(order.discount || 0)}</span></div>
        ${Number(order.deliveryCharge || 0) ? `<div class="row"><span>Delivery</span><span>${formatCurrency(order.deliveryCharge)}</span></div>` : ''}
        <div class="row grand-total"><strong>Total</strong><strong>${formatCurrency(customerTotal)}</strong></div>
      </section>
      ${order.message ? `<div class="note" style="margin:0px ; border:none; text-aligin:start;"  ><strong>Order Taker:</strong>${escapeHtml(order.message)}</div>` : ''}
      <footer>
        <div class="thanks">Thank you for choosing us!</div>
        <div>Designed &amp; developed by Vasiliuss.com</div>
        <div>Contact Number: +92 344 2005467</div>
      </footer>`;


      
    const slipHtml = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${isKitchen ? 'Kitchen' : 'Customer'} Slip #${safeOrderId}</title>
          <style>
            @page { size: ${paperWidth}mm auto; margin: 0 ;  }
            * { box-sizing: border-box;  margin: 0;
  padding: 0; }
            html, body { width: ${paperWidth}mm; margin: 0 auto; text-align:center; padding: 0; }
body { color: #201b1b; font-family: Arial, sans-serif; font-size: ${isKitchen ? '11' : '9'}pt; }


  .slip {
  width: calc(${paperWidth}mm - 8mm);  
  margin: 0 auto;                        
  text-align: center;
  padding: ${isKitchen ? '2' : '4'}mm 0; 
}

            .kitchen-title { margin: 0 0 2mm; text-align: center; font-size: 13pt; letter-spacing: 1px; }
            .order-id { padding: 2mm 0; border-top: 1px dashed #555; border-bottom: 1px dashed #555; text-align: center; font-size: 12pt; }
            .brand { padding-bottom: 3mm; border-bottom: 2px solid #7b1e3a; text-align: center; }
            .logo { display: grid; width: 11mm; height: 11mm; margin: 0 auto 1mm; place-items: center; border-radius: 50%; background: #7b1e3a; color: white; font-size: 17pt; }
            h1 { margin: 0; color: #7b1e3a; font-size: 17pt; }
            .tagline { margin: 1mm 0; font-size: 8pt; }
            .small { font-size: 8pt; line-height: 1.4; }
            .order-meta { margin: 3mm 0; padding: 2mm; border-radius: 2mm; background: #f7f1ed; }
            .info-row, .row { display: flex; justify-content: space-between; gap: 2mm; margin: 1.5mm 0; }
            .info-row { align-items: flex-start; font-size: 8pt; }
            .info-row strong { max-width: 65%; text-align: right; overflow-wrap: anywhere; }
            .slip-type { margin-top: 2mm; font-size: 8pt; font-weight: bold; text-transform: uppercase; }
            table { width: 100%; margin-top: 2mm; border-collapse: collapse; table-layout: fixed; }
            th, td { padding: 1.8mm 0; border-bottom: 1px dashed #999; text-align: left; vertical-align: top; font-size: ${isKitchen ? '10' : '8'}pt; overflow-wrap: anywhere; }
            th:not(:first-child), td:not(:first-child) { text-align: right; }
            th:first-child, td:first-child { width: ${isKitchen ? '72' : '48'}%; }
            th:nth-child(2), td:nth-child(2) { width: 12%; }
            .totals { margin-top: 3mm; }
            .grand-total { padding-top: 2mm; border-top: 1px solid #222; font-size: 11pt; }
            .note { text-align:start; font-size: 8pt; overflow-wrap: anywhere; }
            footer { margin-top: 2mm;  text-align: center; font-size: 8pt; line-height: 1.5; }
            .thanks { margin-bottom: 1mm; font-size: 9pt; font-weight: bold; }
            @media screen { body { width: ${paperWidth}mm; } .slip { border: 1px solid #ddd; } }
            @media print { .slip { border: 0; } tr, .totals, footer { break-inside: avoid; } }
          </style>
        </head>
        <body>
          <div class="slip"  >
            ${brandHeader}
            ${isKitchen ? '<h2 class="kitchen-title">KITCHEN ORDER</h2>' : ''}
            <div class="order-id">Order ID:<strong>#${safeOrderId}</strong></div>
            ${isKitchen ? '' : `<div class="order-meta">
              <div class="info-row"><span>Order type</span><strong>${escapeHtml(order.type || '—')}</strong></div>
              ${customerDetails}
              <div class="info-row"><span>Order date</span><strong>${escapeHtml(order.createdAt ? formatDate(order.createdAt) : '—')}</strong></div>
            </div>`}
            <div class="slip-type">${isKitchen ? 'Order summary' : 'Order summary'}</div>
            <table>
              <thead><tr><th>Item</th><th>Qty</th>${isKitchen ? '' : '<th>Price</th><th>Total</th>'}</tr></thead>
              <tbody>${itemRows || `<tr><td colspan="${isKitchen ? 2 : 4}">No order items found.</td></tr>`}</tbody>
            </table>
            ${totals}
          </div>
        </body>
      </html>`;

    printReceiptHtml(slipHtml, paperWidth);
  }








  const PRINTER_SETTINGS_KEY = 'ip_printer_settings';

function getPrinterSettings() {
  return getJSON(PRINTER_SETTINGS_KEY, {
    printerName: 'POS-80',   // ⚠️ change this to your printer's exact Windows name
    paperWidth: 72         // printable width in mm (80mm roll ≈ 72mm printable, 58mm roll ≈ 48mm)
  });
}

function savePrinterSettings(settings) {
  saveJSON(PRINTER_SETTINGS_KEY, settings);
}




function printReceiptHtml(html, paperWidth) {
  const printerSettings = getPrinterSettings();

  if (typeof qz === 'undefined' || !qz.websocket) {
    // QZ Tray script not present on this page — fall back to the old behavior.
    openBrowserPrint(html);
    return;
  }

  const doPrint = () => {
    const config = qz.configs.create(printerSettings.printerName, {
      units: 'mm',
      size: { width: paperWidth || printerSettings.paperWidth, height: 300 } // height is a max; thermal rolls auto-cut per job
    });

    const data = [{
      type: 'pixel',
      format: 'html',
      flavor: 'plain',
      data: html
    }];

    qz.print(config, data)
      .then(() => showToast('Slip sent to printer.'))
      .catch((error) => {
        console.error('QZ print failed, falling back to browser print.', error);
        showToast('Thermal printer not reachable — opening browser print instead.', 'error');
        openBrowserPrint(html);
      });
  };

  if (qz.websocket.isActive()) {
    doPrint();
  } else {
    qz.websocket.connect()
      .then(doPrint)
      .catch((error) => {
        console.error('Could not connect to QZ Tray, falling back to browser print.', error);
        showToast('QZ Tray not running — opening browser print instead. Start QZ Tray for direct printing.', 'error');
        openBrowserPrint(html);
      });
  }
}

// Keep this exactly as-is — it's now purely the fallback path.
function openBrowserPrint(html) {
  const printWindow = window.open('', '_blank', 'width=420,height=800');
  if (!printWindow) {
    showToast('Your browser blocked the print pop-up. Allow pop-ups and retry.', 'error');
    return;
  }
  printWindow.addEventListener('afterprint', () => {
    setTimeout(() => printWindow.close(), 1000);
  }, { once: true });
  let printStarted = false;
  const printWhenReady = () => {
    if (printStarted) return;
    printStarted = true;
    printWindow.requestAnimationFrame(() => {
      printWindow.requestAnimationFrame(() => {
        if (!printWindow.document.querySelector('.slip') || !printWindow.document.body.textContent.trim()) {
          console.error('Receipt content did not render in the print window.');
          showToast('Receipt could not be rendered. Please retry.', 'error');
          printWindow.close();
          return;
        }
        printWindow.print();
      });
    });
  };
  printWindow.addEventListener('load', printWhenReady, { once: true });
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  if (printWindow.document.readyState === 'complete') {
    printWhenReady();
  }
}












  function openOrderEditor(orderId, inMemoryOrder, selectedCategoryId, pendingFlavors) {
    const order = getOrders().find((entry) => entry.id === orderId);
    if (!order) return;
    if (order.status === 'paid') {
      showToast('Paid orders cannot be edited.', 'error');
      return;
    }

    const modalBackdrop = document.getElementById('order-modal-backdrop');
    if (!modalBackdrop) return;

    const updatedOrder = inMemoryOrder ? JSON.parse(JSON.stringify(inMemoryOrder)) : JSON.parse(JSON.stringify(order));
    updatedOrder.items = (updatedOrder.items || []).map((item) => ({ ...item, id: item.id || uid('line') }));
    const activeCategoryId = selectedCategoryId || 'all';
    const draftFlavors = { ...(pendingFlavors || {}) };
    const categories = getCategories();
    const selectedCategory = categories.find((category) => category.id === activeCategoryId) || null;
    const selectedCupConfig = selectedCategory ? getScoopCupConfig(selectedCategory.name) : null;
    const matchingProducts = activeCategoryId === 'all'
      ? getProducts()
      : getProducts().filter((product) => product.categoryId === activeCategoryId);
    const typeRadios = ['dine-in', 'takeaway', 'delivery'];
    const categoryOptions = [`<button class="category-chip ${activeCategoryId === 'all' ? 'active' : ''}" type="button" data-editor-category="all">All</button>`]
      .concat(categories.map((category) => `<button class="category-chip ${activeCategoryId === category.id ? 'active' : ''}" type="button" data-editor-category="${escapeHtml(category.id)}">${escapeHtml(category.name)}</button>`)).join('');
    const productOptions = matchingProducts.map((product) => `
      <button class="product-card compact" type="button" data-editor-product-id="${product.id}">
        <h5>${product.name}</h5>
        <div class="price">${formatCurrency(product.price)}</div>
      </button>
    `).join('') || '<div class="empty-state">No products in this category.</div>';

    const newCupFlavorPicker = selectedCupConfig ? `
      <div class="flavor-picker-panel">
        <div class="flavor-header">
          <strong>${escapeHtml(selectedCategory.name)} · ${draftFlavors ? getFlavorSelectionTotal(draftFlavors) : 0} / ${selectedCupConfig.capacity}</strong>
          <span class="flavor-progress">${formatCurrency(selectedCupConfig.price)}</span>
        </div>
        <div class="flavor-grid">${getFlavorCatalog().map((flavor) => {
          const detail = getFlavorDetails(flavor);
          const qty = Number(draftFlavors[flavor] || 0);
          const total = getFlavorSelectionTotal(draftFlavors);
          return `<div class="flavor-tile ${qty ? 'selected' : ''}">
            <img class="flavor-photo" src="${detail.image}" alt="${escapeHtml(flavor)}" loading="lazy">
            <div class="flavor-name">${escapeHtml(flavor)}<span lang="ur" dir="rtl">${escapeHtml(detail.urdu)}</span></div>
            <div class="flavor-controls">
              <button type="button" data-editor-new-flavor="${escapeHtml(flavor)}" data-delta="-1" ${qty ? '' : 'disabled'}>−</button>
              <span>${qty}</span>
              <button type="button" data-editor-new-flavor="${escapeHtml(flavor)}" data-delta="1" ${total >= selectedCupConfig.capacity ? 'disabled' : ''}>+</button>
            </div>
          </div>`;
        }).join('')}</div>
        <button class="btn btn-primary" type="button" id="editor-add-scoop-cup" ${getFlavorSelectionTotal(draftFlavors) ? '' : 'disabled'}>Add ${escapeHtml(selectedCupConfig.displayName)}</button>
      </div>
    ` : '';

    const editorFlavorPicker = (item) => {
      if (item.kind !== 'scoop-cup') return '';
      const config = getScoopCupConfig(item.name);
      if (!config) return '';
      const total = getFlavorSelectionTotal(item.flavors || {});
      return `<div class="flavor-picker-panel" style="margin-top:10px;"><div class="muted">${total} / ${config.capacity} selected</div><div class="flavor-grid">${getFlavorCatalog().map((flavor) => {
        const detail = getFlavorDetails(flavor);
        const qty = Number((item.flavors || {})[flavor] || 0);
        return `<div class="flavor-tile ${qty ? 'selected' : ''}"><img class="flavor-photo" src="${detail.image}" alt="${escapeHtml(flavor)}" loading="lazy"><div class="flavor-name">${escapeHtml(flavor)}<span lang="ur" dir="rtl">${escapeHtml(detail.urdu)}</span></div><div class="flavor-controls"><button type="button" data-editor-flavor-action="decrease" data-editor-item-id="${item.id}" data-editor-flavor="${escapeHtml(flavor)}" ${qty ? '' : 'disabled'}>−</button><span>${qty}</span><button type="button" data-editor-flavor-action="increase" data-editor-item-id="${item.id}" data-editor-flavor="${escapeHtml(flavor)}" ${total >= config.capacity ? 'disabled' : ''}>+</button></div></div>`;
      }).join('')}</div></div>`;
    };

    const itemHtml = (updatedOrder.items || []).map((item) => `
      <div class="summary-item editor-item" data-editor-item-id="${item.id || item.productId}">
        <div>
          <strong>${item.name}</strong><br>
          <span class="muted">${formatCurrency(item.unitPrice)}</span>
          ${item.kind === 'scoop-cup' ? `<button class="btn btn-ghost small js-edit-cup-flavors" type="button" data-editor-item-id="${item.id || item.productId}">Edit flavors</button>` : ''}
        </div>
        <div class="qty-controls">
          <button type="button" data-editor-action="decrease" data-editor-item-id="${item.id || item.productId}">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-editor-action="increase" data-editor-item-id="${item.id || item.productId}">+</button>
        </div>
        <button class="btn btn-ghost small" type="button" data-editor-action="remove" data-editor-item-id="${item.id || item.productId}">Remove</button>
        <div style="grid-column:1/-1;" data-editor-flavor-host="${item.id || item.productId}" hidden>${editorFlavorPicker(item)}</div>
      </div>
    `).join('') || '<div class="empty-state">No items in this order.</div>';

    const infoFields = updatedOrder.type === 'delivery'
      ? `
        <div class="form-group"><label>Customer Name</label><input id="editor-customer-name" type="text" value="${(updatedOrder.customerName || '').replace(/"/g, '&quot;')}" /></div>
        <div class="form-group"><label>Address</label><input id="editor-address" type="text" value="${(updatedOrder.deliveryAddress || '').replace(/"/g, '&quot;')}" /></div>
        <div class="form-group"><label>Contact</label><input id="editor-contact" type="text" value="${(updatedOrder.contactNumber || '').replace(/"/g, '&quot;')}" /></div>
        <div class="form-group"><label>Delivery Date</label><input id="editor-delivery-date" type="date" value="${updatedOrder.deliveryDate || ''}" /></div>
      `
      : updatedOrder.type === 'takeaway'
        ? `<div class="form-group"><label>Customer Name</label><input id="editor-customer-name" type="text" value="${(updatedOrder.customerName || '').replace(/"/g, '&quot;')}" /></div>`
        : `<div class="form-group"><label>Table Number</label><input id="editor-table-no" type="text" value="${(updatedOrder.tableNo || '').replace(/"/g, '&quot;')}" /></div>`;

    modalBackdrop.innerHTML = `
      <div class="modal modal-lg">
        <div class="modal-header">
          <h3>Edit Order #${updatedOrder.id}</h3>
          <button class="modal-close" type="button" data-close-modal="true">×</button>
        </div>
        <div class="order-form-grid">
          <div class="inline-fields">
            ${typeRadios.map((type) => `
              <label class="choice-pill ${updatedOrder.type === type ? 'active' : ''}">
                <input type="radio" name="editor-order-type" value="${type}" ${updatedOrder.type === type ? 'checked' : ''} /> ${type.replace('-', ' ')}
              </label>
            `).join('')}
          </div>
          ${infoFields}
          <div class="form-group">
            <label>Optional Message</label>
            <textarea id="editor-message" rows="3" placeholder="Scoop flavour, extra toppings, notes...">${(updatedOrder.message || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
          </div>
          <div class="panel panel-soft">
            <h4>Line Items</h4>
            <div class="summary-list">${itemHtml}</div>
            <h4>Add Products</h4>
            <div class="categories">${categoryOptions}</div>
            ${newCupFlavorPicker}
            <div class="product-picker" style="margin-top:16px;">${selectedCupConfig ? '' : productOptions}</div>
          </div>
          <div class="action-row">
            <button class="btn btn-success js-save-edited-order" data-order-id="${updatedOrder.id}" type="button">Save Changes</button>
            <button class="btn btn-danger js-cancel-from-editor" data-order-id="${updatedOrder.id}" type="button">Cancel Order</button>
            <button class="btn btn-ghost" data-close-modal="true" type="button">Cancel</button>
          </div>
        </div>
      </div>
    `;

    modalBackdrop.querySelectorAll('[data-editor-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.editorItemId;
        const item = updatedOrder.items.find((entry) => (entry.id || entry.productId) === productId);
        if (!item) return;

        if (button.dataset.editorAction === 'increase') item.quantity += 1;
        if (button.dataset.editorAction === 'decrease') {
          item.quantity -= 1;
          if (item.quantity <= 0) {
            updatedOrder.items = updatedOrder.items.filter((entry) => (entry.id || entry.productId) !== productId);
          }
        }
        if (button.dataset.editorAction === 'remove') {
          updatedOrder.items = updatedOrder.items.filter((entry) => (entry.id || entry.productId) !== productId);
        }
        openOrderEditor(orderId, updatedOrder, activeCategoryId, draftFlavors);
      });
    });

    modalBackdrop.querySelectorAll('.js-edit-cup-flavors').forEach((button) => {
      button.addEventListener('click', () => {
        const host = modalBackdrop.querySelector(`[data-editor-flavor-host="${button.dataset.editorItemId}"]`);
        if (host) host.hidden = !host.hidden;
      });
    });
    modalBackdrop.querySelectorAll('[data-editor-flavor-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const item = updatedOrder.items.find((entry) => (entry.id || entry.productId) === button.dataset.editorItemId);
        const config = item ? getScoopCupConfig(item.name) : null;
        if (!item || !config) return;
        const flavors = { ...(item.flavors || {}) };
        const next = Math.max(Number(flavors[button.dataset.editorFlavor] || 0) + (button.dataset.editorFlavorAction === 'increase' ? 1 : -1), 0);
        if (button.dataset.editorFlavorAction === 'increase' && getFlavorSelectionTotal(flavors) + 1 > config.capacity) return;
        if (next) flavors[button.dataset.editorFlavor] = next;
        else delete flavors[button.dataset.editorFlavor];
        item.flavors = flavors;
        item.name = `${item.label || config.displayName} — ${formatFlavorBreakdown(flavors)}`;
        openOrderEditor(orderId, updatedOrder, activeCategoryId, draftFlavors);
      });
    });

    modalBackdrop.querySelectorAll('[data-editor-category]').forEach((button) => {
      button.addEventListener('click', () => {
        openOrderEditor(orderId, updatedOrder, button.dataset.editorCategory, {});
      });
    });
    modalBackdrop.querySelectorAll('[data-editor-new-flavor]').forEach((button) => {
      button.addEventListener('click', () => {
        if (!selectedCupConfig) return;
        const flavor = button.dataset.editorNewFlavor;
        const delta = Number(button.dataset.delta || 0);
        const selection = { ...draftFlavors };
        const next = Math.max(Number(selection[flavor] || 0) + delta, 0);
        if (delta > 0 && getFlavorSelectionTotal(selection) + 1 > selectedCupConfig.capacity) {
          showToast('This cup is already full.', 'error');
          playSound('error');
          return;
        }
        if (next) selection[flavor] = next;
        else delete selection[flavor];
        playSound(delta > 0 ? 'flavorAdd' : 'flavorRemove', flavor);
        openOrderEditor(orderId, updatedOrder, activeCategoryId, selection);
      });
    });
    modalBackdrop.querySelector('#editor-add-scoop-cup')?.addEventListener('click', () => {
      if (!selectedCategory || !selectedCupConfig || !getFlavorSelectionTotal(draftFlavors)) return;
      updatedOrder.items.push({
        id: uid('line'),
        kind: 'scoop-cup',
        categoryId: selectedCategory.id,
        name: `${selectedCategory.name} — ${formatFlavorBreakdown(draftFlavors)}`,
        label: selectedCupConfig.displayName,
        quantity: 1,
        unitPrice: selectedCupConfig.price,
        flavors: { ...draftFlavors },
        summary: `${selectedCategory.name} — ${formatFlavorBreakdown(draftFlavors)} — ${formatCurrency(selectedCupConfig.price)}`
      });
      playSound('productAdd', selectedCupConfig.displayName);
      openOrderEditor(orderId, updatedOrder, activeCategoryId, {});
    });

    modalBackdrop.querySelectorAll('[data-editor-product-id]').forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.editorProductId;
        const product = getProductById(productId);
        if (!product) return;
        const existing = updatedOrder.items.find((entry) => (entry.productId || entry.id) === productId);
        if (existing) existing.quantity += 1;
        else updatedOrder.items.push({ productId, name: product.name, quantity: 1, unitPrice: product.price });
        openOrderEditor(orderId, updatedOrder, activeCategoryId, draftFlavors);
      });
    });

    modalBackdrop.querySelectorAll('input[name="editor-order-type"]').forEach((radio) => {
      radio.addEventListener('change', () => {
        updatedOrder.type = radio.value;
        openOrderEditor(orderId, updatedOrder, activeCategoryId, draftFlavors);
      });
    });

    modalBackdrop.querySelector('.js-save-edited-order')?.addEventListener('click', () => {
      const orders = getOrders();
      const index = orders.findIndex((entry) => entry.id === orderId);
      if (index < 0) return;

      const nextType = modalBackdrop.querySelector('input[name="editor-order-type"]:checked')?.value || updatedOrder.type;
      const customerName = document.getElementById('editor-customer-name')?.value.trim() || '';
      const address = document.getElementById('editor-address')?.value.trim() || '';
      const contact = document.getElementById('editor-contact')?.value.trim() || '';
      const deliveryDate = document.getElementById('editor-delivery-date')?.value || '';
      const tableNo = document.getElementById('editor-table-no')?.value.trim() || '';
      const message = document.getElementById('editor-message')?.value.trim() || '';

      if (nextType === 'dine-in' && !tableNo) {
        showToast('Table number required for dine-in updates.', 'error');
        return;
      }
      if ((nextType === 'takeaway' || nextType === 'delivery') && !customerName) {
        showToast('Customer name required for this order type.', 'error');
        return;
      }
      if (nextType === 'delivery' && (!address || !contact)) {
        showToast('Delivery address and contact are required.', 'error');
        return;
      }
      if (nextType === 'delivery' && !deliveryDate) {
        showToast('Delivery date is required.', 'error');
        return;
      }

      const subtotal = (updatedOrder.items || []).reduce((sum, item) => sum + Number(item.unitPrice || 0) * Number(item.quantity || 0), 0);
      orders[index] = {
        ...orders[index],
        type: nextType,
        tableNo: nextType === 'dine-in' ? tableNo : '',
        customerName: nextType !== 'dine-in' ? customerName : '',
        deliveryAddress: nextType === 'delivery' ? address : '',
        contactNumber: nextType === 'delivery' ? contact : '',
        deliveryDate: nextType === 'delivery' ? deliveryDate : '',
        message,
        items: updatedOrder.items,
        subtotal,
        discount: 0,
        total: subtotal,
        updatedAt: new Date().toISOString()
      };
      saveOrders(orders);
      showToast('Order updated successfully.');
      closeOrderModal();
      if (window.renderWaiterDashboard) window.renderWaiterDashboard();
      if (window.renderManagerDashboard) window.renderManagerDashboard();
    });
    modalBackdrop.querySelector('.js-cancel-from-editor')?.addEventListener('click', () => {
      const reason = prompt('Please provide a cancellation reason:');
      if (!reason || !reason.trim()) {
        showToast('Cancellation reason is required.', 'error');
        return;
      }
      const orders = getOrders();
      const index = orders.findIndex((entry) => entry.id === orderId);
      if (index < 0 || orders[index].status === 'paid') return;
      orders[index] = { ...orders[index], status: 'cancelled', cancelledAt: new Date().toISOString(), cancelReason: reason.trim() };
      saveOrders(orders);
      closeOrderModal();
      showToast('Order cancelled successfully.');
      if (window.renderManagerDashboard) window.renderManagerDashboard();
    });
  }

  function closeOrderModal() {
    const modalBackdrop = document.getElementById('order-modal-backdrop');
    if (modalBackdrop) modalBackdrop.classList.remove('open');
  }

  function attachGlobalModalEvents() {
    document.addEventListener('click', (event) => {
      const closeModal = event.target.closest('[data-close-modal="true"]');
      if (closeModal) closeOrderModal();

      const viewButton = event.target.closest('.js-view-order');
      if (viewButton) openOrderModal(viewButton.dataset.orderId);

      const cancelButton = event.target.closest('.js-cancel-order');
      if (cancelButton) {
        const reason = prompt('Please provide a cancellation reason:');
        if (!reason || !reason.trim()) {
          showToast('Cancellation reason is required.', 'error');
          return;
        }
        const orders = getOrders();
        const orderIndex = orders.findIndex((order) => order.id === cancelButton.dataset.orderId);
        if (orderIndex >= 0) {
          orders[orderIndex].status = 'cancelled';
          orders[orderIndex].cancelledAt = new Date().toISOString();
          orders[orderIndex].cancelReason = reason.trim();
          saveOrders(orders);
          showToast('Order cancelled successfully.');
          if (window.renderWaiterDashboard) window.renderWaiterDashboard();
          if (window.renderCashierDashboard) window.renderCashierDashboard();
          if (window.renderManagerDashboard) window.renderManagerDashboard();
          closeOrderModal();
        }
      }

      const editButton = event.target.closest('.js-edit-order-modal');
      if (editButton) {
        const orderId = editButton.dataset.orderId;
        if (window.openOrderEditor) window.openOrderEditor(orderId);
      }

      const printSlipButton = event.target.closest('.js-print-order-slip');
      if (printSlipButton) {
        const orderId = printSlipButton.dataset.orderId;
        printOrderSlip(orderId, printSlipButton.dataset.slipType || 'customer');
      }
    });
  }









  // Call this once, e.g. at the top of initializeStorage() or on DOMContentLoaded.
function initQzTray() {
  if (typeof qz === 'undefined') return; // qz-tray.js not loaded on this page

  // OPTION B (once you have real certs/signing): replace these two stubs.
  qz.security.setCertificatePromise(function (resolve) {
    // resolve(yourPublicCertificateString) — fetched from your server once you have one.
    resolve(''); // empty = Option A (unsigned), shows a one-time trust popup instead
  });
  qz.security.setSignaturePromise(function (toSign) {
    return function (resolve, reject) {
      // resolve(signatureForToSign) — normally computed server-side with your private key.
      resolve(''); // empty = Option A
    };
  });
}








  window.IcePalace = {
    STORAGE_KEYS,
    SOUND_ASSETS,
    initializeStorage,
    getCurrentUser,
    setCurrentUser,
    getRoleDashboard,
    requireRole,
    formatCurrency,
    formatDate,
    getOrders,
    saveOrders,
    getUsers,
    getProducts,
    getCategories,
    getSuppliers,
    getStock,
    saveStock,
    getIngredients,
    recordOrderStockUsage,
    getDeals,
    saveDeals,
    getStaff,
    getProductById,
    getCategoryById,
    getFlavorCatalog,
    getFlavorDetails,
    getProductDetails,
    getScoopCupConfig,
    getFlavorSelectionTotal,
    formatFlavorBreakdown,
    computeCartTotals,
    showToast,
    playSound,
    beep,
    updateClock,
    setSection,
    getOrderCustomerDisplay,
    renderOrderList,
    openOrderModal,
    closeOrderModal,
    attachGlobalModalEvents,
    getPrinterSettings,
    uid,
    getJSON,
    saveJSON,
    printOrderSlip
  };

  window.openOrderEditor = openOrderEditor;
  window.printOrderSlip = printOrderSlip;

  // document.addEventListener('DOMContentLoaded', () => {
  //   initializeStorage();
  //   attachGlobalModalEvents();
  //   if (document.getElementById('live-clock')) {
  //     updateClock();
  //     setInterval(updateClock, 1000);
  //   }
  // });

  document.addEventListener('DOMContentLoaded', () => {
  initializeStorage();
  attachGlobalModalEvents();
  initQzTray();           // 👈 add this line
  if (document.getElementById('live-clock')) {
    updateClock();
    setInterval(updateClock, 1000);
  }
});
})();
