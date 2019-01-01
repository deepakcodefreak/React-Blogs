// export const postsReducer = (state=[],action)=>{
//     switch(action.type){
//         case 'FETCH_POSTS':
//             console.log(action.payload)
//             return action.payload;
//         default:
//            // console.log(state);
//             return state;    
//     }

// }


export const postsReducer = (state=[],action)=>{
    if(action.type === 'FETCH_POSTS'){
        return action.payload;
    }

    return state;
}