'use client';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import api from '../../../utils/api';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get('api/products');
        setProducts(res.data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded shadow">
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-2" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-sm">{product.description}</p>
          <p className="text-green-600 font-semibold">₹{product.price}</p>
          {product.oldPrice && (
            <p className="text-gray-500 line-through">₹{product.oldPrice}</p>
          )}
        </div>
      ))}
    </div>
  );
}
