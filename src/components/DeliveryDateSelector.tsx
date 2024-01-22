import React from 'react';

interface DeliveryDateSelectorProps {
    value: string;
    onChange: (selectedDate: string) => void; 
        minDate: string;
    maxDate: string;
}

const DeliveryDateSelector: React.FC<DeliveryDateSelectorProps> = ({ value, onChange, minDate, maxDate }) => {
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        onChange(event.target.value); 
    };
        return (
        <div>
            <label htmlFor="delivery-date" className="block text-sm font-medium text-gray-700">
                Select Delivery Date
            </label>
            <input
                id="delivery-date"
                data-test-id="DeliveryDateSelector"
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
