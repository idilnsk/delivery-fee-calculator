
const BASE_FEE = 2;
const ADDITIONAL_FEE_PER_500M = 1;
const MAX_ADDITIONAL_DISTANCE = 1000; // Meters
const DISTANCE_INCREMENT = 500; // Meters
const BULK_ITEM_FEE = 0.50;
const EXTRA_BULK_FEE = 1.20;
const MAX_FEE = 15;
const FREE_DELIVERY_THRESHOLD = 200;
const SMALL_ORDER_THRESHOLD = 10;
export const calculateDeliveryFee = (
    cartValue: number,
    numberOfItems: number,
    deliveryDistance: number,
    isFridayRush: boolean 
): number => {
    let fee = BASE_FEE;

    //  additional distance fee here
    if (deliveryDistance > MAX_ADDITIONAL_DISTANCE) {
        const additionalDistance = deliveryDistance - MAX_ADDITIONAL_DISTANCE;
        const additionalIncrements = Math.floor(additionalDistance / DISTANCE_INCREMENT);
        fee += (additionalIncrements + 1) * ADDITIONAL_FEE_PER_500M;
    }

    // calculate the item count surcharge
    if (numberOfItems >= 5) {
        fee += (numberOfItems - 4) * BULK_ITEM_FEE;
    }

    // extra bulk fee if more than 12 items
    if (numberOfItems > 12) {
        fee += EXTRA_BULK_FEE;
    }

    //  small order surcharge if below threshold
    if (cartValue < SMALL_ORDER_THRESHOLD) {
        fee += SMALL_ORDER_THRESHOLD - cartValue;
    }

    // friday rush hour multiplier
    if (isFridayRush) {
        fee *= 1.2;
    }

    // Free delivery for 200
    if (cartValue >= FREE_DELIVERY_THRESHOLD) {
        return 0;
    }

    //  final fee at MAX_FEE
    return Math.min(fee, MAX_FEE);
};
