import { IProduct } from "../models";
import { useState } from "react";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-700";
  const btnClasses = ["py-2 px-4 border rounded", btnBgClassName];

  return (
    <div className="border p-2 rounded flex flex-col items-center">
      <img src={product.image} className="w-1/3" alt={product.title} />
      <p>{product.title}</p>

      <p className="font-bold">{product.price}$</p>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide" : "Show"}
      </button>

      {details && (
        <div>
          <p className="text-center">{product.description}</p>
        </div>
      )}
    </div>
  );
}
