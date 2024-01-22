// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// setupTests.js or setupTests.ts
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-test-id' });
