/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from 'react-icons/bs';

import Button from '@/components/buttons/Button';
import ButtonGroup from '@/components/buttons/ButtonGroup';
import IconButton from '@/components/buttons/IconButton';
// import useIsMounted from '@/hooks/useIsMounted';

// type Deps<T> = Array<T>;
export type PaginationType<T> = {
  pagesToRender: number[];
  totalData: number;
  totalPage: number;
  dataPerPage: number;
  currentData: T[];
};
export default function usePagination<T>(
  deps: Array<T> | undefined,
  dataCountPerPage = 10
) {
  const processedData = deps;
  const [currentPage, setCurrentPage] = React.useState(1);

  const pagination: PaginationType<T> = React.useMemo(() => {
    if (!processedData) {
      return {
        pagesToRender: [1],
        totalData: 0,
        totalPage: 1,
        dataPerPage: dataCountPerPage,
        currentData: [],
      };
    }
    const dataPerPage = dataCountPerPage;
    const totalData = processedData?.length ?? 0;
    const totalPage = Math.ceil(totalData / dataPerPage);

    const currentData: Array<T> = [];
    for (
      let START_INDEX = (currentPage - 1) * dataPerPage,
        i = (currentPage - 1) * dataPerPage;
      i < Math.min(START_INDEX + dataPerPage, totalData);
      i++
    ) {
      currentData.push(processedData[i]);
    }

    const pagesToRender: number[] = [];
    for (
      let i = Math.max(1, currentPage - 2);
      i <= totalPage && i <= currentPage + 2;
      i++
    ) {
      pagesToRender.push(i);
    }

    return {
      pagesToRender,
      totalData,
      totalPage,
      dataPerPage,
      currentData,
    };
  }, [currentPage, processedData, dataCountPerPage]);

  return {
    pagination,
    currentPage,
    setCurrentPage,
  };
}

type PaginationNavigationProps<T> = {
  pagination: PaginationType<T>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export function PaginationNavigation<T>({
  pagination = {
    pagesToRender: [1],
    totalData: 0,
    totalPage: 1,
    dataPerPage: 10,
    currentData: [],
  },
  currentPage,
  setCurrentPage,
}: PaginationNavigationProps<T>) {
  return (
    <ButtonGroup className='flex items-start justify-center'>
      <IconButton
        variant='ghost'
        icon={BsChevronDoubleLeft}
        iconClassName='h-4 w-4'
        onClick={() => setCurrentPage(1)}
      />
      <IconButton
        variant='ghost'
        icon={BsArrowLeftShort}
        iconClassName='h-4 w-4'
        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
      />
      {pagination.pagesToRender &&
        pagination.pagesToRender.map((value, index) => (
          <Button
            variant={currentPage === value ? 'outline' : 'ghost'}
            disabled={currentPage === value}
            key={`${index}-${value}-pagination`}
            onClick={() => setCurrentPage(value)}
          >
            {value}
          </Button>
        ))}
      <IconButton
        variant='ghost'
        icon={BsArrowRightShort}
        iconClassName='h-4 w-4'
        onClick={() =>
          setCurrentPage((prev) =>
            Math.min(pagination.totalPage ?? 1, prev + 1)
          )
        }
      />
      <IconButton
        variant='ghost'
        icon={BsChevronDoubleRight}
        iconClassName='h-4 w-4'
        onClick={() => setCurrentPage(pagination.totalPage)}
      />
    </ButtonGroup>
  );
}
