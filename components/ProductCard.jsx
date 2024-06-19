import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <div className="self-auto  rounded-md shadow-md">
      <Link
        href={`/product/${p.slug}`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <Image
          width={300}
          height={300}
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          className="h-auto md:h-[300px] overflow-hidden"
        />
        <div className="p-2 text-black/[0.9]  py-2 gap-4 ">
          <h2 className="text-xs md:text-lg font-medium h-[60px] ">{p.name}</h2>
          <div className="flex items-center text-black/[0.5] h-[35px] mt-4">
            <p className="text-xs mr-2 md:text-lg font-semibold">$ {p.price}</p>

            {p.original_price && (
              <>
                <p className="text-xs md:text-base  font-medium line-through">
                  &#8377;{p.original_price}
                </p>
                <p className=" text-xs ml-auto md:text-base font-medium text-green-500">
                  {getDiscountedPricePercentage(p.original_price, p.price)}% off
                </p>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
