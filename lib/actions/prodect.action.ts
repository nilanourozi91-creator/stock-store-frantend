// export async function GetAllProdects() {
//   try {
//      const data= await fetch(`http://127.0.0.1:8000/api/products`);
//    const response =data.json();
//    return response.data.data;
//   } catch (error) {
//      return 'someting went wrong';
//   }
// }


export async function GetAllProdects() {
   try {
     const res = await fetch(`http://localhost:8000/api/products`);
     if (!res.ok) throw new Error('Failed to fetch');
     const data = await res.json();
     return data.data.data||[];
    // return console.log(data.data.data);
   } catch (error) {
     console.error(error);
     return 'someting went wrong';
   }
}