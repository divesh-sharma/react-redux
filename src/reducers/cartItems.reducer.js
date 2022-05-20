export function cartItems(defStore = [], action) {
  switch (action.type) {
    case "ADD_COURSE_TO_CART":
      return [...defStore, action.courseItem];

    default:
      return defStore;
  }
}