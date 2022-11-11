import React, { useState, useEffect } from "react";

import { Text } from "react-native";
import SelectList from "react-native-dropdown-select-list";
import { Feather } from "@expo/vector-icons";

import axios from "axios";

export const Dropdown = () => {
  const [selected, setSelected] = useState("");

  const [data, setData] = useState([]);

  return (
    <SelectList
      onSelect={() => selected}
      setSelected={setSelected}
      data={data}
      arrowicon={<Feather name="chevron-down" size={12} color={"black"} />}
      searchicon={<Feather name="search" size={12} color={"black"} />}
      search={false}
      boxStyles={{ borderRadius: 0 }}
      defaultOption={{ key: "1", value: "Jammu & Kashmir" }}
    />
  );
};
