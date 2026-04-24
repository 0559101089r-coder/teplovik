import { useState, useContext } from "react";
import ProductCard from "./NovinkiCard";
import { useNovinki } from "./module/novinki";
import { Spin, Result } from "antd";
import { CartContext } from "../../CardContext";
import AddToCartButton from "./picsNovinki/CartButton.svg";
import Counter from "../../counter/Counter";

export default function Products() {
  const [style, setStyle] = useState("card");
  const { addToCart } = useContext(CartContext);

  const { data: novinkiData, isLoading, isError } = useNovinki();

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#F9F9F9]">
        <Spin size="large" tip="Загрузка новинок..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#F9F9F9]">
        <Result
          status="error"
          title="Ошибка загрузки"
          subTitle="Не удалось загрузить новинки. Пожалуйста, попробуйте позже."
        />
      </div>
    );
  }

  const products = novinkiData?.results || [];

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold">Новинки</h1>
          <p className="text-gray-500">Современные инженерные системы отопления и водоснабжения</p>
        </div>

        <div className="inline-flex rounded-xl overflow-hidden border border-gray-500">
          <button
            onClick={() => setStyle("card")}
            className={`w-8 h-10 flex items-center justify-center transition 
              ${style === "card" ? "bg-[#FF0505]" : "bg-[#121212]"}`}
          >
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2V6H9V2H14ZM14 8V12H9V8H14ZM7 6H2V2H7V6ZM2 8H7V12H2V8ZM2 0C0.896875 0 0 0.896875 0 2V12C0 13.1031 0.896875 14 2 14H14C15.1031 14 16 13.1031 16 12V2C16 0.896875 15.1031 0 14 0H2Z" fill="white"/>
            </svg>
          </button>

          <button
            onClick={() => setStyle("list")}
            className={`w-8 h-10 flex items-center justify-center transition 
              ${style === "list" ? "bg-[#FF0505]" : "bg-[#121212]"}`}
          >
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.75 0C0.334375 0 0 0.334375 0 0.75V2.25C0 2.66563 0.334375 3 0.75 3H2.25C2.66563 3 3 2.66563 3 2.25V0.75C3 0.334375 2.66563 0 2.25 0H0.75ZM5.5 0.5C4.94688 0.5 4.5 0.946875 4.5 1.5C4.5 2.05312 4.94688 2.5 5.5 2.5H14.5C15.0531 2.5 15.5 2.05312 15.5 1.5C15.5 0.946875 15.0531 0.5 14.5 0.5H5.5ZM5.5 5.5C4.94688 5.5 4.5 5.94688 4.5 6.5C4.5 7.05312 4.94688 7.5 5.5 7.5H14.5C15.0531 7.5 15.5 7.05312 15.5 6.5C15.5 5.94688 15.0531 5.5 14.5 5.5H5.5ZM5.5 10.5C4.94688 10.5 4.5 10.9469 4.5 11.5C4.5 12.0531 4.94688 12.5 5.5 12.5H14.5C15.0531 12.5 15.5 12.0531 15.5 11.5C15.5 10.9469 15.0531 10.5 14.5 10.5H5.5ZM0 5.75V7.25C0 7.66563 0.334375 8 0.75 8H2.25C2.66563 8 3 7.66563 3 7.25V5.75C3 5.33437 2.66563 5 2.25 5H0.75ZM0.75 10C0.334375 10 0 10.3344 0 10.75V12.25C0 12.6656 0.334375 13 0.75 13H2.25C2.66563 13 3 12.6656 3 12.25V10.75C3 10.3344 2.66563 10 2.25 10H0.75Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>

      {style === "card" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {products.map((p) => (
            <ProductCard key={p.id} product={product_wrapper(p)} />
          ))}
        </div>
      )}

      {style === "list" && (
        <div className="flex flex-col gap-4 animate-fade-in">
          {products.map((p) => (
            <div
              key={p.id}
              className="w-full bg-white rounded-xl shadow-sm p-4 flex items-center gap-6"
            >
              <div className="w-28 h-28 flex items-center justify-center flex-shrink-0">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-center flex-1">
                <p className="text-gray-700 font-semibold text-lg leading-tight">
                  {p.name}
                </p>
                <p className="text-red-500 font-bold text-xl mt-1">
                  {p.price} сом
                </p>
              </div>

              <button
                onClick={() => addToCart(product_wrapper(p))}
                className="ml-6 w-12 h-12 flex items-center justify-center rounded-xl"
              >
                <img src={AddToCartButton} alt="Добавить в корзину" className="w-[60px] h-[60px]" />
              </button>

              <div>
                <Counter productId={p.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Helper to adapt backend product to existing ProductCard structure if needed
const product_wrapper = (p) => ({
  ...p,
  title: p.name,
});
