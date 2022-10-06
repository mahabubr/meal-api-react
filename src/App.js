import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Meals from './components/Header/Meals/Meals';
import Home from './components/Home/Home';
import MealsDeatils from './components/MealsDetails/MealsDeatils';
import Root from './roots/Root'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
          },
          element: <Home />
        },
        {
          path: 'home',
          loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
          },
          element: <Home />
        },
        {
          path: 'meals',
          element: <Meals />
        },
        {
          path: 'meals/:mealId',
          loader: async ({params}) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
          },
          element: <MealsDeatils />
        },
        {
          path: 'about',
          element: <About />
        },
        
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
