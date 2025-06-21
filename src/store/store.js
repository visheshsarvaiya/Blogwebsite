import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice
        //TODO: add more slices here for posts
    }
});


export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import authSlice from './authSlice';
// import postSlice from './postSlice'; // Manages posts
// import commentSlice from './commentSlice'; // Manages comments
// import likeSlice from './likeSlice'; // Manages likes

// const store = configureStore({
//     reducer: {
//         auth: authSlice,
//         post: postSlice,   // Handles post-related state
//         comment: commentSlice, // Handles comments
//         like: likeSlice  // Handles likes
//     }
// });

// export default store;
