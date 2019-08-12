import views from '../views/';

const { Home, About } = views;

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  }, {
    path: '/about',
    component: About
  }
];
