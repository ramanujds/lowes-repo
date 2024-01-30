## Cretaing a custom hook in React

```jsx
import { useState } from 'react';

// Custom hook: useCounter
const useCounter = (initialValue = 0, step = 1) => {
  // State for the counter
  const [count, setCount] = useState(initialValue);

  // Function to increment the counter
  const increment = () => {
    setCount(count + step);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - step);
  };

  // Function to reset the counter to the initial value
  const reset = () => {
    setCount(initialValue);
  };

  // Return the state and functions for external use
  return {
    count,
    increment,
    decrement,
    reset,
  };
};

// Example usage of the custom hook
const CounterComponent = () => {
  // Using the custom hook to manage a counter
  const { count, increment, decrement, reset } = useCounter(0, 2);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterComponent;
```

In this example:

1. We create a custom hook called `useCounter` that takes two optional parameters: `initialValue` (default is 0) and `step` (default is 1). It uses the `useState` hook to manage the state of the counter.

2. Inside the custom hook, we define functions like `increment`, `decrement`, and `reset` that modify the counter state based on the provided `step` value.

3. The custom hook returns an object containing the current `count` value and the functions (`increment`, `decrement`, `reset`) for external components to use.

4. The `CounterComponent` then uses this custom hook to manage and display a counter. It provides buttons to increment, decrement, and reset the counter.

