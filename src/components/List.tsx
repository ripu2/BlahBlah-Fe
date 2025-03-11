import React from "react";
import { List } from "@mui/material";

type CustomListProps<T> = {
  items: T[];
  ListItemComponent: React.FC<{ item: T }>;
};

const CustomList = <T,>({ items, ListItemComponent }: CustomListProps<T>) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItemComponent key={index} item={item} />
      ))}
    </List>
  );
};

export default CustomList;