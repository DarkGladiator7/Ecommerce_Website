import axios from "axios";

export async function productsData() {
  const instance = axios.create({
    baseURL: "https://darklightindustries-966ec-default-rtdb.firebaseio.com/",
  });
  const products = await instance.get("./products.json")
  
  ;
  
  return products;
}
