import { render, fireEvent, screen } from '@testing-library/react';
import DeliveryFeeCalculator from './DeliveryFeeCalculator';
import { calculateDeliveryFee } from '../utils/calculateDeliveryFee';

jest.mock('../utils/calculateDeliveryFee', () => ({
    calculateDeliveryFee: jest.fn(() => 5), 
}));

describe('DeliveryFeeCalculator', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders correctly and calculates fees on user interaction', () => {
        render(<DeliveryFeeCalculator />);

        fireEvent.change(screen.getByTestId('CartValue'), { target: { value: '20' } });
        fireEvent.change(screen.getByTestId('NumberOfItems'), { target: { value: '3' } });
        fireEvent.change(screen.getByTestId('DeliveryDistance'), { target: { value: '1500' } });

        fireEvent.click(screen.getByText(/calculate delivery price/i));

        expect(calculateDeliveryFee).toHaveBeenCalledWith(20, 3, 1500, expect.anything());

        expect(screen.getByTestId('TotalDisplay')).toHaveTextContent('€'); // Update this with your actual output format
    });

});
