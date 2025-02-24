import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "@/layouts/layout"
import DashboardPage from './routes/home/page';
import PlayModePage from './routes/playmode/page';
import LeaderboardPage from './routes/leaderboard/page';
import CategoriesPage from './routes/categories/page';
import MultiPlayerPage from './routes/multiplayer/page';
import GamingStatsPage from './routes/gaming-stats/page';
import HowToPlayPage from './routes/how-to-play/page';
import SettingsPage from './routes/settings/page';
import HelpPage from './routes/help/page';
import LogoutPage from './routes/logout/page';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DashboardPage />
        },
        {
          path: "play-mode",
          element: <PlayModePage />
        },
        {
          path: "leaderboard",
          element: <LeaderboardPage />
        },
        {
          path: "categories",
          element: <CategoriesPage />
        },
        {
          path: "multiplayer",
          element: <MultiPlayerPage />
        },
        {
          path: "gaming-stats",
          element: <GamingStatsPage />
        },
        {
          path: "how-to-play",
          element: <HowToPlayPage />
        },
        {
          path: "settings",
          element: <SettingsPage />
        },
        {
          path: "help",
          element: <HelpPage />
        },
        {
          path: "logout",
          element: <LogoutPage />
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
