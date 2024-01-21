# Delivery Fee Calculator

## Overview

The Delivery Fee Calculator is a React application that allows users to calculate delivery fees based on cart value, number of items, delivery distance, and whether the order is placed during rush hours on Fridays. It offers a clean and intuitive interface  and is designed with modularity and reusability in mind.

## Features

- **Cart Value Input**: Users can input the value of their cart which may affect the delivery fee and surcharges.
- **Number of Items Input**: Users can input the number of items in their order which may influence the delivery fee.
- **Delivery Distance Input**: Users can specify the delivery distance in meters, which is a factor in calculating the delivery fee.
- **Order Time Selection**: Users can choose to order now (immediate delivery) or order later (schedule delivery) with options every 30 minutes from 10 am to 2 am the next day, available 7 days a week.
- **Dynamic Fee Calculation**: The application calculates the delivery fee dynamically, including rush hour surcharges for orders made on Friday between 3 pm and 7 pm.
- **Modular Component Structure**: The application is built using separate components for each input and display area for better maintainability and scalability.
- **Tailwind CSS Styling**: Styled with Tailwind CSS for a responsive and modern interface.

## Project Structure

- `src/components/`: Contains all the React components used in the project.
  - `DeliveryFeeCalculator.tsx`: The main calculator component integrating all subcomponents.
  - `OrderTypeSelector.tsx`: Allows users to select between ordering now or later.
  - `DeliveryDateSelector.tsx`: Displays date picker when 'Order Later' is selected.
  - `DeliveryTimeSelector.tsx`: Displays time picker with 30-minute intervals.
  - `FeeDisplay.tsx`: Shows the calculated surcharge, delivery fee, and total.
- `src/utils/`:
  - `calculateDeliveryFee.ts`: Utility function to calculate the delivery fee.
  - `timeUtils.ts`: Contains `generateTimeOptions` function to provide time slots.
- `src/App.tsx`: Root component that renders the `Delivery
