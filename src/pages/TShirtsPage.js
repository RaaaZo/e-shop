import React from "react";
import { PagesWrapper } from "components/atoms/PagesWrapper/PagesWrapper";

import PagesCards from "components/molecules/PagesCards/PagesCards";
import { useSelector } from "react-redux";

const TShirtsPage = () => {
  const data = useSelector(state => state.tShirts);

  return (
    <PagesWrapper>
      {data.map(item => (
        <PagesCards
          id={item.id}
          key={item.id}
          name={item.name}
          img={item.img}
          price={item.price}
          inverse={item.inverse}
          clothType="tShirts"
        />
      ))}
    </PagesWrapper>
  );
};

export default TShirtsPage;
