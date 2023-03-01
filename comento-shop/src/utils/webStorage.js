const BASKET = "BASKET";

// 장바구니에 상품 추가
export const addBasket = (product) => {
  let basketItems = getBasketItems();


  const Same = !!basketItems.find((item) => item.id === product.id);
  if (!Same) {
    basketItems.push(product);

    localStorage.setItem(BASKET, JSON.stringify(basketItems));
  }
};


export const removeBasketItem = (productId) => {
  let basketItems = getBasketItems();
  basketItems = basketItems.filter((item) => item.id !== productId);


  localStorage.removeItem(BASKET);
  localStorage.setItem(BASKET, JSON.stringify(basketItems));
};

export const getBasketItems = () => {
  const basketItems = localStorage.getItem(BASKET);
  return basketItems ? JSON.parse(basketItems) : [];
};