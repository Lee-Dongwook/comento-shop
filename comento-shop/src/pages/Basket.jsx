import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import BasketItem from "../components/BasketItem";
import * as webStorage from "../utils/webStorage";

const Basket = () => {
  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);

  useEffect(() => {
    const items = webStorage.getBasketItems();
    setBasketItems(items);
    setBasketItemCount(items.length);
  }, []);

  useEffect(() => {
    const items = webStorage.getBasketItems();
    setBasketItems(items);
  }, [basketItemCount]);

  const Remove = (productId) => {
    webStorage.removeBasketItem(productId);
    setBasketItemCount(basketItems.length - 1);
  };

  return (
    <BasketStyled>
      <Navigation name="장바구니" hasBack={true} />

      {basketItems &&
        basketItems.map((product) => (
          <BasketItem
            key={product.id}
            id={product.id}
            thumbnail={product.thumbnail}
            name={product.name}
            price={product.price}
            onRemoveItem={() => Remove(product.id)}
          />
        ))}

      <div>상품 {basketItemCount}개 </div>
    </BasketStyled>
  );
};

const BasketStyled = styled.div``;

export default Basket;