import SignIn from './sign-in';
import SignUp from './sign-up';

const routes = [
  {
    path: '/sign-in',
    component: SignIn,
    exact: true,
  },
  {
    path: '/sign-up',
    component: SignUp,
    exact: true,
  }
];

export default routes;
