import { configureStore } from '@reduxjs/toolkit';

import home from "./homeReducer";
import admin from "./adminReducer";

export default configureStore({
  reducer: {
    home: home,
    admin
  },
});
