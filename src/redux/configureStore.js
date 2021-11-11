import { configureStore } from '@reduxjs/toolkit';
import reducer from './message/message';

const store = configureStore({
  reducer,
});

export default store;
