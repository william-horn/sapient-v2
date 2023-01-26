console.log('running custom hook code');
export {};
// import { useState, useEffect } from 'react';
// import { isClient } from '../lib/helpers/machine';

// const useLocalStorageState = (key, initialValue) => {
//   const [_state, _setState] = useState(() => {
//     if (isClient()) {
//       const saved = JSON.parse(localStorage.getItem(key));
//       if (saved) return saved;
//     }

//     if (initialValue instanceof Function) return initialValue();
//     return initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(_state));
//   }, [_state])

//   return [_state, _setState];
// }

// export default useLocalStorageState;

