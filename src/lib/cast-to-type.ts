import { NextRouter } from 'next/router';

export function getRouterHref(router: NextRouter) {
  if (Array.isArray(router.query.href)) {
    return router.query.href[0] as string;
  }

  if (typeof router.query.href === 'string') {
    return router.query.href as string;
  }

  return '';
}
