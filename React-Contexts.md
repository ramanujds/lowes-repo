`useContext` is a React Hook that allows you to subscribe to React context without introducing nesting. It's particularly useful when you want to access the values from a context in a functional component without having to use a `Consumer` component.
### Example 1

```jsx
import React, { createContext, useContext } from 'react';

// Step 1: Create a context
const ThemeContext = createContext();

// Step 2: Create a provider component
const ThemeProvider = ({ children }) => {
  const theme = 'light'; // Set your default theme here

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 3: Use the context in your component
const ThemedComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <p>This component is themed based on the context value.</p>
      <p>Current theme: {theme}</p>
    </div>
  );
};

// Step 4: Wrap your application or a part of it with the provider
const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
```

In this example:

1. We create a `ThemeContext` using `createContext`.
2. We create a `ThemeProvider` component to wrap our application or a part of it. The `ThemeProvider` provides the context value (`theme` in this case) to its descendants using `ThemeContext.Provider`.
3. We create a `ThemedComponent` that uses the `useContext(ThemeContext)` hook to access the current theme value from the context. The background and text color of this component are then set based on the theme.
4. Finally, we wrap our `ThemedComponent` with the `ThemeProvider` in the `App` component to make the theme context available to it.

Now, any component within the `ThemeProvider` will have access to the `theme` value without needing to pass it through props at every level.


### Example 2

```jsx
import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
const UserContext = createContext();

// Step 2: Create a provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: 'guest',
    age: 25,
  });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Step 3: Use the context in your component
const UserProfile = () => {
  const { user, updateUser } = useContext(UserContext);

  const handleUpdateClick = () => {
    // Update the user information using the updater function
    updateUser({
      ...user,
      age: user.age + 1,
    });
  };

  return (
    <div>
      <p>Username: {user.username}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleUpdateClick}>Increase Age</button>
    </div>
  );
};

// Step 4: Wrap your application or a part of it with the provider
const App = () => {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
};

export default App;
```

In this example:

1. We create a `UserContext` using `createContext`.
2. We create a `UserProvider` component to wrap our application or a part of it. The `UserProvider` provides the context value, which includes the `user` object and an `updateUser` function to update the user information.
3. We create a `UserProfile` component that uses the `useContext(UserContext)` hook to access the current user information and the updater function. It displays the user's username and age and provides a button to increase the age.
4. Finally, we wrap our `UserProfile` with the `UserProvider` in the `App` component to make the user context available to it.

Now, any component within the `UserProvider` will have access to the `user` information and the `updateUser` function to update that information.