const initialState = {
  cart: [],
  tShirts: [
    {
      id: 1,
      img:
        "https://cdn.pixabay.com/photo/2020/06/04/06/23/mockup-5257443_960_720.jpg",
      name: "Koszulka (zielona)",
      price: 89,
      inverse: false,
      amount: 5
    },
    {
      id: 2,
      img:
        "https://cdn.pixabay.com/photo/2020/06/04/06/22/mockup-5257434_960_720.jpg",
      name: "Koszulka (biała)",
      price: 109,
      inverse: true
    },
    {
      id: 3,
      img:
        "https://cdn.pixabay.com/photo/2020/06/04/06/23/mockup-5257444_960_720.jpg",
      name: "Koszulka (czerwona)",
      price: 129,
      inverse: false,
      amount: 5
    },
    {
      id: 4,
      img:
        "https://cdn.pixabay.com/photo/2020/06/04/06/22/mockup-5257439_960_720.jpg",
      name: "Koszulka (czarna)",
      price: 119,
      inverse: true,
      amount: 5
    },
    {
      id: 5,
      img:
        "https://cdn.pixabay.com/photo/2020/06/04/06/23/mockup-5257442_960_720.jpg",
      name: "Koszulka (niebieska)",
      price: 149,
      inverse: false,
      amount: 5
    }
  ],
  shirts: [
    {
      id: 11,
      img:
        "https://cdn.pixabay.com/photo/2015/09/02/13/18/person-918986_960_720.jpg",
      name: "koszula w kratę (czarno-czerwona)",
      price: 59,
      inverse: false,
      amount: 5
    },
    {
      id: 12,
      img:
        "https://cdn.pixabay.com/photo/2018/01/11/09/40/woman-3075710_960_720.jpg",
      name: "koszula z falbanami (biała)",
      price: 159,
      inverse: true,
      amount: 5
    },
    {
      id: 13,
      img:
        "https://cdn.pixabay.com/photo/2016/04/19/16/28/model-1338993_960_720.jpg",
      name: "koszula (biała)",
      price: 178,
      inverse: false,
      amount: 5
    },
    {
      id: 14,
      img:
        "https://cdn.pixabay.com/photo/2017/09/19/21/22/fashion-2766686_960_720.jpg",
      name: "koszula (zielona)",
      price: 229,
      inverse: true,
      amount: 5
    },
    {
      id: 15,
      img:
        "https://cdn.pixabay.com/photo/2017/05/29/21/01/womens-2354920_960_720.jpg",
      name: "koszula w pasy (biało-bordowa)",
      price: 109,
      inverse: false,
      amount: 5
    }
  ],
  sweaters: [
    {
      id: 21,
      img:
        "https://cdn.pixabay.com/photo/2015/07/02/10/18/jeans-828693_960_720.jpg",
      name: "Sweter (biały)",
      price: 49,
      inverse: false,
      amount: 5
    },
    {
      id: 22,
      img:
        "https://cdn.pixabay.com/photo/2016/03/09/09/31/woman-1245840_960_720.jpg",
      name: "Sweter (czarny)",
      price: 129,
      inverse: true,
      amount: 5
    },
    {
      id: 23,
      img:
        "https://cdn.pixabay.com/photo/2015/09/05/07/23/girl-923848_960_720.jpg",
      name: "Sweter (biały)",
      price: 169,
      inverse: false,
      amount: 5
    },
    {
      id: 24,
      img:
        "https://cdn.pixabay.com/photo/2017/08/06/13/03/people-2592330_960_720.jpg",
      name: "Sweter w wzory (zielony)",
      price: 199,
      inverse: true,
      amount: 5
    }
  ],
  trousers: [
    {
      id: 25,
      img:
        "https://cdn.pixabay.com/photo/2017/06/08/02/14/girl-2382231_960_720.jpg",
      name: "spodnie (beżowe)",
      price: 89,
      inverse: false,
      amount: 5
    },
    {
      id: 26,
      img:
        "https://cdn.pixabay.com/photo/2015/10/12/14/54/girl-983969_960_720.jpg",
      name: "spodnie jeansy (slim)",
      price: 119,
      inverse: true,
      amount: 5
    },
    {
      id: 27,
      img:
        "https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687_960_720.jpg",
      name: "spodnie jeansy",
      price: 159,
      inverse: false,
      amount: 5
    },
    {
      id: 28,
      img:
        "https://cdn.pixabay.com/photo/2016/11/08/03/41/woman-1807412_960_720.jpg",
      name: "spodnie (czarne)",
      price: 199,
      inverse: true,
      amount: 5
    }
  ],
  boots: [
    {
      id: 33,
      img:
        "https://cdn.pixabay.com/photo/2020/05/26/07/43/skateboard-5221914_960_720.jpg",
      name: "buty Nike (białe)",
      price: 299,
      inverse: false,
      amount: 5
    },
    {
      id: 32,
      img:
        "https://cdn.pixabay.com/photo/2014/09/03/20/15/legs-434918_960_720.jpg",
      name: "buty Converse (białe)",
      price: 399,
      inverse: true,
      amount: 5
    },
    {
      id: 31,
      img:
        "https://cdn.pixabay.com/photo/2017/04/09/18/54/shoes-2216498_960_720.jpg",
      name: "buty adidas (różowe)",
      price: 599,
      inverse: false,
      amount: 5
    },
    {
      id: 34,
      img:
        "https://cdn.pixabay.com/photo/2016/11/29/09/17/feet-1868670_960_720.jpg",
      name: "buty (czarne)",
      price: 389,
      inverse: true,
      amount: 5
    },
    {
      id: 35,
      img:
        "https://cdn.pixabay.com/photo/2017/08/08/00/23/woman-2609573_960_720.jpg",
      name: "buty kozaki (czarne)",
      price: 229,
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

    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
};

export default storeReducer;
