import { render, screen } from '@testing-library/react';
import FeeDisplay from './FeeDisplay';

describe('<FeeDisplay />', () => {
    test('displays the surcharge, delivery fee, and total', async () => {
        render(<FeeDisplay surcharge={2.50} deliveryFee={5.00} total={7.50} isRush={false} />);
        
        const surchargeDisplay =  await screen.findByTestId('SurchargeDisplay');
        expect(surchargeDisplay).toHaveTextContent('€2.50');

        const deliveryFeeDisplay = await screen.findByTestId('DeliveryFeeDisplay');
        expect(deliveryFeeDisplay).toHaveTextContent('€5.00');

        const totalDisplay = await screen.findByTestId('TotalDisplay');
        expect(totalDisplay).toHaveTextContent('€7.50');
    });
});