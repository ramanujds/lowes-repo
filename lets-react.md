## Inline Script in HTML

#### HTML File (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React in HTML</title>
</head>
<body>

<div id="root"></div>

<!-- Add React Script using CDN -->
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

<script>
    // React Code
    const rootElement = ReactDOM.createRoot(document.getElementById("root"));
    const element = React.createElement("div", null, "Hello World");
    rootElement.render(element);
</script>

</body>
</html>
```

In this HTML file, the React library is added using CDN. The inline script contains basic React code to render a simple "Hello World" message inside the `div` with the id "root."

### Separated JavaScript Files

#### App.js

```javascript
// App.js

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
const element = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child1" }, React.createElement("h1", null, "Hello From React Child 1")),
        React.createElement("div", { id: "child2" }, React.createElement("h2", null, "Hello From React Child 2"))
    ]
);
rootElement.render(element);
```

This is the main React component file (App.js). It creates a more complex structure with a parent `div` containing two child `div` elements, each with a different heading.

#### HTML File with External Script

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React in HTML</title>
</head>
<body>

<div id="root"></div>

<!-- Add React Script using CDN -->
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

<!-- Include the external script -->
<script type="module" src="./App.js"></script>

</body>
</html>
```

