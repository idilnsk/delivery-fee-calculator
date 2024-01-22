import React from 'react';

interface FeeDisplayProps {
    surcharge: number;
    deliveryFee: number;
    total: number;
    isRush: boolean;
}

const FeeDisplay: React.FC<FeeDisplayProps> = ({ surcharge, deliveryFee, total, isRush }) => {
    return (
        <>
            <div className="flex justify-between" data-test-id="SurchargeDisplay">
                <span>Surcharge:</span>
                <span>€{surcharge?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between" data-test-id="DeliveryFeeDisplay">
                <span>Delivery Fee:</span>
                <span>€{deliveryFee?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold" data-test-id="TotalDisplay">
                <span>Total:</span>
                <span>€{total?.toFixed(2)}</span>
            </div>
            {isRush && (
                <div className="text-red-500" data-test-id="RushHourNote">Note: Rush hour surcharge is included in the fee.</div>
            )}
        </>
    );
};

export default FeeDisplay;
