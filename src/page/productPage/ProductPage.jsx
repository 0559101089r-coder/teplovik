import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Breadcrumb, Spin, Result } from "antd";
import manufacturerLogo from "./pictures/brand.svg";
import addToCartBtn from "./pictures/cart.svg";
import pdfIcon from "./pictures/pdfIcon.svg";
import Counter from "../../counter/Counter";
import useCounterStore from "../../counter/store";
import { CartContext } from "../../CardContext";
import { useProductById } from "./module/product";

export default function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const { data: product, isLoading, isError } = useProductById(id);

  const sizes = [20, 25, 32, 40, 50, 63];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const { getCount } = useCounterStore();
  const count = getCount(id);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#F9F9F9]">
        <Spin size="large" tip="Загрузка товара..." />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#F9F9F9]">
        <Result
          status="error"
          title="Товар не найден"
          subTitle="Не удалось загрузить данные о товаре. Пожалуйста, попробуйте позже."
        />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, qty: count });
    navigate("/cart");
  };

  return (
    <div className="w-full bg-[#F9F9F9] min-h-screen pb-20">
      <div className="p-5">
        <Breadcrumb
          separator="/"
          items={[
            { title: "Главная", href: "/" },
            { title: "Каталог", href: "/catalog" },
            { title: product.name },
          ]}
        />
      </div>

      <div className="px-5 py-3 block md:flex gap-15">
        <div className="w-full md:w-[42%]">
          <img
            src={product.image}
            className="rounded-xl w-full"
            alt={product.name}
          />
        </div>

        <div className="w-full md:w-[40%]">
          <h1 className="text-[32px] font-bold leading-tight mb-4">
            {product.name}
          </h1>

          <div className="text-[#6B7280] text-[15px] mb-5">
            Код: {product.id}
          </div>

          <div className="mb-6 flex items-center gap-3">
            <div className="text-[13px] text-[#6B7280]">Производитель:</div>
            <img src={manufacturerLogo} className="h-8" />
          </div>

          <div className="mb-6">
            <div className="text-[16px] font-medium mb-4">Размер:</div>
            <div className="flex gap-4">
              {product.sizes ? (
                <button
                  className="bg-black text-white border rounded-md w-[50px] h-[50px] flex items-center justify-center text-[16px]"
                >
                  {product.sizes}
                </button>
              ) : (
                sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border rounded-md w-[50px] h-[50px] flex items-center justify-center text-[16px] ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-[#F9F9F9] border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))
              )}
            </div>
          </div>

          <div className="text-[35px] font-bold mb-1">{product.price} сом</div>

          <div className="mb-6 flex flex-col md:flex-row items-start md:items-center gap-2 text-[13px] text-gray-800">
            <p>Наличие на центральном складе:</p>
            <p className="text-[#FF0505] font-medium">
              {product.quantities > 0 ? `В наличии: ${product.quantities}` : "Уточняйте в магазинах"}
            </p>
            <p className="text-gray-500 italic">
              (Обновлено 17.10.2025 09:18)
            </p>
          </div>

          <div className="mb-6 flex items-center gap-4">
            <div className="text-[15px] font-medium text-[#374151]">Количество:</div>
            <Counter productId={product.id} />
          </div>

          <img
            src={addToCartBtn}
            className="w-[500px] cursor-pointer select-none hover:scale-110 transition-transform"
            onClick={handleAddToCart}
            alt="Добавить в корзину"
          />
        </div>
      </div>

      <div className="max-w-[470px] px-5 mt-4">
        <div className="bg-white border border-gray-300 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-[16px] font-medium">Паспорт</span>
            <img src={pdfIcon} className="w-5" />
          </div>

          <div className="h-px bg-gray-300" />

          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-[16px] font-medium">
              Сертификат соответствия
            </span>
            <img src={pdfIcon} className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
