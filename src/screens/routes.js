import authRoutes from 'screens/auth/route';
import homeRoutes from 'screens/home/route';
import eventsRoutes from 'screens/events/route';
import helpRoutes from 'screens/help/route';
import playerrankingsRoutes from 'screens/player-rankings/route';
import transitionsRoutes from 'screens/transactions/route';
import rewardsRoutes from 'screens/rewards/route';
import depositRoutes from 'screens/deposit/route';
import withdrawRoutes from 'screens/withdraw/route';
import referralsRoutes from 'screens/referrals/route';
import settingsRoutes from 'screens/settings/route';
import playerTransferRoutes from 'screens/player-transfer/route';

const routes = [
  ...authRoutes,
  ...homeRoutes,
  ...eventsRoutes,
  ...helpRoutes,
  ...playerrankingsRoutes,
  ...transitionsRoutes,
  ...rewardsRoutes,
  ...depositRoutes,
  ...withdrawRoutes,
  ...referralsRoutes,
  ...settingsRoutes,
  ...playerTransferRoutes
];

export default routes;
