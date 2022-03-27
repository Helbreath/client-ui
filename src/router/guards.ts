import { Vue } from '@sentry/vue/dist/types';
import { Router } from 'vue-router';
import { Store } from 'vuex';

export default function (app: Vue, router: Router, store: Store<any>) {

  router.beforeEach((to, from, next) => {
    // Redirect to route
    const redirectToRoute = (name: string) => {
      if (name === from.name) {
        next();
        return;
      }

      next({ name });
    };

    const isLoggedIn = store.getters['nebulose/isLoggedIn'];

    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isLoggedIn) {
        redirectToRoute('login');
        return;
      }
    }

    if (to.matched.some(record => record.meta.guest)) {
      if (isLoggedIn) {
        redirectToRoute('profile');
        return;
      }
    }

    // // Get logged user
    // const loggedUser = store.getters['Account/auth'];
    //
    // // Check if access token expired
    // if (loggedUser) {
    //   const currentDateTime = new Date().getTime();
    //   if (currentDateTime > loggedUser.expiryDate) {
    //     store.dispatch('logOut');
    //     return redirectToRoute('login');
    //   }
    // } else {
    //   if (localStorage.token !== undefined) {
    //     store.commit('Account/setAuth', true);
    //     //http.setToken(localStorage.token);
    //     return redirectToRoute('loading');
    //   }
    // }
    //
    // // Guest
    // if (to.meta?.guest) {
    //   if (loggedUser) return redirectToRoute('profile');
    //   else return next();
    // }

    next();
  });
}
