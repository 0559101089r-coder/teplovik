import { useContext } from "react";
import { CartContext } from "../../CardContext";
import AddToCartButton from "../../catalogImages/add.svg";
import SizeSelector from '../../ui/SizeSelector';
import ColorSelector from '../../ui/ColorSelector';
import { Link } from "react-router-dom";
import Counter from "../../counter/Counter";

export default function CatalogCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const productName = product?.name ?? product?.title;
  const productImage = product?.image ?? product?.img;
  const productDescription = product?.description?.trim();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-6 flex flex-col justify-between animate-fade-in hover-lift h-full">
      <Link to={`/product/${product.id}`}>
        <img src={productImage} className="w-full h-[150px] sm:h-[170px] object-contain mb-5 sm:mb-6" alt={productName} />
        <h3 className="text-base sm:text-lg font-roboto font-normal mb-2 break-words">{productName}</h3>
        {productDescription && (
          <p className="mb-3 text-sm leading-5 text-gray-500 line-clamp-3">
            {productDescription}
          </p>
        )}
        <p className="text-[#FF0505] text-xl font-roboto font-bold mb-4">{product.price}</p>
      </Link>

      {product.option === 'size' ? <SizeSelector type={product.type} /> : product.option === 'color' ? <ColorSelector /> : null}

      <img
        src={AddToCartButton}
        alt="Добавить в корзину"
        className="mb-4 w-full max-w-[230px] cursor-pointer select-none hover:scale-110 transition-transform"
        onClick={handleAddToCart}
      />

      <div className="flex justify-center mt-2">
        <Counter productId={product.id} />
      </div>
    </div>
  );
}

