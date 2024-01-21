// OrderTypeSelector.tsx
import React from 'react';

interface OrderTypeSelectorProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OrderTypeSelector: React.FC<OrderTypeSelectorProps> = ({ value, onChange }) => {
    return (
        <div className="flex items-center gap-4"> {/* Add gap class */}
            <label className="inline-flex items-center">
                <input
                    type="radio"
                    value="now"
                    checked={value === 'now'}
                    onChange={onChange}
                    className="form-radio"
                />
                <span className="ml-2">Order Now</span>
            </label>
            <label className="inline-flex items-center">
                <input
                    type="radio"
                    value="later"
                    checked={value === 'later'}
                    onChange={onChange}
                    className="form-radio"
                />
                <span className="ml-2">Order Later</span>
            </label>
        </div>
    );
};

export default OrderTypeSelector;