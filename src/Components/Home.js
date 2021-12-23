import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [listProduct, setListProduct] = useState(null);

  useEffect(() => {
    axios({
      url: "https://airbnb.cybersoft.edu.vn/api/locations",
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
            {/* react-router-dom */}
            <Link to={`/product?id=${item._id}&img=${item.image}`}>
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
