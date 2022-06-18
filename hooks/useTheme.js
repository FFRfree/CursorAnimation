import React, { useReducer } from 'react';


// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'SET_DARK':
//             return { ...state, theme: 'dark' };
//         case 'SET_LIGHT':
//             return { ...state, theme: 'light' };
//         default:
//             throw new Error();
//     }
// }

// const [themeState, changeTheme] = useReducer(reducer, { theme: 'light' });
let theme = "dark" || "light";


const useTheme = () => {
    return theme;
};



export default useTheme;
