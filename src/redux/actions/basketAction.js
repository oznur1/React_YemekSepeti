
import api from "../../utils/api"
import actionTypes from "../actionTypes";
import { v4 } from "uuid";



//sepetteki verileri getir
export const getCart=()=>{
    return(dispatch)=>{

      //YÜKLENME
      dispatch({type:actionTypes.CART_LOADING});

   //api'a istek at
        api
        .get("/cart")
        .then((res)=>
        dispatch({type:actionTypes.CART_SUCCESS,payload:res.data})
    )
    .catch((err)=>
 dispatch({type:actionTypes.CART_ERROR,payload:err}));
    };
};

//sepete ürün ekle
export const createItem=(item)=>{
    return (dispatch)=>{
    //sepete eklenecek ürün için bir obje oluştur
    const newItem={
        id:v4(),
        productId:item.id,
        title:item.title,
        price:item.price,
        photo:item.photo,
        amount:1,
    };

    //api'a istek at
    api.post("/cart",newItem)
    .then(()=>
   //istek başarılı olursa reducer'ı haber ver ve state'i güncelle
   dispatch({type:actionTypes.CREATE_ITEM,payload:newItem}))
    };

};

//sepette ürün güncelle
export const updateItem = (id, newAmount) => {
    return (dispatch) => {
      api
        .patch(`/cart/${id}`, { amount: newAmount })
        .then((res) => {
          dispatch({ type: actionTypes.UPDATE_ITEM, payload: res.data });
        })
        .catch((err) => {
          console.error("Hataaaa:", err);
        });
    };
  };


// Sepetteki ürünü sil
export const deleteItem = (id) => {
  return (dispatch) => {
    api
      .delete(`cart/${id}`)
      .then(() => dispatch({ type: actionTypes.DELETE_ITEM, payload: id }));
  };
};




