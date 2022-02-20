import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import NotificationItem from "./Items";

function All() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://tunacoding.com/api/articles?&relations[]=user&relations[]=tags&page=1&title=&tag_ids[]=&=&=&excluded_tag_ids[]=&=&=&order_by=&=&order_by_direction=desc&=Gi%E1%BA%A3m%20d%E1%BA%A7n"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
      });
  }, []);
  return (
    <Box component="div">
      <NotificationItem data={data}></NotificationItem>
    </Box>
  );
}

export default All;
