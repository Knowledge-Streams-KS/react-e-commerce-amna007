import "./style.css"
function ProductCard({ elem }) {
  return (
    <>
      <div className="product-card">
        <img src={elem.image} alt="Description of the image" />
        <h2>{elem.title}</h2>
        <p className="price">${elem.price}</p>
      </div>

    </>
  );
}

export default ProductCard;