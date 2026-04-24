import { useContext } from "react";
import { CartContext } from "../../CardContext";
import AddToCartButton from "./picsNovinki/CartButton.svg";
import SizeSelector from "../../ui/SizeSelector";
import ColorSelector from "../../ui/ColorSelector";
import { Link } from "react-router-dom";
import Counter from "../../counter/Counter";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const renderOptions = () => {
    switch (product.options) {
      case "size":
        return <SizeSelector />;
      case "color":
        return <ColorSelector />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#FFFFFF] rounded-2xl p-6 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          className="w-full h-40 object-contain mb-4"
          alt={product.title}
        />

        <h3 className="text-lg font-roboto font-normal mb-3">
          {product.title}
        </h3>

        <p className="text-[#FF0505] text-xl font-roboto font-bold mb-4">
          {product.price} сом
        </p>
      </Link>

      {renderOptions()}

      <img
        src={AddToCartButton}
        alt="Добавить в корзину"
        className="cursor-pointer select-none hover:scale-110 transition-transform mb-2"
        onClick={handleAddToCart}
      />

      <div className="flex justify-center mt-2">
        <Counter productId={product.id} />
      </div>
    </div>
  );
}
