import { createContext, useState, useEffect } from "react";
import * as api from "./shared/constants";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCart = async () => {
    try {
      setIsLoading(true);
      const data = await api.getCart();
      // Map backend CartItem to local state format if needed
      const items = data.items.map(item => ({
        id: item.product,
        product_id: item.product,
        title: item.product_name,
        price: Number(item.product_price),
        image: item.product_image || item.image,
        qty: item.quantity,
        total: Number(item.total),
        selectedSize: item.selected_size,
        selectedColor: item.selected_color
      }));
      setCartItems(items);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    try {
      await api.addToCart({
        product: product.id,
        quantity: product.qty || 1,
        selected_size: product.selectedSize,
        selected_color: product.selectedColor
      });
      fetchCart();
      toast.success("Товар успешно добавлен в корзину!");
    } catch (error) {
      toast.error("Ошибка при добавлении в корзину");
    }
  };

  const removeFromCart = async (id) => {
    try {
      await api.removeFromCart(id);
      fetchCart();
    } catch (error) {
      toast.error("Ошибка при удалении из корзины");
    }
  };

  const updateQty = async (id, delta) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
      try {
        await api.addToCart({
          product: id,
          quantity: Math.max(1, item.qty + delta)
        });
        fetchCart();
      } catch (error) {
        toast.error("Ошибка при обновлении количества");
      }
    }
  };

  const clearCart = async () => {
    try {
      await api.clearCart();
      setCartItems([]);
    } catch (error) {
      toast.error("РћС€РёР±РєР° РїСЂРё РѕС‡РёСЃС‚РєРµ РєРѕСЂР·РёРЅС‹");
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, isLoading }}>
      {children}
    </CartContext.Provider>
  );
};
