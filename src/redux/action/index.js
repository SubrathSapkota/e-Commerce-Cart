export const addtocart = (id, name, image, price, quantity) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: id,
      image: image,
      name: name,
      price: price,
      orginalPrice:price,
      quantity:quantity,
    },
  };
};

export const deleteFromCart = (id) => {
  return {
    type: "DELETE_FROM_CART",
    payload: id,
  };
};
export const incrementCart = (id) => {
  return {
    type: "INCREMENT_CART",
    payload: id,
  };
};
export const decrementCart = (id) => {
  return {
    type: "DECREMENT_CART",
    payload: id,
  };
};


