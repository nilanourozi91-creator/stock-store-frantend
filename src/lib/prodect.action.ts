
// export async function GetAllProdects() {
//    try {
//      const res = await fetch(`http://localhost:8000/api/products`);
//      if (!res.ok) throw new Error('Failed to fetch');
//      const data = await res.json();
//      return data.data.data||[];
//    } catch (error) {
//      console.error(error);
//      return 'someting went wrong';
//    }
// }
// export async function GetAllProdect() {
//    try {
//      const res = await fetch(`http://localhost:8000/api/prodata`);
//      if (!res.ok) throw new Error('Failed to fetch');
//      const data = await res.json();
//      return data.data||[];
//    } catch (error) {
//      console.error(error);
//      return 'someting went wrong';
//    }
// }
// export async function GetSingleProdect(id:any) {
//    try {
//      const response = await fetch(`http://localhost:8000/api/products/${id}`);
//      const data = await response.json();
//      return data||[];
//    } catch (error) {
//      console.error(error);
//      return 'someting went wrong';
//    }
// }
// export async function GetAllReviews() {


//    try {
//      const res = await fetch(`http://localhost:8000/api/reviews`);

//      if (!res.ok) throw new Error('Failed to fetch');

//      const data = await res.json();
//      return data.data ||{};
//    } catch (error) {
//      console.error(error);
//      return [];
//    }
//   }
// export async function GetAllGategories() {


//    try {
//      const res = await fetch(`http://localhost:8000/api/catagory`);
//      if (!res.ok) throw new Error('Failed to fetch');
//      const data = await res.json();
//      return data ||{};
//    } catch (error) {
//      console.error(error);
//      return [];
//    }
//   }



export async function GetAllProdects() {
  try {
    const res = await fetch(
      "http://localhost:8000/api/products",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return data.data?.data || [];
  } catch (error) {
    console.error("GetAllProdects error:", error);
    return [];
  }
}

export async function GetAllProdect() {
  try {
    const res = await fetch(
      "http://localhost:8000/api/prodata",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return data.data || [];
  } catch (error) {
    console.error("GetAllProdect error:", error);
    return [];
  }
}

export async function GetSingleProdect(id: number | string) {
  try {
    const response = await fetch(
      `http://localhost:8000/api/products/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("GetSingleProdect error:", error);
    return null;
  }
}

export async function GetAllReviews() {
  try {
    const res = await fetch(
      "http://localhost:8000/api/reviews",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }

    const data = await res.json();

    return data.data || [];
  } catch (error) {
    console.error("GetAllReviews error:", error);
    return [];
  }
}

export async function GetAllGategories() {
  try {
    const res = await fetch(
      "http://localhost:8000/api/catagory",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await res.json();

    return data.data || data || [];
  } catch (error) {
    console.error("GetAllGategories error:", error);
    return [];
  }
}
