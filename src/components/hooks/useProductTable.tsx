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

  const handleChangeProductInStock = () =>
    setOnlyProductInStock(!onlyProductInStock);

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
    [electronicsValue, onlyProductInStock, sportingsGoodsValue]
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
  }, [onlyProductInStock]);

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
  }, [onlyProductInStock]);

  useEffect(() => {
    handleChange(inputFromUser);
  }, [handleChange, inputFromUser]);

  useEffect(() => {
    setIsSportingsGoods();
    setIsElectronics();
  }, [setIsElectronics, setIsSportingsGoods]);

  return {
    handleChangeInputText,
    handleChangeProductInStock,
    electronicsValue,
    sportingsGoodsValue,
  };
};

export { useProductTable };
