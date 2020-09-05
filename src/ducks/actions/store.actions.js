export const addToCart = (id, clothType) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      id,
      clothType
    }
  };
};

export const removeFromCart = itemId => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      itemId
    }
  };
};
