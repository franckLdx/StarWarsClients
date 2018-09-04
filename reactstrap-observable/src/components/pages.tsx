import * as React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { mapPageToHash } from '../app/routes';

interface IPageProps {
  activePageNumber: number | undefined
  pagesCount: number | undefined
}

export const Pages: React.StatelessComponent<IPageProps> = ({ activePageNumber, pagesCount }) => {
  if (pagesCount === 1 || pagesCount === undefined) {
    return null;
  }
  const numbers = new Array(pagesCount);
  for (let index = 0; index < pagesCount; index++) {
    numbers[index] = index;
  }
  return (
    <Pagination>
      <PreviousButton activePageNumber={activePageNumber} />
      {
        numbers.map(index =>
          <PageIndex
            key={String(index + 1)}
            pageNumber={index + 1}
            active={index + 1 === activePageNumber}
          />
        )
      }
      <NextButton
        activePageNumber={activePageNumber}
        pagesCount={pagesCount}
      />
    </Pagination >
  )
};

const PageIndex: React.StatelessComponent<{ pageNumber: number, active: boolean }> =
  ({ pageNumber, active }) => (
    <PaginationItem active={active}>
      <PaginationLink href={mapPageToHash(pageNumber)} >{pageNumber}</PaginationLink>
    </PaginationItem >
  )

interface IPreviousProps {
  activePageNumber: number | undefined
}
const PreviousButton: React.StatelessComponent<IPreviousProps> = ({ activePageNumber }) => {
  const disabled = activePageNumber === undefined || activePageNumber === 1;
  const previousPageNumber = activePageNumber === undefined ? 0 : activePageNumber - 1;
  return (
    <PaginationItem disabled={disabled}>
      <PaginationLink previous={true} href={mapPageToHash(previousPageNumber)} />
    </PaginationItem>
  );
}

interface INextProps {
  activePageNumber: number | undefined;
  pagesCount: number | undefined;
}
const NextButton: React.StatelessComponent<INextProps> = ({ activePageNumber, pagesCount }) => {
  const disabled = activePageNumber === undefined || activePageNumber === pagesCount;
  const nextPageNumber = activePageNumber === undefined ? 0 : activePageNumber + 1;
  return (
    <PaginationItem disabled={disabled}>
      <PaginationLink next={true} href={mapPageToHash(nextPageNumber)} />
    </PaginationItem>
  );
}