import { useEffect, useState } from "react";

function getApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>
      await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      )
        .then((res) => res.json())
        .then((stuf) => {
          setData(stuf.drinks);
          console.log(data);
          //   console.log(stuf.drinks[1]);
          //   console.log(Object.(stuf.drinks));
        });

    fetchData();
  }, []);

  return data;
}

export default getApi;
