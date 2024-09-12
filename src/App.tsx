import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Loader from "./components/ui/Loader";
import Settings from "./pages/Settings";
import { Toaster } from "react-hot-toast";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import { UserAdminProvider } from "./context/MainContext";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Forex = lazy(() => import("./pages/Forex"));
const Commodities = lazy(() => import("./pages/Commodities"));
const Indices = lazy(() => import("./pages/Indices"));
const Shares = lazy(() => import("./pages/Shares"));
const Treasures = lazy(() => import("./pages/Treasures"));
const Cryptocurrencies = lazy(() => import("./pages/Cryptocurrencies"));
const Metatrader4 = lazy(() => import("./pages/Metatrader4"));
const Metatrader5 = lazy(() => import("./pages/Metatrader5"));
const LearnCfds = lazy(() => import("./pages/LearnCfds"));
const LearnForex = lazy(() => import("./pages/LearnForex"));
const LearnShares = lazy(() => import("./pages/LearnShares"));
const TradingGuides = lazy(() => import("./pages/TradingGuides"));
const LearnForexDetails = lazy(() => import("./pages/LearnForexDetails"));
const LearnSharesDetails = lazy(() => import("./pages/LearnSharesDetails"));
const LearnGuideDetails = lazy(() => import("./pages/LearnGuideDetails"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const Deposit = lazy(() => import("./pages/Deposit"));
const Withdrawal = lazy(() => import("./pages/Withdrawal"));
const BuyBitcoin = lazy(() => import("./pages/BuyBitcoin"));
const Account = lazy(() => import("./pages/Account"));
const AdminDeposit = lazy(() => import("./pages/AdminDeposit"));
const AdminWithdrawal = lazy(() => import("./pages/AdminWithdrawal"));
const AdminVerifications = lazy(() => import("./pages/AdminVerifications"));
const AdminNotification = lazy(() => import("./pages/AdminNotification"));
const AdminSignIn = lazy(() => import("./pages/AdminSignIn"));
const AdminSettings = lazy(() => import("./pages/AdminSettings"));
const UserAccount = lazy(() => import("./pages/UserAccount"));
const InvestmentOptions = lazy(() => import("./pages/InvestmentOptions"));
const ActiveInvestments = lazy(() => import("./pages/ActiveInvestments"));
const EndedInvestments = lazy(() => import("./pages/EndedInvestments"));
const ProfileSettings = lazy(() => import("./pages/ProfileSetting"));
const PasswordSettings = lazy(() => import("./pages/PasswordSetting"));
const ReferralList = lazy(() => import("./pages/ReferralList"));
const ReferralBonus = lazy(() => import("./pages/ReferralBonus"));
const KycApplications = lazy(() => import("./pages/KycApplication"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "company/about",
    element: <About />,
  },
  {
    path: "company/contact",
    element: <Contact />,
  },
  {
    path: "market/forex",
    element: <Forex />,
  },
  {
    path: "market/commodities",
    element: <Commodities />,
  },
  {
    path: "market/indices",
    element: <Indices />,
  },
  {
    path: "market/shares",
    element: <Shares />,
  },
  {
    path: "market/treasures",
    element: <Treasures />,
  },
  {
    path: "market/cryptocurrency",
    element: <Cryptocurrencies />,
  },
  {
    path: "platforms/meta4",
    element: <Metatrader4 />,
  },
  {
    path: "platforms/meta5",
    element: <Metatrader5 />,
  },
  {
    path: "education/learn-cfds",
    element: <LearnCfds />,
  },
  {
    path: "education/learn-forex",
    element: <LearnForex />,
  },
  {
    path: "education/learn-shares",
    element: <LearnShares />,
  },
  {
    path: "education/trading-guides",
    element: <TradingGuides />,
  },
  {
    path: "education/learn-forex/:id",
    element: <LearnForexDetails />,
  },
  {
    path: "education/learn-shares/:id",
    element: <LearnSharesDetails />,
  },
  {
    path: "education/trading-guides/:id",
    element: <LearnGuideDetails />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "admin/signin",
    element: <AdminSignIn />,
  },

  {
    element: <AdminProtectedRoutes />,
    children: [
      {
        path: "admin/dashboard",
        element: <Dashboard />,
      },

      {
        path: "admin/account",
        element: <Account />,
      },
      {
        path: "admin/deposit",
        element: <AdminDeposit />,
      },
      {
        path: "admin/withdrawal",
        element: <AdminWithdrawal />,
      },

      {
        path: "admin/verification",
        element: <AdminVerifications />,
      },
      {
        path: "admin/notifications",
        element: <AdminNotification />,
      },
      {
        path: "admin/settings",
        element: <AdminSettings />,
      },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "user/dashboard",
        element: <UserDashboard />,
      },
      {
        path: "user/account",
        element: <UserAccount />,
      },
      {
        path: "user/deposit",
        element: <Deposit />,
      },
      {
        path: "user/withdrawal",
        element: <Withdrawal />,
      },
      {
        path: "user/investment-options",
        element: <InvestmentOptions />,
      },
      {
        path: "user/active-investments",
        element: <ActiveInvestments />,
      },
      {
        path: "user/ended-investments",
        element: <EndedInvestments />,
      },
      {
        path: "user/profile-settings",
        element: <ProfileSettings />,
      },
      {
        path: "user/password-settings",
        element: <PasswordSettings />,
      },
      {
        path: "user/referral-list",
        element: <ReferralList />,
      },
      {
        path: "user/referral-bonus",
        element: <ReferralBonus />,
      },
      {
        path: "user/kyc-application",
        element: <KycApplications />,
      },

      {
        path: "user/settings",
        element: <Settings />,
      },
      {
        path: "user/buy-bitcoin",
        element: <BuyBitcoin />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <UserAdminProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <RouterProvider router={router} />
      </UserAdminProvider>
    </Suspense>
  );
}

export default App;
