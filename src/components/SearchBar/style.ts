import styled from "styled-components";

import { search_border } from "../../color";
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: flex-start;
  border: 2px solid ${search_border};
  padding: 0.5rem;

  input:focus {
    outline: none;
  }

  input:nth-child(2) {
    margin: 0.1rem 0;
  }
`;

export { Content };
