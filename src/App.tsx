import { FilterableProductTable } from "./components/FilterableProductTable";

import { GlobalStyle } from "./globalStyle";

import { mockDataBase } from "./database";

function App() {
  return (
    <>
      <GlobalStyle />
      <FilterableProductTable mockDataBase={mockDataBase} />
    </>
  );
}

export default App;
