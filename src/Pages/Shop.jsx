import React, { useEffect, useState } from "react";

import Hero from "../Components/Hero/Hero";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";
import getImageMapping from "../Components/Helpers/index";

const Shop = () => {
  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const images = getImageMapping();

  const fetchInfo = () => {
    fetch("https://sedona-backend.onrender.com/popularinwomen")
      .then((res) => res.json())
      .then((data) => {
        let mappedData = data?.map((row, index) => {
          const image = images?.filter((k) => k?.id === row?.id)?.[0]?.image;
          return {
            ...row,
            image: image,
          };
        });
        setPopular(mappedData);
      });
    fetch("https://sedona-backend.onrender.com/newcollections")
      .then((res) => res.json())
      .then((data) => {
        let mappedData = data?.map((row, index) => {
          const image = images?.filter((k) => k?.id === row?.id)?.[0]?.image;
          return {
            ...row,
            image: image,
          };
        });
        setNewCollection(mappedData);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <Hero />
      <Popular data={popular} />
      <Offers />
      <NewCollections data={newcollection} />
      <NewsLetter />
    </div>
  );
};

export default Shop;
