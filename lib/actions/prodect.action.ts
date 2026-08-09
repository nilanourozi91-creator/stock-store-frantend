
export async function GetAllProdects() {
   try {
     const res = await fetch(`http://localhost:8000/api/products`);
     if (!res.ok) throw new Error('Failed to fetch');
     const data = await res.json();
     return data.data.data||[];
   } catch (error) {
     console.error(error);
     return 'someting went wrong';
   }
}
export async function GetSingleProdect(id:any) {
   try {
     const response = await fetch(`http://localhost:8000/api/products/${id}`);
     const data = await response.json();
     return data||[];
   } catch (error) {
     console.error(error);
     return 'someting went wrong';
   }
}
export async function GetAllReviews() {


   try {
     const res = await fetch(`http://localhost:8000/api/reviews`);

     if (!res.ok) throw new Error('Failed to fetch');

     const data = await res.json();
     return data.data ||{};
   } catch (error) {
     console.error(error);
     return [];
   }
  }