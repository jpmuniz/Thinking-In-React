import { ProductTable } from "../ProductTable";
import { SearchBar } from "../SearchBar";

import { useProductTable } from "../hooks/useProductTable";

import { Container } from "./style";

export interface ProductTableType {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export const FilterableProductTable = () => {
  const {
    handleChangeInputText,
    handleChangeShowProductInStock,
    electronicsValue,
    sportingsGoodsValue,
  } = useProductTable();

  return (
    <Container>
      <SearchBar
        onchangeInputText={(value) => handleChangeInputText(value)}
        onchangeCheckBox={() => handleChangeShowProductInStock()}
      />
      <ProductTable
        electronics={electronicsValue}
        sportingGoods={sportingsGoodsValue}
      />
    </Container>
  );
};
