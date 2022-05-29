import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import AppRouter from "./Router";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppRouter />
    </ReduxProvider>
  );
};
export default App;
