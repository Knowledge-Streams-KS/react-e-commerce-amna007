import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css"
import ProductCard from "../../components/ProductCard";

function Product() {
  const [productData, setProductData] = useState([])
  const [categories, setCategories] = useState([])

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setProductData(response.data)
    console.log(response.data)
  }
  const fetchCategories = async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories')
    setCategories(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetchProducts()
    fetchCategories()
  }, []);

  return (
    <>
      <div className="container">
        <div className="categories">
          {
            categories.map((elem) => (
              <h3>{elem}</h3>
            ))
          }

        </div>
        <div className="products">
          {
            productData.map((elem) => (
              <>
                <ProductCard elem={elem} />
              </>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Product;