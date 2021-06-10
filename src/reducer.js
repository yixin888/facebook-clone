export const initialState = {
    user: null,
};

 export const actionTypes = {
     SER_USER: "SET_USER",
 };

 const reducer = (state, action) => {
     console.log(action);
     switch(action.type) {
         case actionTypes.SET_USER:
             return {
                 ...state,
                 user: action.user,
             };

         deault:
            return state;
     }
 };

 export default reducer;