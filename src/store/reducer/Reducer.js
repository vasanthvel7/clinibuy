const initialAuthState = {
  AccessToken: "",
};

const accesstoken = (state, action) => {
  return {
    ...state,
    AccessToken: action.AccessToken,
  };
};

function rootReducer(state = initialAuthState, action) {
  switch (action.type) {
    case "ACCESS_TOKEN":
      return accesstoken(state, action);
  }
}

export { rootReducer };
