import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import AppRouter from "./Router";
import messagesInTurkish from "./lang/tr.json"
const App = () => {
  return (
    <ReduxProvider store={store}>
      <IntlProvider messages={messagesInTurkish} locale="tr" defaultLocale="en">
          <AppRouter />
      </IntlProvider>
    </ReduxProvider>
  );
};
export default App;
