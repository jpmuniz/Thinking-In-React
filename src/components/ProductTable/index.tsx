import React from "react";

import { ProductRow } from "../ProductRow";
import { ProductCategoryRow } from "../ProductCategoryRow";

export interface ProductTableType {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface ProductTableProps {
  sportingGoods: ProductTableType[];
  electronics: ProductTableType[];
}

export const ProductTable = ({
  sportingGoods,
  electronics,
}: ProductTableProps) => {
  const SPORTING_GOODS = "Sporting Goods";
  const ELECTRONICS = "Electronics";
  const SIZE = 0;
  const HAS_NO_VALUE = "Has no value to show";

  return (
    <>
      <h2>ProductTable</h2>
      {sportingGoods.length > SIZE && (
        <ProductCategoryRow title={SPORTING_GOODS} />
      )}
      <ProductRow data={sportingGoods} />
      {electronics.length > SIZE && <ProductCategoryRow title={ELECTRONICS} />}
      <ProductRow data={electronics} />

      {electronics.length === SIZE && sportingGoods.length === SIZE && (
        <>{HAS_NO_VALUE}</>
      )}
    </>
  );
};
