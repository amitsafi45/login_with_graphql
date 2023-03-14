import jwtDecode from "jwt-decode"
import { useState } from "react"
const initialState={
   user:null
}

if(localStorage.getItem("token")){
   
     const  decodedToken=jwtDecode(localStorage.getItem("token")!);
     if(decodedToken){
       
     }
}