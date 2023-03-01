import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { mockTheme1Products, mockTheme2Products} from "../data/mockData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  // 테마 버튼 클릭 Event
  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Products);
    } else {
        setProducts(mockTheme2Products);
    }
  };

  useEffect(() => {
    // 1초 후, 상품 초기화
    setTimeout(() => {
      setProducts(mockTheme1Products);
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <Navigation name="코멘토 쇼핑" />
        <ThemeSection>
          <ThemeButton
            themeName={"#따순머그컵"}
            onClick={() => onClickThemeButton(1)}
          />
          <ThemeButton
            themeName={"#여름엔바로"}
            onClick={() => onClickThemeButton(2)}
          />
        </ThemeSection>
        <GrayLine />
      </div>
      <ProductSection>
        {products ? (
          products.map((product) => (
            <ProductCard
              onClick={() => navigate(`product/${product.id}`)}
              key={product.id}
              name={product.name}
              description={product.description}
              thumbnail={product.thumbnail}
            />
          ))
        ) : (
          <div>테마를 선택해주세요</div>
        )}
      </ProductSection>
    </div>
  );
};

const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 12px;
`;

const GrayLine = styled.div`
  height: 8px;
  width: 100%;
  background: #eeeeee;
`;

const ProductSection = styled.div`
  padding: 20px;
`;

export default Home;