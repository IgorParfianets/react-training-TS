import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  return (
    <div className="border p-2 rounded flex flex-col items-center">
      <img src={product.image} className="w-1/3" alt={product.title} />
      <p>{product.title}</p>
      <br />
      <p className="text-center">{product.description}</p>
      <p className="font-bold">{product.price}$</p>
    </div>
  );
}
