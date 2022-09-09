import Deposit from './index';
import DepositPayment from './deposit-payment';
import DepositDetails from './deposit-details';

const routes = [
  {
    path: '/deposit',
    component: Deposit,
    routes: [
      {
        path: '/deposit',
        component: DepositPayment,
        exact: true
      },
      {
        path: '/deposit/details',
        component: DepositDetails,
        exact: true
      }
    ]
  }
];

export default routes;
