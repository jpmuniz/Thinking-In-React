import React from "react";

import { ListContainer } from "./style";

export interface ProductTableType {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface ProductTableProps {
  data: ProductTableType[];
}

export const ProductRow = ({ data }: ProductTableProps) => {
  return (
    <ListContainer>
      {data.map((data) => (
        <>
          <li key={data.name}>
            {data.name} {data.price}
          </li>
        </>
      ))}
    </ListContainer>
  );
};
