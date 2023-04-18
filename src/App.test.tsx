import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './state/store';
import App from './App';

describe('initial render', () => {
  it('should render app', ()=> {
    expect(1+1).toBe(2)
  })
})

