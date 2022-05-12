import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, amount) => {
        let itemAmount = { ...item, amount };
        if (!isInCart(item.id)) {
            setCart([...cart, itemAmount]);
        } else {
            const cartAux = cart
            const pos = cart.findIndex((item) => item.id === itemAmount.id);
            cartAux[pos].amount = cartAux[pos].amount + amount
            setCart(cartAux)
        }
    };
    

    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id));
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((e) => e.id === id);
    };

    const getQuantity = () => {
        let cant = 0
        cart.forEach((e) => cant += e.amount)
        return cant
    };
    
    const getTotal = () => {
        let total = 0
        cart.forEach((e) => total += (e.amount*e.price))
        return total        
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart,getQuantity, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider