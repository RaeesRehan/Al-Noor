import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import stars from './images/stars.svg'


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="mt-20 flex justify-center"> <div className="loader"></div> </p>;
  if (error) return <p className="mt-20 flex justify-center">Error: {error}</p>;
  if (!product) return null;

  let percentage =  (100 - ( product.rating.rate * 20));

  return (
    <>
    <div className="mx-auto flex p-4 bg-[url('./images/bg.png')] bg-cover">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
      <div className="flex flex-col items-center">
      <h3 className="text-3xl font-bold mb-4 text-center text-[#0f4c82] mt-16">{product.title}</h3>
        <span className="">
          <span className="flex items-center">

        {/* <p className="raleway text-lg mb-4 text-start w-full">Rating: {product.rating.rate}</p> */}
        <p className="raleway text-lg mb-4 text-start w-full">Reviews: {product.rating.count}</p>
        <span className="relative w-[100px] h-4 inline-block overflow-hidden">
          <img className="absolute z-10 right-0 w-[100px] h-full" src={stars} alt="" />
          <span className="w-[100px] absolute h-full bg-yellow-400 " style={{ right: `${percentage}%` }}>
  
         </span>
        </span>

          </span>

        <p className="font-bold text-lg mb-4 text-start w-full">Price: ${product.price}</p>
        </span>
        <p className="raleway text-gray-700 mb-4">{product.description}</p>
      </div>
    </div>
    < Products />
    </>
  );
};

export default ProductDetails;