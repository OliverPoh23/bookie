import Withdraw from './index';
import WithdrawPayment from './withdraw-payment';
import WithdrawDetails from './withdraw-details';

const routes = [
  {
    path: '/withdraw',
    component: Withdraw,
    routes: [
      {
        path: '/withdraw',
        component: WithdrawPayment,
        exact: true
      },
      {
        path: '/withdraw/details',
        component: WithdrawDetails,
        exact: true
      }
    ]
  }
];

export default routes;
