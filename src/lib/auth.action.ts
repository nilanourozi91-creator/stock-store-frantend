'use server'

import { join } from "path";
import { json } from "stream/consumers";

export async function Login(
        prevState:unknown,formData:FormData
   
    ) {
  try {
    console.log(formData);
    const data = await fetch(
      "http://localhost:8000/api/login",
      {
        body:formData,
        headers:{
            Accept:'application/json',
        },
        method:'POST',
      }
    );
    const response = await data.json();
    console.log(response);
    return response;
  } catch (error) {
    return null;
  }


}
export async function Rigester(prevState:unknown,formData:FormData) {
  try {
    console.log(formData);
    const data = await fetch(
      "http://localhost:8000/api/register",
      {
        body:formData,
        headers:{
            Accept:'application/json',
        },
        method:'POST',
      }
    );
    const response = await data.json();
    console.log(response);
    return response;
  } catch (error) {
    return null;
  }
       

}
export async function GetUserInfomations(token:string) {
  try {
    const data = await fetch("http://localhost:8000/api/register",
      {
       
        headers:{
           Authorization:`Bearer ${token}`,
            Accept:'application/json',
        },
      }
    );
    const response = await data.json();
    console.log(response);
    return response;
  } catch (error) {
    return null;
  }
       

}