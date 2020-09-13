import React from "react";
import { useSelector } from "react-redux";
import { PagesWrapper } from "components/atoms/PagesWrapper/PagesWrapper";
import PagesCards from "components/molecules/PagesCards/PagesCards";

const SweatersPage = () => {
  const data = useSelector(state => state.sweaters);

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
          clothType="sweaters"
          shopCart
        />
      ))}
    </PagesWrapper>
  );
};

export default SweatersPage;
