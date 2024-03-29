import React from 'react';

interface DeliveryTimeSelectorProps {
    value: string;
    onChange: (selectedTime: string) => void; 
        timeOptions: string[];
}

const DeliveryTimeSelector: React.FC<DeliveryTimeSelectorProps> = ({ value, onChange, timeOptions }) => {
    const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value); 
    };
    return (
        <div>
            <label htmlFor="delivery-time" className="block text-sm font-medium text-gray-700">
                Select Delivery Time
            </label>
            <select
                id="delivery-time"
                data-test-id="DeliveryTimeSelector"
                className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-babyBlue-light"
                value={value}
                onChange={handleTimeChange}
            >
                {timeOptions.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                ))}
            </select>
        </div>
    );
};

export default DeliveryTimeSelector;
