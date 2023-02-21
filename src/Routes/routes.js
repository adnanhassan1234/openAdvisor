import LandingPage from "Pages/LandingPage";
import NotFound from "Pages/NotFound/loadable";

import MainLayout from "Layout/MainLayout";
import mainLayout from "Layout/MainLayout";
import Profile from "../Pages/Profile";
import AllFounder from "../Pages/AllFounder";
import Reviews from "../Pages/Reviews";
import Login from "../Pages/Auth/Login/Login";
import AuthLayout from "../Layout/AuthLayout";
import ForgetPassword from "../Pages/Auth/Login/ForgetPassword";
import NewPassword from "../Pages/Auth/Login/NewPassword";
import SignUp from "../Pages/Auth/SignUp/signup";
import SubscriptionPayment from "../Pages/SubscriptionPayment";
import Payemnt from "../Pages/SubscriptionPayment/payemnt";
import Blogs from "../Pages/Blogs";
import BLogDetail from "../Pages/Blogs/BLogDetail";
import TermsofUse from "../Pages/TermsofUse/TermsofUse";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Support from "../Pages/Support/Support";
import FAQs from "../Pages/FAQs/FAQs";
import Dashboard from "../Pages/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import Request from "../Pages/Request";
import Messages from "../Pages/Messages";
import Schedules from "../Pages/Schedules";
import ProfileSetting from "../Pages/ProfileSetting";

const routes = [
  {
    path: "/",
    component: LandingPage,
    layout: mainLayout,
  },
  {
    path: "/reviews",
    component: Reviews,
    layout: mainLayout,
  },
  {
    path: "/login",
    component: Login,
    layout: AuthLayout,
  },
  {
    path: "/forgetpassword",
    component: ForgetPassword,
    layout: AuthLayout,
  },
  {
    path: "/newpassword",
    component: NewPassword,
    layout: AuthLayout,
  },
  {
    path: "/signup",
    component: SignUp,
    layout: AuthLayout,
  },
  {
    path: "/terms-of-use",
    component: TermsofUse,
    layout: MainLayout,
  },
  {
    path: "/terms-conditions",
    component: TermsConditions,
    layout: MainLayout,
  },
  {
    path: "/privacy-policy",
    component: PrivacyPolicy,
    layout: MainLayout,
  },
  {
    path: "/support",
    component: Support,
    layout: MainLayout,
  },
  {
    path: "/faq",
    component: FAQs,
    layout: MainLayout,
  },

  {
    path: "/profile",
    component: Profile,
    layout: MainLayout,
  },
  {
    path: "/All-founders",
    layout: MainLayout,
    component: AllFounder,
    subRoutes: [
      {
        path: "/",
        component: AllFounder,
      },
      {
        path: "/profile",
        component: Profile,
      },
    ],
  },
  {
    path: "/subscription-payment",
    component: SubscriptionPayment,
    layout: MainLayout,
    subRoutes: [
      {
        path: "/",
        component: SubscriptionPayment,
      },
      {
        path: "/payment",
        component: Payemnt,
      },
    ],
  },
  {
    path: "/blogs",
    component: Blogs,
    layout: MainLayout,
    subRoutes: [
      {
        path: "/",
        component: Blogs,
      },
      {
        path: "/blog-detail",
        component: BLogDetail,
      },
    ],
  },
  {
    path: "/dashboard",
    component: Dashboard,
    layout: DashboardLayout,
  },
  {
    path: "/request",
    component: Request,
    layout: DashboardLayout,
  },
  {
    path: "/messages",
    component: Messages,
    layout: DashboardLayout,
  },
  {
    path: "/schedules",
    component: Schedules,
    layout: DashboardLayout,
  },
  {
    path: "/profile-setting",
    component: ProfileSetting,
    layout: DashboardLayout,
  },
  /*{
    path: "/All-founders",
    layout: MainLayout,
    subRoutes: [
      {
        path: "/",
        component: AllFounder,
      },
      {
        path: "/All-founders/profile",
        component: Profile,
      },
    ],
  },*/



  { path: "*", component: NotFound, layout: MainLayout },
];

export default routes;
