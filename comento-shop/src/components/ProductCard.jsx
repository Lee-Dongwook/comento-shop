import styled from "styled-components";

const ProductCard = ({name, description, thumbnail, onClick}) => {
    return(
        <ProductCardStyled onClick = {onClick}>
        <div>
            <img
                width ="200"
                src={thumbnail}
                alt={name}
            />
        <div><h3>{name}</h3></div>
        <div>{description}</div>
        </div>
        </ProductCardStyled>
    );
}

const ProductCardStyled = styled.div`
    padding-bottom: 48px;
`;

export default ProductCard;
