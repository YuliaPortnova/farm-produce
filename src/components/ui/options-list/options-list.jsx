import React from "react";
import { List, Property, Value, Group } from "./styles";

function OptionsList({ list = [] }) {
  return (
    <List>
      {list.map((option) => (
        <Group key={option.property}>
          <Property>{option.property}:&ensp;</Property>
          <Value>{option.value}</Value>
        </Group>
      ))}
    </List>
  );
}

export default OptionsList;
