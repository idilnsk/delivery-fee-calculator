
import { render, fireEvent,screen } from '@testing-library/react';
import DeliveryDateSelector from './DeliveryDateSelector';

describe('<DeliveryDateSelector />', () => {
    test('renders correctly and responds to changes', () => {
        const handleChange = jest.fn();
        const { getByTestId } = render(
            <DeliveryDateSelector value="2023-01-01" onChange={handleChange} minDate="2023-01-01" maxDate="2023-01-31" />
        );
        
        const input = screen.getByTestId('DeliveryDateSelector') as HTMLInputElement; // Asserting the type as HTMLInputElement
        expect(input.value).toBe('2023-01-01'); // Check if the default value is set correctly
    
        fireEvent.change(input, { target: { value: '2023-01-10' } });
        expect(handleChange).toHaveBeenCalledTimes(1); // Check if onChange is called
        expect(handleChange).toHaveBeenCalledWith('2023-01-10'); // Check if onChange is called with the new value
    });
});
