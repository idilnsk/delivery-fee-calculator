// FeeDisplay.tsx
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
            <div className="flex justify-between">
                <span>Surcharge:</span>
                <span>€{surcharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span>€{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>€{total.toFixed(2)}</span>
            </div>
            {isRush && (
                <div className="text-red-500">Note: Rush hour surcharge is included in the fee.</div>
            )}
        </>
    );
};

export default FeeDisplay;
