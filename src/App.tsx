import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './routes/home/page';
import PlayModePage from './routes/playmode/page';
import LeaderboardPage from './routes/leaderboard/page';
import CategoriesPage from './routes/categories/page';
import MultiPlayerPage from './routes/multiplayer/page';
import GamingStatsPage from './routes/gaming-stats/page';
import HowToPlayPage from './routes/how-to-play/page';
import HelpPage from './routes/help/page';
import LogoutPage from './routes/logout/page';
import TriviaOfTheDayPage from './routes/trivia-of-the-day/page';
import SettingsLayout from './layouts/SettingsLayout';
import SettingsSupportPage from './routes/settings/support/page';
import SettingsWithdrawalPage from './routes/settings/withdrawals/page';
import SettingsGamePage from './routes/settings/game/page';
import SettingsGeneralPage from './routes/settings/general/page';
import SettingsProfilePage from './routes/settings/profile/page';
import CategoriesQuestion from './routes/categories/questions/page';
import { Toaster } from "@/components/ui/sonner"
import DashboardLayout from '@/layouts/DashboardLayout';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
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
          element: <CategoriesPage />,
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
          element: <SettingsLayout />,
          children: [
            {
              index: true,
              path: "/settings/withdrawal",
              element: <SettingsWithdrawalPage />,
            },
            {
              path: "/settings/support",
              element: <SettingsSupportPage />,
            },
            {
              path: "/settings/game",
              element: <SettingsGamePage />,
            },
            {
              path: "/settings/general",
              element: <SettingsGeneralPage />,
            },
            {
              path: "/settings/profile",
              element: <SettingsProfilePage />,
            }
          ]
        },
        {
          path: "help",
          element: <HelpPage />
        },
        {
          path: "logout",
          element: <LogoutPage />
        },
        {
          path: "trivia-of-the-day",
          element: <TriviaOfTheDayPage />
        },
        {
          path: "/categories/questions",
          element: <CategoriesQuestion />,
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
