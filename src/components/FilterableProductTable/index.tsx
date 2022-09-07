import { useState, useEffect, useCallback } from "react";
import { ProductTable } from "../ProductTable";
import { SearchBar } from "../SearchBar";

import { Container } from "./style";

export interface ProductTableType {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface ProductTableProps {
  mockDataBase: ProductTableType[];
}

export const FilterableProductTable = ({ mockDataBase }: ProductTableProps) => {
  const [inputFromUser, setInputFromUser] = useState("");
  const [onlyProductInStock, setOnlyProductInStock] = useState(false);
  const [sportingsGoodsValue, setSportingsGoodsValue] = useState(mockDataBase);
  const [electronicsValue, setElectronicsValue] = useState(mockDataBase);

  const IS_SPORTING_GOODS = "Sporting Goods";
  const IS_ELECTRONICS = "Electronics";

  const handleChange = useCallback(
    (inputFromUser: string) => {
      const response = mockDataBase.filter(
        (data) => data.name.indexOf(inputFromUser) !== -1
      );
      setSportingsGoodsValue(
        response.filter((data) => data.category === IS_SPORTING_GOODS)
      );
      setElectronicsValue(
        response.filter((data) => data.category === IS_ELECTRONICS)
      );
      if (onlyProductInStock) {
        setSportingsGoodsValue(
          sportingsGoodsValue.filter(
            (data) => data.stocked === onlyProductInStock
          )
        );
        setElectronicsValue(
          electronicsValue.filter((data) => data.stocked === onlyProductInStock)
        );
      }
    },
    [electronicsValue, mockDataBase, onlyProductInStock, sportingsGoodsValue]
  );

  const setIsSportingsGoods = useCallback(() => {
    const response = mockDataBase.filter(
      (data) => data.category === IS_SPORTING_GOODS
    );
    if (onlyProductInStock) {
      setSportingsGoodsValue(
        response.filter((data) => data.stocked === onlyProductInStock)
      );
      return;
    }

    setSportingsGoodsValue(response);
  }, [mockDataBase, onlyProductInStock]);

  const setIsElectronics = useCallback(() => {
    const response = mockDataBase.filter(
      (data) => data.category === IS_ELECTRONICS
    );
    if (onlyProductInStock) {
      setElectronicsValue(
        response.filter((data) => data.stocked === onlyProductInStock)
      );
      return;
    }
    setElectronicsValue(response);
  }, [mockDataBase, onlyProductInStock]);

  useEffect(() => {
    if (inputFromUser) {
      handleChange(inputFromUser);
    }
  }, [handleChange, inputFromUser]);

  useEffect(() => {
    setIsSportingsGoods();
    setIsElectronics();
  }, [setIsElectronics, setIsSportingsGoods]);

  return (
    <Container>
      <SearchBar
        onchangeInputText={(value) => setInputFromUser(value)}
        onchangeCheckBox={() =>
          setOnlyProductInStock(onlyProductInStock ? false : true)
        }
      />
      <ProductTable
        electronics={electronicsValue}
        sportingGoods={sportingsGoodsValue}
      />
    </Container>
  );
};
