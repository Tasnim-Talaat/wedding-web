const INITIAL_VALUE={
        isAdmin:localStorage.getItem("isAdmin")
}
export default function changeReducer(state=INITIAL_VALUE,action){
        switch (action.type) {
                case 'IS_ADMIN':
                        return{
                        ...state,
                        isAdmin:action.payload
                        };
        
                default:
                        return state;
        }
}