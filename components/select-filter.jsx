import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui";

const SelectFilter = (props) => {
  const { opt } = props;

  return (
    <Select>
      <SelectTrigger className="w-[180px]"></SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {opt?.map((item, idx) => (
            <SelectItem value={item?.name} key={`${item?.name}-${idx}`}>
              {item?.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectFilter;
