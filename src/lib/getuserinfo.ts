'use client'
 export async function GetUser() {
    const token=localStorage.getItem('token');
    if (!token) {
        return null;
    }
    try {
        const response=await fetch("http://localhost:8000/api/user",{
            method:"GET",
            headers:{
                accept:"application/json",
                Authorization:`Bearer ${token}`,
            }
        });
        if (!response) {
           return null 
        }
        return await response.json();
    } catch (error) {
         console.error('get user error',error);
         return null
    }
}