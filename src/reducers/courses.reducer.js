export function courses(defStore = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log('within course reducer');
      return defStore;
    default:
      return defStore; // store must be return - new store data
  }
}
