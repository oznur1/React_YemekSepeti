
import api from "../../utils/api";
import actionTypes from "../actionTypes";
const getRestaurants=()=>{

 return(dispatch)=>{

    //yüklenme durumu
     dispatch({type:actionTypes.REST_LOADING})
     api
    .get("/restaurants")
    .then((res)=>{
        //veri gelme durumu
   dispatch({
    type:actionTypes.REST_SUCCESS,payload:res.data,
   });
    })
    .catch((err)=>
        //hata durumu
    dispatch({
      type:actionTypes.REST_ERROR, payload:err.message
    }));
    }
};
export {getRestaurants};