import React from "react";
import { useSelector } from "react-redux";
import { PagesWrapper } from "components/atoms/PagesWrapper/PagesWrapper";
import PagesCards from "components/molecules/PagesCards/PagesCards";

const ShirtsPage = () => {
  const data = useSelector(state => state.shirts);

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
          clothType="shirts"
          shopCart
        />
      ))}
    </PagesWrapper>
  );
};

export default ShirtsPage;
