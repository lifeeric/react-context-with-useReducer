# react-context-with-useReducer
This is demo of React.createContext with useReducer for Global State management


### 1 - State
`state/StateProvider.tsx`

```ts
import React, { createContext, useContext, useReducer } from "react";
import { actionTypes, reducer, initialState } from "./reducer";

const AppContext = createContext<any>(null);

interface Props {
  children: any;
}

export const StateProvider: React.FC<Props> = ({ children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

export const useStateValue = () => useContext(AppContext);
```

### 2 - Reducer
`state/reducer.ts`

```ts
export const actionTypes = {
  SET_USER: "SET_USER",
};

export const initialState = {
  user: null,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
  }
};

```

### 3 - Import
`index.tsx`

```tsx
<React.StrictMode>
  <StateProvider>
    <App />
  </StateProvider>
</React.StrictMode>,
```

### 4 - Use it
```ts
import { useStateValue } from "./state/StateProvider";
import "./App.css";

function App() {
  const [state, dispatch] = useStateValue();
  console.log(state);
  return <div className="App">Heloo</div>;
}

```

Dispatch

```ts
 const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
```


