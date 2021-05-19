import { configureStore } from '@reduxjs/toolkit';

import settings from "../views/Setting/settingsReducer";
import home from "../views/Home/homeReducer"

export default configureStore({
  reducer: {
    settings: settings,
    home: home,
  },
});
