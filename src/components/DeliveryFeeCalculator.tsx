import React, { useState, useEffect } from 'react';
import { calculateDeliveryFee } from '../utils/calculateDeliveryFee';
import OrderTypeSelector from './OrderTypeSelector';
import DeliveryDateSelector from './DeliveryDateSelector';
import DeliveryTimeSelector from './DeliveryTimeSelector';
import FeeDisplay from './FeeDisplay';
import generateTimeOptions from '../utils/timeUtils'

const DeliveryFeeCalculator: React.FC = () => {
    const [cartValue, setCartValue] = useState<number>(0);
    const [numberOfItems, setNumberOfItems] = useState<number>(0);
    const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
    const [orderType, setOrderType] = useState<string>('now');
    const [deliveryDate, setDeliveryDate] = useState<string>('');
    const [deliveryTime, setDeliveryTime] = useState<string>('');
    const [total, setTotal] = useState<number>(0);
    const [deliveryFee, setDeliveryFee] = useState<number>(0);
    const [surcharge, setSurcharge] = useState<number>(0);
    const [showFees, setShowFees] = useState<boolean>(false);

    const currentDate = new Date();
    const minDate = currentDate.toISOString().split("T")[0];
    const maxDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    const timeOptions = generateTimeOptions();

    useEffect(() => {
        if (showFees) {
            const rush = isFridayRush();
            const newDeliveryFee = calculateDeliveryFee(cartValue, numberOfItems, deliveryDistance, rush);
            const newSurcharge = calculateSurcharge(cartValue);

            setDeliveryFee(newDeliveryFee);
            setSurcharge(newSurcharge);
            setTotal(newDeliveryFee + newSurcharge);
        }
    }, [cartValue, numberOfItems, deliveryDistance, deliveryDate, deliveryTime, showFees]);

    const handleOrderTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const type = event.target.value;
        setOrderType(type);
        if (type === 'now') {
            const now = new Date();
            setDeliveryDate(now.toISOString().split("T")[0]);
            setDeliveryTime(now.toTimeString().substring(0, 5));
        } else {
            setDeliveryDate('');
            setDeliveryTime('');
        }
    };

    const isFridayRush = () => {
        if (deliveryDate && deliveryTime) {
            const selectedDateTime = new Date(`${deliveryDate}T${deliveryTime}:00`);
            return selectedDateTime.getDay() === 5 && selectedDateTime.getHours() >= 15 && selectedDateTime.getHours() < 19;
        }
        return false;
    };

    const calculateSurcharge = (cartValue: number) => cartValue < 10 ? 2 : 0;

    const calculateAndShowFees = () => {
        if (cartValue <= 0 || numberOfItems <= 0 || deliveryDistance <= 0 || (orderType === 'later' && (!deliveryDate || !deliveryTime))) {
            alert('Please fill all input fields before calculating.');
            return; 
        }
        setShowFees(true);
    };

    const handleCartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCartValue(parseFloat(e.target.value));
    };

    const handleNumberOfItemsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfItems(parseInt(e.target.value, 10));
    };

    const handleDeliveryDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeliveryDistance(parseFloat(e.target.value));
    };

    const handleDeliveryTimeChange = (selectedTime: string) => {
        setDeliveryTime(selectedTime);
    };


    return (
        <div className="max-w-md mx-auto my-10 p-6 border rounded shadow-md bg-babyBlue">
            <div className="flex flex-col space-y-4">
                <label htmlFor="cart-value" className="block text-sm font-medium text-gray-700">
                    Cart Value (€)
                </label>
                <input
                 data-test-id="CartValue"
                    id="cart-value"
                    className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-babyBlue-light"
                    type="number"
                    placeholder="Cart Value (€)"
                    value={cartValue}
                    onChange={handleCartValueChange}
                    min="0"
                    step="0.01"
                />
                <label htmlFor="number-of-items" className="block text-sm font-medium text-gray-700">
                    Number of Items
                </label>
                <input
                data-test-id="NumberOfItems"
                    id="number-of-items"
                    className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-babyBlue-light"
                    type="number"
                    placeholder="Number of Items"
                    value={numberOfItems}
                    onChange={handleNumberOfItemsChange}
                    min="0"
                />
                <label htmlFor="delivery-distance" className="block text-sm font-medium text-gray-700">
                    Delivery Distance (meters)
                </label>
                <input
                data-test-id="DeliveryDistance"
                    id="delivery-distance"
                    className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-babyBlue-light"
                    type="number"
                    placeholder="Delivery Distance (meters)"
                    value={deliveryDistance}
                    onChange={handleDeliveryDistanceChange}
                    min="0"
                />
                <OrderTypeSelector value={orderType} onChange={handleOrderTypeChange} />
                {orderType === 'later' && (
                    <>
                        <DeliveryDateSelector value={deliveryDate} onChange={setDeliveryDate} minDate={minDate} maxDate={maxDate} />
                        <DeliveryTimeSelector value={deliveryTime} onChange={handleDeliveryTimeChange} timeOptions={timeOptions} />
                    </>
                )}
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={calculateAndShowFees}
                >
                    Calculate Delivery Price
                </button>
                {showFees && (
                    <FeeDisplay surcharge={surcharge} deliveryFee={deliveryFee} total={total} isRush={isFridayRush()} />
                )}
            </div>
        </div>
    );
};

export default DeliveryFeeCalculator;
