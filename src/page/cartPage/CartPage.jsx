import { useContext } from "react";
import { CartContext } from "../../CardContext";
import { Breadcrumb, Spin } from "antd";
import closeIcon from "./cartPics/close.svg";
import Counter from "../../counter/Counter";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, isLoading, updateQty } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <Spin size="large" tip="Загрузка корзины..." />
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-6">
          <Breadcrumb
            separator=">"
            items={[
              { title: "Главная", href: "/" },
              { title: "Корзина" },
            ]}
          />
        </div>

        <h1 className="text-[32px] font-semibold mb-8">Корзина</h1>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 animate-fade-in">

          <div className="col-span-8">

            <div className="grid grid-cols-12 text-gray-500 text-sm mb-4 px-2">
              <div className="col-span-4 md:col-span-6">Товар</div>
              <div className="col-span-2">Цена</div>
              <div className="col-span-4 md:ml-80col-span-2 text-center">Количество</div>
              <div className="col-span-2 text-right">Сумма</div>
            </div>

            <div className="space-y-5">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 items-center bg-white rounded-xl p-4"
                >
                  <div className="col-span-6 flex items-center gap-4">
                    <img src={item.image} alt="" className="w-20 h-20 object-contain" />
                    <div>
                      <div className="font-semibold leading-tight">{item.title}</div>
                      <div className="text-gray-400 text-sm">Код: {item.code || item.id}</div>
                    </div>
                  </div>

                  <div className="col-span-2 font-medium">
                    {item.price.toLocaleString()} сом
                  </div>

                  <div className="col-span-2 flex justify-center">
                    <Counter 
                      productId={item.id} 
                      onChange={(delta) => updateQty(item.id, delta)} 
                    />
                  </div>

                  <div className="col-span-2 flex items-center justify-end gap-4 font-medium">
                    {(item.price * item.qty).toLocaleString()} сом
                    <img
                      src={closeIcon}
                      className="w-4 cursor-pointer opacity-60 hover:opacity-100"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>

            {cartItems.length > 0 ? (
              <div className="flex items-center justify-between mt-8">
                <a href="/" className="text-gray-500 hover:text-black flex items-center gap-2">
                  ← Продолжить покупки
                </a>

                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 flex items-center gap-2"
                >
                  Очистить корзину
                </button>
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-xl font-medium">Ваша корзина пуста</p>
                <a href="/" className="text-red-600 mt-4 inline-block font-semibold">Начать покупки →</a>
              </div>
            )}
          </div>

          <div className="col-span-8 md:col-span-4">
            <div className="border border-gray-300 rounded-xl p-6 sticky top-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Итого</h3>

              <div className="flex justify-between text-gray-500 mb-3">
                <span>Товары ({cartItems.length} шт.)</span>
                <span>{total.toLocaleString()} сом</span>
              </div>

              <div className="border-t border-gray-300 pt-4 flex justify-between text-lg font-semibold">
                <span>К оплате</span>
                <span>{total.toLocaleString()} сом</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
