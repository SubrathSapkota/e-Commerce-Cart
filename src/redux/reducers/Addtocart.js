const initialState = {
  counter: 0,
  productID: [],
  totalPrice: 0,
};

const Addtocart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (!state.productID.find((p) => p.id === action.payload.id)) {
        const productToAdd = {
          ...action.payload,
          quantity: 1,
          originalPrice: action.payload.price,
        };
        return {
          ...state,
          counter: state.counter + 1,
          productID: [...state.productID, productToAdd],
          totalPrice: state.totalPrice + productToAdd.originalPrice,
        };
      }
      return state;

    case "DELETE_FROM_CART":
      const productToDelete = state.productID.find(
        (p) => p.id === action.payload
      );
      const updatedState = state.productID.filter(
        (p) => p.id !== action.payload
      );
      return {
        ...state,
        counter: state.counter - 1,
        productID: updatedState,
        totalPrice: productToDelete
          ? state.totalPrice -
            productToDelete.originalPrice * productToDelete.quantity
          : state.totalPrice,
      };

    case "INCREMENT_CART":
      return {
        ...state,
        productID: state.productID.map((p) =>
          p.id === action.payload && p.quantity < 6
            ? {
                ...p,
                quantity: p.quantity + 1,
                price: p.originalPrice * (p.quantity + 1),
              }
            : p
        ),
        totalPrice:
          state.totalPrice +
          (state.productID.find((p) => p.id === action.payload)
            ?.originalPrice || 0),
      };

    case "DECREMENT_CART":
      const decrementPrice =
        state.productID.find((p) => p.id === action.payload)?.originalPrice ||
        0;
      if (state.totalPrice - decrementPrice < 0) {
        return state;
      }
      return {
        ...state,
        productID: state.productID.map((p) =>
          p.id === action.payload && p.quantity > 1
            ? {
                ...p,
                quantity: p.quantity - 1,
                price: p.originalPrice * (p.quantity - 1),
              }
            : p
        ),
        totalPrice: state.totalPrice - decrementPrice,
      };

    default:
      return state;
  }
};

export default Addtocart;
