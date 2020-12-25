export const actionTypes = {
  INCREMENT: "INCREMENT",
};

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.Type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + action.count,
      };
    default:
      return state;
  }
};
