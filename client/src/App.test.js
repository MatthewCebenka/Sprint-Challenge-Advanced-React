import React from 'react';
import App from './App';
import { render} from '@testing-library/react'

test('Text Soccer Players', () => {
  const container = render(<App/>);
 container.getByText("Soccer Players");
});