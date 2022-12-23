import { useState, useEffect, useCallback } from "react";

import { mockDataBase } from "../../../src/database";

const useProductTable = () => {
  const [inputFromUser, setInputFromUser] = useState("");
  const [onlyProductInStock, setOnlyProductInStock] = useState(false);
  const [sportingsGoodsValue, setSportingsGoodsValue] = useState(mockDataBase);
  const [electronicsValue, setElectronicsValue] = useState(mockDataBase);

  const IS_SPORTING_GOODS = "Sporting Goods";
  const IS_ELECTRONICS = "Electronics";

  const handleChangeInputText = (value: string) => setInputFromUser(value);

  const handleChangeShowProductInStock = () =>
    setOnlyProductInStock(!onlyProductInStock);

  const manageProductTable = useCallback(
    (inputFromUser: string) => {
      const responseFilterData = filterInputByUser(inputFromUser);
      checkIfSportingsGoodsExistis(responseFilterData);
      checkIfElectronicsExistis(responseFilterData);
      hasProductInStock();
    },
    [electronicsValue, onlyProductInStock, sportingsGoodsValue]
  );

  const hasProductInStock = () => {
    if (onlyProductInStock) {
      hasSportingsGoodsInStock();
      hasElectronicsInStock();
    }
  };

  const filterInputByUser = (inputFromUser: string) =>
    mockDataBase.filter((data) => data.name.indexOf(inputFromUser) !== -1);

  const checkIfSportingsGoodsExistis = (responseFilterData: any) =>
    setSportingsGoodsValue(
      responseFilterData.filter(
        (data: any) => data.category === IS_SPORTING_GOODS
      )
    );

  const hasSportingsGoodsInStock = () =>
    setSportingsGoodsValue(
      sportingsGoodsValue.filter((data) => data.stocked === onlyProductInStock)
    );

  const checkIfElectronicsExistis = (responseFilterData: any) =>
    setElectronicsValue(
      responseFilterData.filter((data: any) => data.category === IS_ELECTRONICS)
    );

  const hasElectronicsInStock = () =>
    setElectronicsValue(
      electronicsValue.filter((data) => data.stocked === onlyProductInStock)
    );

  useEffect(() => {
    manageProductTable(inputFromUser);
  }, [manageProductTable, inputFromUser]);

  return {
    handleChangeInputText,
    handleChangeShowProductInStock,
    electronicsValue,
    sportingsGoodsValue,
  };
};

export { useProductTable };
