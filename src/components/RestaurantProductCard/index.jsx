
import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {createItem, updateItem}from "../../redux/actions/basketAction"


const RestaurantProductCard = ({ item }) => {
     //Dispatch kurulumu
   const dispatch= useDispatch()
   
   //sepetteki ürünlere erişebilmek için abone ol
   const {cart}= useSelector((store)=>store.cartReducer)

   //Eklenecek ürün sepette varmı bunu kontrol et
   const found = cart.find((cartItem) => cartItem.productId === item.id);

  //handleAdd fonk çalıştığında eklenecek ürün sepette var mı bunu kontrol etmezsek her seferinde var olan ürünü tekrar tekrar ekler.Bunu engellemek için sepette o ürün varmı bunu kontrol etmemiz gerek.
  const handleAdd = () => {
    found
      ? dispatch(updateItem(found.id, found.amount + 1))
      : dispatch(createItem(item));
  };
  
  
  return (
    <div className="border p-3 shadow grid grid-cols-[1fr_115px] gap-3 rounded-lg hover:bg-red-100 border-zinc-100 hover:scale-105 transition duration-300 cursor-pointer">
      
      {/* Sol Kısım */}
      <div className="flex flex-col justify-between">
        <h1 className="text-2xl font-semibold">{item.title}</h1>
        <p className="text-gray-500 my-1">{item.decs}</p>
        <p className="text-lg font-semibold">{item.price} TL</p>
      </div>

      {/* Sağ Kısım */}
      <div className="relative w-[115px] h-[115px]">
        <img 
          src={item.photo}
          className="w-full h-full rounded-md object-cover"
          alt="item-photo"
        />
        <button type='button'
         onClick={handleAdd}
        className="absolute right-2 bottom-2 bg-white rounded-full w-8 h-8 grid place-items-center hover:bg-red-100">
          
          {/* eğer sepette bu üründen varsa ürün miktarını render et yoksa ekle,ikonu render et */}
          {found ? <span>{found.amount}</span> : (<FaPlus />)}
          </button>
      </div>
    </div>
  );
};

export default RestaurantProductCard;



