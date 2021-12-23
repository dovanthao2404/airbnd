import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
const queryString = require("query-string");

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ListProduct(props) {
  // react-router-dom
  // let query = useQuery();
  // let id = query.get("id");
  // let img = query.get("img");

  // thư viện query-string
  const { id, img } = queryString.parse(props.location.search);

  const [listProduct, setListProduct] = useState(null);
  useEffect(() => {
    axios({
      url: `https://airbnb.cybersoft.edu.vn/api/rooms?locationId=${id}`,
      method: "GET",
      headers: {
        tokenByClass:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTk4MDgwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjUwMTI4NDAwfQ.43sCqLD_V6VUJP8qZLQSWO07uCIDI7bS5MGR92deYb8",
      },
    }).then((result) => {
      console.log(result);
      setListProduct(result.data);
    });
  }, []);
  return (
    <div>
      {listProduct?.map((item, index) => {
        return (
          <div key={index}>
            <img style={{ width: 200 }} src={img} alt="" />
            <p>{item.name}</p>
            <p>giường ngủ {item.bedRoom}</p>
          </div>
        );
      })}
    </div>
  );
}
