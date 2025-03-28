
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import api from '../../utils/api'
import Loader from '../Loader'
import Error from "../Error"
import { FaFire } from 'react-icons/fa'
import RestaurantProductCard from '../RestaurantProductCard'


const RestaurantProduct = () => {
  // Url'deki restaurant id'sine eriş
  const { id } = useParams();

  // Bileşen içerisinde verileri yönetebilmek için useState kurulumu yap
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // products endpointine istek atarak ilgili restaurant'a ait verileri al
  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]); // `id` bağımlılığını ekledik

  return (
    <div>
      {error ? (
        <Error />
      ) : !products ? ( 
        <Loader />
      ) : (
        <div>
          <h2 className='flex gap-2 text-2xl'>
            <FaFire className='text-red-500' /> Popüler
          </h2>
          <p className='text-gray-500'>Restoranın en çok tercih edilen ürünleri</p>

          <div className='grid lg:grid-cols-2 gap-5'>
            {products.map((item) => (
              <RestaurantProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RestaurantProduct;