import { configureStore } from '@reduxjs/toolkit';

import home from "../views/Home/homeReducer"

export default configureStore({
  reducer: {
    home: home,
  },
});
