import { HomePage } from "../Pages/HomePage";
import { SecondPage } from "../Pages/SecondPage";

export const routes = [
  { path: "/secondPage", component: <SecondPage /> },
  { path: "/", component: <HomePage /> },
];
