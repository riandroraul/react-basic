import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = {
    nama: "riandroraul",
  };
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const { products } = await response.json();

    setProduct(products[0].title);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <UserContext.Provider value={{ user, product }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
