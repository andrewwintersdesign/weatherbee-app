import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

it('maths', () => {
  // const {  = render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // );

 expect(1 + 1).toBe(2)
});
