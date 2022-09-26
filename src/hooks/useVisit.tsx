/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useRouter } from 'next/router';
import qs from 'qs';
import { useEffect } from 'react';

import { getRouterHref } from '@/lib/cast-to-type';

import { ResVisitDocumentT } from '@/types/fauna';

type useVisitProps = {
  timeElapsed: number;
  href: string;
};

// var for visit timer
let startingTime: number;
let endingTime: number;
let visitTime: number;

export default async function useVisit() {
  const router = useRouter();

  function startVisitTimer() {
    startingTime = Date.now();

    // console.log('start time');

    sendVisit({ timeElapsed: 0, href: getRouterHref(router) });
  }

  function endVisitTimer() {
    endingTime = Date.now();
    visitTime = endingTime - startingTime;

    // console.log('end time');

    sendVisit({ timeElapsed: visitTime, href: getRouterHref(router) });
  }

  useEffect(() => {
    router.events.on('routeChangeStart', startVisitTimer);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    router.events.off('routeChangeStart', endVisitTimer);
  }, [endVisitTimer, router.events, startVisitTimer]);
}

async function sendVisit({ timeElapsed, href }: useVisitProps) {
  const data = {
    timeElapsed: timeElapsed,
    href: href,
  };

  const res = await axios
    .post<ResVisitDocumentT>('/api/visit', {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify(data),
    })
    .then((res) => {
      if (typeof res.data !== 'undefined') {
        return res.data.data;
      }
      return undefined;
    });
  // .catch((err) => console.log(err.message));
  // .catch(() => undefined);

  return res;
}
