import Public from "../views/Public.vue";
import Admin from "../views/Admin.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Public,
    role: "public",
    children: [
      {
        path: "/about",
        name: "About",
        role: "public",
        component: About,
        children: [
          {
            path: "/about/a",
            name: "Bebaut",
            role: "public",
            component: About,
          },
        ],
      },
      {
        path: "login",
        name: "Login",
        role: "public",
        component: About,
      },
    ],
  },
  {
    path: "/admin",
    name: "Admin",
    role: "admin",
    component: Admin,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
