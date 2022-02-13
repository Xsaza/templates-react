import { createStore } from 'redux';

// import { userReducer } from './user/user.reducer';
import { rootReducer } from './root.reducer';

export const store = createStore(rootReducer);
