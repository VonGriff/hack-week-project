import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest';
import { Group } from '..';
import { groupData } from './mock-data';

describe('Test Group component', () => {
  it('Should render', () => {
    render(<Group />);
  })

  it('Should display heading from props', () => {
    render(<Group details={groupData} />);
    screen.debug();

    expect(screen.getByRole('heading')).toHaveTextContent('Looking for members');
  })

  it('should display current and wanted group sizes', () => {
    render(<Group details={groupData}/>)

    expect(screen.getByText('Current group size:')).toHaveTextContent('2');
    expect(screen.getByText('Looking for a group size of:')).toHaveTextContent('4')
  })

  it('Should display current and wanted group size', () => {
    render(<Group details={groupData} />)

    expect(screen.getByText('Mechanisms:')).toHaveTextContent('Worker Placement, Deckbuilding')
  })
})