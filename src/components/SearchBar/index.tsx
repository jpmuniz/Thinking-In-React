import { Content } from "./style";

export interface SearchBarProps {
  onchangeInputText: (value: string) => void;
  onchangeCheckBox: () => void;
}

export const SearchBar = ({
  onchangeInputText,
  onchangeCheckBox,
}: SearchBarProps) => (
  <Content>
    <input
      type="text"
      onChange={(e) => onchangeInputText(e.target.value)}
      placeholder="Search..."
    />
    <input type="checkbox" onChange={onchangeCheckBox} />
  </Content>
);
