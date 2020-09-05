import tShirtSmall from "assets/images/t-shirt-phone.png";
import sweatersSmall from "assets/images/sweaters-phone.png";
import shirtSmall from "assets/images/shirts-phone.png";

const initialState = {
  cart: [],
  tShirts: [
    {
      id: 1,
      img: tShirtSmall,
      name: "Koszulka w paski (biały)",
      price: 89,
      inverse: false,
      amount: 5
    },
    {
      id: 2,
      img: sweatersSmall,
      name: "Koszulka w paski (kremowy)",
      price: 109,
      inverse: true
    },
    {
      id: 3,
      img: shirtSmall,
      name: "Koszulka (czarny)",
      price: 129,
      inverse: false,
      amount: 5
    }
  ],
  shirts: [
    {
      id: 1,
      img: tShirtSmall,
      name: "koszula w paski (biały)",
      price: 89,
      inverse: false,
      amount: 5
    },
    {
      id: 2,
      img: sweatersSmall,
      name: "koszula w paski (kremowy)",
      price: 109,
      inverse: true,
      amount: 5
    },
    {
      id: 3,
      img: shirtSmall,
      name: "koszula (czarny)",
      price: 129,
      inverse: false,
      amount: 5
    }
  ],
  sweaters: [
    {
      id: 1,
      img: tShirtSmall,
      name: "Sweter w paski (biały)",
      price: 89,
      inverse: false,
      amount: 5
    },
    {
      id: 2,
      img: sweatersSmall,
      name: "Sweter w paski (kremowy)",
      price: 109,
      inverse: true,
      amount: 5
    },
    {
      id: 3,
      img: shirtSmall,
      name: "Sweter (czarny)",
      price: 129,
      inverse: false,
      amount: 5
    }
  ],
  trousers: [
    {
      id: 1,
      img: tShirtSmall,
      name: "spodnie w paski (biały)",
      price: 89,
      inverse: false,
      amount: 5
    },
    {
      id: 2,
      img: sweatersSmall,
      name: "spodnie w paski (kremowy)",
      price: 109,
      inverse: true,
      amount: 5
    },
    {
      id: 3,
      img: shirtSmall,
      name: "spodnie (czarny)",
      price: 129,
      inverse: false,
      amount: 5
    }
  ],
  boots: [
    {
      id: 1,
      img: tShirtSmall,
      name: "buty w paski (biały)",
      price: 89,
      inverse: false,
      amount: 5
    },
    {
      id: 2,
      img: sweatersSmall,
      name: "buty w paski (kremowy)",
      price: 109,
      inverse: true,
      amount: 5
    },
    {
      id: 3,
      img: shirtSmall,
      name: "buty (czarny)",
      price: 129,
      inverse: false,
      amount: 5
    }
  ]
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, clothType } = action.payload;

      const selectedCloth = state[clothType].find(item => item.id === id);

      return {
        ...state,
        cart: [...state.cart, selectedCloth]
      };

    case "REMOVE_FROM_CART":
      const { itemId } = action.payload;

      return {
        ...state,
        cart: state.cart.filter(item => item.id !== itemId)
      };

    default:
      return state;
  }
};

export default storeReducer;
