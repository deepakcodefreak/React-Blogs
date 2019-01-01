import JSONplaceholder from '../apis/JSONplaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => {
    return async (dispatch,getState)=>{

        await dispatch(fetchPosts());

        // const userIds = _.uniq(_.map(getState().posts,'userId'));
        // userIds.forEach((id)=>{
        //      dispatch(fetchUser(id));
        //     })
        
        _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(el=>dispatch(fetchUser(el)))
        .value();
   
    
    }
    
}

export const fetchPosts = ()=>{
    return  async (dispatch,getState)=>{
        const response  = await JSONplaceholder.get('/posts');
        dispatch({type:'FETCH_POSTS',payload:response.data})
    }
}

export const fetchUser = (id)=>{
    return async (dispatch,getState) =>{
        const response = await JSONplaceholder.get(`/users/${id}`)
        dispatch({type: 'FETCH_USER',payload:response.data})
    }
}

//Memoize way using lodash


// export const fetchUser = (id)=>dispatch=>{
//     _fetchUser(id,dispatch);
// }


// const _fetchUser = _.memoize(async (id,dispatch)=>{
//     const response = await JSONplaceholder.get(`/users/${id}`)
//     dispatch({type: 'FETCH_USER',payload:response.data})
// })