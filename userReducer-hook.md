`useReducer` is a React hook that is often used as an alternative to `useState` when managing more complex state logic in functional components. It is particularly useful when the next state depends on the previous state and when there are multiple actions that can be taken to update the state.

## Example 1

```jsx
import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  count: 0,
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// Component using useReducer
const Counter = () => {
  // useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default Counter;
```

In this example:

1. `initialState` represents the initial state of the component, which consists of a `count` property initialized to `0`.

2. `reducer` is a function that takes the current state and an action as parameters, and returns the new state based on the action type. The `switch` statement handles different action types, such as 'INCREMENT', 'DECREMENT', and 'RESET'.

3. `useReducer` is called with the `reducer` function and the `initialState`. It returns an array with two elements: the current state and a `dispatch` function.

4. The `Counter` component renders the current count and three buttons. Each button click triggers a different action by calling `dispatch` with the appropriate action object.

When a button is clicked, the `reducer` function is called with the current state and the corresponding action. The new state is then returned, and the component re-renders with the updated state. This pattern is particularly useful when dealing with more complex state management scenarios.


## Example 2


```jsx
import React, { useReducer, useState } from 'react';

// Define the initial state
const initialState = {
  items: [],
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { items: state.items.filter((item, index) => index !== action.payload) };
    case 'RESET':
      return { items: [] };
    default:
      return state;
  }
};

// Component using useReducer
const ItemList = () => {
  // useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setNewItem('');
    }
  };

  return (
    <div>
      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: index })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset List</button>
    </div>
  );
};

export default ItemList;
```

In this example:

1. The `initialState` contains an array named `items`.

2. The `reducer` function handles three actions: 'ADD_ITEM', 'REMOVE_ITEM', and 'RESET'. It updates the state based on the action type.

3. The `ItemList` component renders an unordered list (`ul`) of items, an input field, and three buttons. The buttons allow adding an item, removing an item, and resetting the entire list.

4. The `handleAddItem` function is called when the "Add Item" button is clicked. It dispatches an action of type 'ADD_ITEM' with the new item as the payload.

5. The "Remove" button next to each item dispatches an action of type 'REMOVE_ITEM' with the index of the item to be removed as the payload.

6. The "Reset List" button dispatches an action of type 'RESET', which resets the list to an empty array.

