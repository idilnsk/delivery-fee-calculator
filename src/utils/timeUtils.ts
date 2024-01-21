// timeUtils.ts in the 'utils' directory

// Function to generate time options
export const generateTimeOptions = () => {
    const times = [];
    // Start at 10:00 and end at 02:00 the next day.
    for (let hour = 10; hour < 24; hour++) {
        times.push(`${hour.toString().padStart(2, '0')}:00`);
        times.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    // Add times for after midnight until 2 am.
    for (let hour = 0; hour < 2; hour++) {
        times.push(`${hour.toString().padStart(2, '0')}:00`);
        times.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    // Add the final time slot at 2:00 am
    times.push(`02:00`);
    
    return times;
};

export default generateTimeOptions