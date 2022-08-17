class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}"/>
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ShoppingCart {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    return this.items.reduce((a, b) => a + b.price, 0);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order now</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class Product {
  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-080322-best-body-pillows-1659630630.png?crop=1.00xw:0.771xh;0,0.0788xh&resize=1200:*',
      19.99,
      'A soft pillow'
    ),
    new Product(
      'A Carpet',
      'https://www.cavendishdevere.com/images/lush-carpet.jpg',
      79.99,
      'A nice carpet'
    ),
  ];

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const productEl = productItem.render();
      prodList.append(productEl);
    }
    return prodList;
  }
}

// Combining Cart and productList
class Shop {
  render() {
    const renderHook = document.getElementById('app'); // Where to render products

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  // Can be used inside other classes
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
