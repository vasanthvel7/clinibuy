const React = require("react");
require("./src/pages/common.scss");
const { Provider } = require("react-redux");
const { rootReducer } = require("./src/store/reducer/Reducer");
const { legacy_createStore } = require("redux");

const store = legacy_createStore(rootReducer);

exports.wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
