import * as Sentry from '@sentry/vue';
import { CaptureContext } from '@sentry/types/dist/scope';
import { Severity } from '@sentry/vue';

interface Tags {
  [key: string]: string;
}

export function captureException(error: any, tags: Tags) {
  Sentry.captureException(error, {
    tags
  });
};

export function captureMessage(error: any, context: CaptureContext | Severity) {
  Sentry.captureMessage(error, context);
};
