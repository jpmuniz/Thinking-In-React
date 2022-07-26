import React from "react";

export interface ProductCategoryRowProps {
  title: string;
}

export const ProductCategoryRow = ({ title }: ProductCategoryRowProps) => (
  <h2>{title}</h2>
);
