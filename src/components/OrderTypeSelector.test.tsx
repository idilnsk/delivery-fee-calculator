
import { render, fireEvent } from '@testing-library/react';
import OrderTypeSelector from './OrderTypeSelector';

describe('<OrderTypeSelector />', () => {
  test('renders two radio buttons with the correct checked values', () => {
    const { getByLabelText } = render(
      <OrderTypeSelector value="now" onChange={() => {}} />
    );
    
    const orderNowRadio = getByLabelText(/order now/i);
    const orderLaterRadio = getByLabelText(/order later/i);

    expect(orderNowRadio).toBeChecked();
    expect(orderLaterRadio).not.toBeChecked();
  });

  test('calls onChange when radio button value changes', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <OrderTypeSelector value="now" onChange={handleChange} />
    );

    const orderLaterRadio = getByLabelText(/order later/i);
    fireEvent.click(orderLaterRadio);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
