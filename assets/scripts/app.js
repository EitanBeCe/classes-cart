const productList = {
  products: [
    {
      title: 'A Pillow',
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-080322-best-body-pillows-1659630630.png?crop=1.00xw:0.771xh;0,0.0788xh&resize=1200:*',
      price: 19.99,
      description: 'A soft pillow',
    },
    {
      title: 'A Carpet',
      imageUrl: 'https://www.cavendishdevere.com/images/lush-carpet.jpg',
      price: 79.99,
      description: 'A nice carpet',
    },
  ],

  render() {
    const renderHook = document.getElementById('app'); // Where to render products

    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}"/>
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
