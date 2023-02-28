const ProductCard = ({name, description, thumbnail}) => {
    return(
        <div>
            <img
                width ="200"
                src={thumbnail}
                alt={name}
            />
        <div><h3>{name}</h3></div>
        <div>{description}</div>
        </div>
    );
}
export default ProductCard;
