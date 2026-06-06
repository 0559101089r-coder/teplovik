import { useParams } from "react-router-dom";
import { Breadcrumb, Spin, Result } from "antd";
import { useBrandById } from "./module/brand";
import { useProducts } from "../catalogPage/module/catalog";
import CatalogCard from "../catalogPage/CatalogCard";

export default function BrandDetailPage() {
  const { id } = useParams();
  const { data: brand, isLoading: isBrandLoading, isError: isBrandError } = useBrandById(id);
  const { data: productsData, isLoading: isProductsLoading, isError: isProductsError } = useProducts({ brand: id });

  if (isBrandLoading || isProductsLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#F9F9F9]">
        <Spin size="large" tip="Загрузка данных бренда..." />
      </div>
    );
  }

  if (isBrandError || isProductsError) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#F9F9F9]">
        <Result
          status="error"
          title="Ошибка загрузки"
          subTitle="Не удалось загрузить данные о бренде или его товары."
        />
      </div>
    );
  }

  const products = productsData?.results || [];

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-6">
        <Breadcrumb
          separator=" > "
          items={[
            { title: "Главная", href: "/" },
            { title: "Бренды", href: "/brand" },
            { title: brand?.name || "Бренд" },
          ]}
        />
      </div>

      <div className="flex items-center gap-6 mb-10">
        {brand?.image && (
          <img src={brand.image} alt={brand.name} className="h-16 object-contain" />
        )}
        <h1 className="text-3xl font-bold">{brand?.name}</h1>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <CatalogCard key={product.id} product={{ ...product, title: product.name }} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl font-medium">У этого бренда пока нет товаров</p>
        </div>
      )}
    </div>
  );
}
