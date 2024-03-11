import { describe, it } from 'vitest';
import App from './App';
import { render } from '@testing-library/react';

describe('Test render', () => {
  it('Should render app', () => {
    render(<App />);
  });
})