import React from "react";
import { useSelector } from "react-redux";
import { PagesWrapper } from "components/atoms/PagesWrapper/PagesWrapper";
import PagesCards from "components/molecules/PagesCards/PagesCards";

const BootsPage = () => {
  const data = useSelector(state => state.boots);

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
          clothType="boots"
        />
      ))}
    </PagesWrapper>
  );
};

export default BootsPage;
