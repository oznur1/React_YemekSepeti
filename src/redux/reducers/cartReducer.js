import actionTypes from "../actionTypes";


// statein başlangıç değeri
const initialState={
   cart:[],
    isLoading:true,
    error:null,
    
};

const cartReducer=(state=initialState,{type,payload})=>{
   switch(type){

    //yüklenme
    case actionTypes.CART_LOADING:
     return {...state,isLoading:true};   

     //hata
 case actionTypes.CART_ERROR:
 return {...state,isLoading:false ,error:payload.message};   
        
 //başarı
 case actionTypes.CART_SUCCESS:
 return {...state,isLoading:false, error:null,cart:payload};  

 //eleman ekle
 case actionTypes.CREATE_ITEM:
return {...state,cart:state.concat(payload)};

//eleman güncelle
case actionTypes.UPDATE_ITEM:
   const updated = state.cart.map((i) =>
      i.id === payload.id ? payload : i
    );
    return { ...state, cart: updated };

 // eleman sil
 case actionTypes.DELETE_ITEM:
   const filtred = state.cart.filter((i) => i.id != payload);
   return { ...state, cart: filtred };

          
default:
  return state;   

   } 
}

export default cartReducer;