import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import PokemonDetail from '../pages/PokemonDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokemon/:name',
    element: <PokemonDetail />,
  },
]);
