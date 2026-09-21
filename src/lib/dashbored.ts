export async function GetAllProdectfordashbored() {
  try {
    const res = await fetch(
      "http://localhost:8000/api/get-getlatestprodect",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return data || [];
  } catch (error) {
    console.error("GetAllProdect error:", error);
    return [];
  }
}
export async function getcurrentproduct() {
  try {
    const res = await fetch(
      "http://localhost:8000/api/get-getcurrentproduct",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return data || [];
  } catch (error) {
    console.error("GetAllProdect error:", error);
    return [];
  }
}
export async function getgetlatestorder() {
  try {
    const res = await fetch(
      "http://localhost:8000/api/get-getlatestorder",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return data || [];
  } catch (error) {
    console.error("GetAllProdect error:", error);
    return [];
  }
}
export async function GetCountOrder() {
  try {
    const res = await fetch(
      "http://localhost:8000/api/GetCountOrder",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return data || [];
  } catch (error) {
    console.error("GetAllProdect error:", error);
    return [];
  }
}
export async function GetCountProdects() {
  try {
    const res = await fetch(
      "http://localhost:8000/api/GetCountProdects",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return data || [];
  } catch (error) {
    console.error("GetAllProdect error:", error);
    return [];
  }
}
export async function alluser() {
  try {
    const res = await fetch(
      "http://localhost:8000/api/alluser",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return data || [];
  } catch (error) {
    console.error("GetAllProdect error:", error);
    return [];
  }
}
export async function GetprodectsStock() {
  try {
    const res = await fetch(
      "http://localhost:8000/api/GetDataSingle",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return data || [];
  } catch (error) {
    console.error("GetAllProdect error:", error);
    return [];
  }
}


export async function GetAllproductTable(url:string) {
   try {
     const res = await fetch(url);

     if (!res.ok) throw new Error('Failed to fetch');

     const data = await res.json();

     return data.data;
   } catch (error) {
     console.error(error);
     return;
   }
}

export async function GetAllOrders(url:string) {
   try {
     const res = await fetch(url);

     if (!res.ok) throw new Error('Failed to fetch');

     const data = await res.json();

     return data.data;
   } catch (error) {
     console.error(error);
     return;
   }
}
export async function GetAllCustomers(url:string) {
   try {
     const res = await fetch(url);

     if (!res.ok) throw new Error('Failed to fetch');

     const data = await res.json();

     return data.data;
   } catch (error) {
     console.error(error);
     return;
   }
}

