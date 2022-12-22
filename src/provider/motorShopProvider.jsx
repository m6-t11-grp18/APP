import { createContext, useEffect, useState } from 'react';
import MotoShopApi from '../services';

export const MotorShopContext = createContext();

export const MotorShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    MotoShopApi.get('/announcement/products')
      .then((response) => setProducts(response.data.data))
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <MotorShopContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </MotorShopContext.Provider>
  );
};
