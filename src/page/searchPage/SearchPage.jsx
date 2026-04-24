import { useSearchParams, Link } from "react-router-dom";
import { useContext } from "react";
import { Spin, Result } from "antd";
import { useSearchCatalog, useSearchNovinki, useSearchPrices } from "./module/search";
import { CartContext } from "../../CardContext";
import pdfIcon from "../pricePage/pricePics/pdf.svg";
import downloadBtn from "../pricePage/pricePics/download.svg";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { addToCart } = useContext(CartContext);

  const catalog = useSearchCatalog(query);
  const novinki = useSearchNovinki(query);
  const prices = useSearchPrices(query);

  const catalogResults = catalog.data?.results || [];
  const novinkiResults = novinki.data?.results || [];
  const priceResults = prices.data?.results || [];

  const isLoading = catalog.isLoading || novinki.isLoading || prices.isLoading;
  const hasResults = catalogResults.length > 0 || novinkiResults.length > 0 || priceResults.length > 0;

  if (!query) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-400">Введите запрос для поиска</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        Результаты поиска: <span className="text-[#FF0505]">"{query}"</span>
      </h1>
      <p className="text-gray-500 mb-8">
        {isLoading ? "Поиск..." : hasResults ? "Найденные товары и прайсы" : ""}
      </p>

      {/* Каталог */}
      {catalog.isLoading ? (
        <SectionLoader label="Поиск в каталоге..." />
      ) : catalogResults.length > 0 ? (
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">📦 Каталог</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogResults.map((product) => (
              <ProductCard key={`cat-${product.id}`} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Новинки */}
      {novinki.isLoading ? (
        <SectionLoader label="Поиск в новинках..." />
      ) : novinkiResults.length > 0 ? (
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">🆕 Новинки</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {novinkiResults.map((product) => (
              <ProductCard key={`nov-${product.id}`} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Прайс */}
      {prices.isLoading ? (
        <SectionLoader label="Поиск в прайсах..." />
      ) : priceResults.length > 0 ? (
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">📋 Прайс</h2>
          <div className="space-y-4">
            {priceResults.map((item) => (
              <div
                key={`price-${item.id}`}
                className="bg-white rounded-xl p-5 flex items-center justify-between shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <img src={pdfIcon} alt="pdf" className="w-10 h-10" />
                  <div>
                    <h3 className="font-semibold text-[18px]">{item.title}</h3>
                    <div className="flex gap-4 text-gray-500 text-[14px] mt-1">
                      <span>{item.size_mb} МБ</span>
                      <span>•</span>
                      <span>Обновлен {item.updated_at}</span>
                    </div>
                  </div>
                </div>

                <a href={item.file} target="_blank" rel="noopener noreferrer">
                  <img
                    src={downloadBtn}
                    alt="download"
                    className="w-[120px] cursor-pointer"
                  />
                </a>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Ничего не найдено */}
      {!isLoading && !hasResults && (
        <div className="py-20 text-center">
          <Result
            status="info"
            title="Ничего не найдено"
            subTitle={`По запросу "${query}" не найдено товаров или прайсов.`}
          />
        </div>
      )}
    </div>
  );
}

function SectionLoader({ label }) {
  return (
    <div className="flex items-center gap-3 py-6">
      <Spin size="small" />
      <span className="text-gray-500">{label}</span>
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          className="w-full h-[170px] object-contain mb-4"
          alt={product.name}
        />
        <h3 className="text-lg font-normal mb-2">{product.name}</h3>
        <p className="text-[#FF0505] text-xl font-bold mb-4">{product.price} сом</p>
      </Link>

      <button
        onClick={() => onAddToCart(product)}
        className="w-full bg-[#121212] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-[#FF0505] transition-colors"
      >
        В корзину
      </button>
    </div>
  );
}
