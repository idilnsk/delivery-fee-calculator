import { calculateDeliveryFee } from './calculateDeliveryFee';

describe('calculateDeliveryFee', () => {
    test('adds fee for additional distance', () => {
        // Assuming the fee increases by 1 for each 500m after the first 1000m
        const fee = calculateDeliveryFee(50, 2, 1500, false);
        // Base fee (2) + 1 for the additional 500m
        expect(fee).toBe(3);
    });
    
    test('adds fee for additional distance', () => {
        const fee = calculateDeliveryFee(50, 2, 1500, false);
        expect(fee).toBe(3); // Base fee + 1 for the additional 500m
    });

    test('adds extra bulk fee correctly', () => {
        // Assuming the fee is the base fee + 0.50 for each item over 4, + 1.20 if items > 12
        const fee = calculateDeliveryFee(50, 13, 200, false);
        // Base fee (2) + 0.50*9 (for items 5-13) + 1.20 (for more than 12 items)
        expect(fee).toBe(2 + (0.50 * 9) + 1.20); // Corrected the multiplier for 0.50 from 8 to 9
    });

    test('adds extra bulk fee correctly', () => {
        const fee = calculateDeliveryFee(50, 13, 200, false);
        expect(fee).toBe(7.70); // Base fee + 0.50*4 + 1.20 for more than 12 items
    });

    test('applies small order surcharge correctly', () => {
        const fee = calculateDeliveryFee(8, 2, 200, false);
        expect(fee).toBe(4); // Base fee + 2 surcharge to make cart value 10
    });

    test('applies Friday rush hour multiplier correctly', () => {
        const fee = calculateDeliveryFee(50, 2, 200, true);
        expect(fee).toBe(2.4); // Base fee with 1.2x multiplier
    });

    test('caps fee at maximum', () => {
        const fee = calculateDeliveryFee(10, 20, 4000, true);
        expect(fee).toBe(15); // Fee should not exceed MAX_FEE
    });

    test('provides free delivery for orders over the threshold', () => {
        const fee = calculateDeliveryFee(200, 2, 200, false);
        expect(fee).toBe(0); // No fee for orders over FREE_DELIVERY_THRESHOLD
    });

    // Add more tests as needed to cover all edge cases and logic branches
});
