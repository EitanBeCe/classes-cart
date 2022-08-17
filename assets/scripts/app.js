class Product {
  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
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
    return prodEl;
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
    const renderHook = document.getElementById('app'); // Where to render products

    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const productEl = productItem.render();
      prodList.append(productEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
