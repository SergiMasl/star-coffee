import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./_drinks.sass";
import DrinkItem from "./DrinkItem";
import LinkWrapMenu from "../SubMenu/LinkWrapMenu";
import "../SubMenu/_linkMenu.sass";

export default function Drinks() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3001/drinks/${id}`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="drink-container">
      {loading ? (
        "loading"
      ) : (
        <>
          <LinkWrapMenu link={id} />
          <DrinkItem data={data} />
        </>
      )}
    </div>
  );
}
