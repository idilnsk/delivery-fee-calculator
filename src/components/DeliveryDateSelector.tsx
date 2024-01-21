// DeliveryDateSelector.tsx
import React from 'react';

interface DeliveryDateSelectorProps {
    value: string;
    onChange: (selectedDate: string) => void; // Update the type here
        minDate: string;
    maxDate: string;
}

const DeliveryDateSelector: React.FC<DeliveryDateSelectorProps> = ({ value, onChange, minDate, maxDate }) => {
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => { // Correct the event type here
        onChange(event.target.value); // Call the passed onChange with the selected value
    };
        return (
        <div>
            <label htmlFor="delivery-date" className="block text-sm font-medium text-gray-700">
                Select Delivery Date
            </label>
            <input
                id="delivery-date"
                className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-babyBlue-light"
                type="date"
                value={value}
                onChange={handleDateChange}
                min={minDate}
                max={maxDate}
            />
        </div>
    );
};

export default DeliveryDateSelector;
