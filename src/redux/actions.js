export const ADD_BILL = "ADD_BILL";
export const SET_SETCATEGORY = "SET_SETCATEGORY";




export const addBill = content => ({
  type: ADD_BILL,
  payload: {
    content
  }
});



export const set_s = filter => ({ type: SET_SETCATEGORY, payload: { filter } });
