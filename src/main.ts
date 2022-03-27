import { createApp, Ref } from 'vue';
import App from './App.vue';
import router from './router';
import store, { key } from './store';
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';
import './store/modules';
const app = createApp(App);
import './css/main.scss';
import './css/normalize.css';

Sentry.init({
  app,
  dsn: import.meta.env.VITE_SENTRY_URL as string,
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: [/^\//],
    }),
  ],
  environment: import.meta.env.VITE_ENVIRONMENT as string,
  tracesSampleRate: parseFloat(import.meta.env.VITE_APP_SENTRY_TRACE_SAMPLE_RATE as string),
});

app.use(store, key);
app.use(router);

app.mount('#app');

window.ReceiveMessage = (msg: string, param: string) => {
  return store.dispatch('game/onMessage', { msg, param: JSON.parse(param) });
};

// browser debug
if (window.SendJsonMessage === undefined) {
  window.SendJsonMessage = () => {};
}
