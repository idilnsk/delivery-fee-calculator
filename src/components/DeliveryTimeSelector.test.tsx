import { render, screen, fireEvent } from '@testing-library/react';
import DeliveryTimeSelector from './DeliveryTimeSelector';

describe('<DeliveryTimeSelector />', () => {
    test('calls onChange when the selected option changes', () => {
        const handleChange = jest.fn();
        const mockTimeOptions = ['10:00', '10:30', '11:00'];

        render(<DeliveryTimeSelector value="" onChange={handleChange} timeOptions={mockTimeOptions} />);
        
        const select = screen.getByTestId('DeliveryTimeSelector') as HTMLSelectElement;

        fireEvent.change(select, { target: { value: '10:30' } });
        
        expect(handleChange).toHaveBeenCalledWith('10:30');
    });


});
