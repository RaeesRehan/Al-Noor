import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { FaHeart, FaEye,} from './imports';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="mt-20 flex justify-center"> <div className="loader"></div> </p>;
  if (error) return <p className="mt-20 flex justify-center">Error: {error}</p>;


  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className=" mx-auto p-4 bg-[url('./images/bg.png')]">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#0f4c82] mt-16">Our Products</h1>
      <ul className="flex flex-wrap justify-evenly gap-4 w-full">
        {products.map((product) => (
          
          <li onClick={() => handleProductClick(product.id)} key={product.id} className="cursor-pointer h-auto relative bg-white border p-4 rounded shadow hover:shadow-xl transition w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col productCard ">
            
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
            <h2 className="text-lg font-semibold mb-2 text-nowrap overflow-hidden text-ellipsis">{product.title}</h2>
            <p className="text-gray-700 mb-4 flex-grow truncate-3-lines">{product.description}</p>
            <p className="font-bold text-lg mb-4">${product.price}</p>
            
            <span className="absolute top-2 right-2 ">
            <button className="text-center raleway bg-transparent rounded-full w-full py-2 hover:shadow-xl  addToCartBtn"> <FaHeart className="text-red-500 m-auto"  /> </button>
            <button className="text-center raleway bg-transparent rounded-full w-full py-2 hover:shadow-xl  addToCartBtn"> <FaEye className="text-blue-500 m-auto"  /> </button>
            </span>

            <button className="text-center raleway text-white bg-[#0f4c82] w-full py-2 absolute bottom-0 left-0 addToCartBtn">Add To Cart</button>
          </li>
         
        ))}
      </ul>
    </div>
  );
};

export default Products;
