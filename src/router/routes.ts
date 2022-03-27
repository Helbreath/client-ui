// // Import Modules
import HelloWorld from '../components/HelloWorld.vue';
// import TestPage from '../components/TestPage.vue';
// import Login from '../components/Login.vue';
// import Register from '../components/Register.vue';
// import AuthLayout from '../components/AuthLayout.vue';
// import ForgotPassword from '../components/ForgotPassword.vue';
// import Profile from '@/components/Profile/Profile.vue';
// import Channel from '@/components/Channels/History.vue';
// import Error404Module from '@/modules/Error404.vue';

export default [
  { path: '/', name: 'home', component: HelloWorld, meta: { guest: true, title: 'HelloWorld' }  },
  // { path: '/test', name: 'test', component: TestPage, meta: { guest: true, title: 'Test Page' } },
  // { path: '/login', name: 'login', component: Login, meta: { guest: true, title: 'Login' } },
  // { path: '/forgot-password', name: 'forgot-password', component: ForgotPassword, meta: { guest: true, title: 'Forgot Password' } },
  // { path: '/register', name: 'register', component: Register, meta: { guest: true, title: 'Register' } },
  // { path: '/channel/:id', name: 'channel', component: Channel, meta: { requiresAuth: true, title: 'Channel' } },
  // { path: '/users/@me', name: 'profile', component: Profile, meta: { requiresAuth: true, title: 'Dashboard' } },
  // { path: '/channels/:id?', name: 'channel', component: Channel, meta: { requiresAuth: true, title: 'Channel' } },
  //
  // // Errors
  // { path: '*', name: 'error-404', component: Error404Module },
  //
  // { path: '/channels/:server_id/:channel_id?', name: 'channel', component: Channel },
  // { path: '/channels/@me', name: 'user-info', component: UserInfo },
  // { path: '/channels/@me/:channel_id', name: 'direct-message', component: DirectMessage },
  //
  // // Admin
  // { path: '/admin/dashboard', name: 'dashboard', component: Dashboard },

  /*{ path: '', name: '', component: '', meta: { auth: true } },
  { path: '', name: '', component: '', meta: { auth: true } },
  { path: '', name: '', component: '', meta: { auth: true } },
  { path: '', name: '', component: '', meta: { auth: true } },
  { path: '', name: '', component: '', meta: { auth: true } },
  { path: '', name: '', component: '', meta: { auth: true } },*/
];
