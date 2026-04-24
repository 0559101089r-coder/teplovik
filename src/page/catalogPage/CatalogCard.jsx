import { useContext } from "react";
import { CartContext } from "../../CardContext";
import AddToCartButton from "../../catalogImages/add.svg";
import SizeSelector from '../../ui/SizeSelector';
import ColorSelector from '../../ui/ColorSelector';
import { Link } from "react-router-dom";
import Counter from "../../counter/Counter";

export default function CatalogCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-[#FFFFFF] rounded-2xl p-6 flex flex-col justify-between animate-fade-in hover-lift">
      <Link to={`/product/${product.id}`}>
        <img src={product?.img ?? product?.image} className="w-full h-[170px] object-contain mb-8" alt={product.title} />
        <h3 className="text-lg font-roboto font-normal mb-3">{product.title}</h3>
        <p className="text-[#FF0505] text-xl font-roboto font-bold mb-4">{product.price} сом</p>
      </Link>

      {product.option === 'size' ? <SizeSelector type={product.type} /> : product.option === 'color' ? <ColorSelector /> : null}

      <img
        src={AddToCartButton}
        alt="Добавить в корзину"
        className="mb-4 cursor-pointer select-none hover:scale-110 transition-transform"
        onClick={handleAddToCart}
      />

      <div className="flex justify-center mt-2">
        <Counter productId={product.id} />
      </div>
    </div>
  );
}

