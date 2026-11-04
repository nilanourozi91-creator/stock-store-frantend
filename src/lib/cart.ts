// export async function GetCart(){
// const response = await fetch("http://localhost:8000/api/cart", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     product_id: product.id,
//     quantity: 1,
//   }),
// });

// const data = await response.json();

// if (data.success) {
//   toast.success("Added to cart!", {
//     description: data.message,
//   });
// }
// }