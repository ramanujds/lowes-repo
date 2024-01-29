
// Chunking
// Lazy loading
// Code splitting
const LazyComponent = React.lazy(() => import('./components/SomeLazyComponent'));

const appRoutes =createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Body /> },
      {path: 'categories', element: <Categories/>},
      { path: 'category/:category', element: <MealsInCategory /> },
      { path: 'recipe/:id', element: <RecipeDetails />},
      { path: 'lazy', element: <Suspense fallback={<h1>Loading</h1>}><LazyComponent /></Suspense> },
      {path: 'favorites', element: <FavoriteMeals/>}


    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRoutes}>
    <App />
  </RouterProvider>
);
