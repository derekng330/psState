export default function cartReducer(cart, action) {
  const { id, sku, quantity } = action;
  switch (action.type) {
    case "empty":
      return [];
    case "add":
      // lookup javascript destructing and understand how you do the following line

      const itemInCart = cart.find((i) => i.sku === sku);
      if (itemInCart) {
        return cart.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...cart, { id, sku, quantity: 1 }];
      }
    case "updateQuantity":
      if (quantity === 0) {
        return cart.filter((i) => i.sku !== sku);
      } else {
        return cart.map((i) =>
          i.sku === sku ? { ...i, quantity: quantity } : i
        );
      }
    default:
      throw new Error("Unhandled action " + action.type);
  }
}
