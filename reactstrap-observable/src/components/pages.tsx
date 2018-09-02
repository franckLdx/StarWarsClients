import * as React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

interface IPageProps { pagesCount: number | undefined }

export const Pages: React.StatelessComponent<IPageProps> = ({ pagesCount }) => {
  if (pagesCount === 1 || pagesCount === undefined) {
    return null;
  }
  const numbers = new Array(pagesCount);
  for (let index = 0; index < pagesCount; index++) {
    numbers[index] = index;
  }
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink previous={true} href="#1" />
      </PaginationItem>
      {
        numbers.map(index => <PageIndex key={String(index + 1)} index={index + 1} />)
      }
      <PaginationItem>
        <PaginationLink next={true} href={`#${pagesCount}`} />
      </PaginationItem>
    </Pagination >
  )
};

const PageIndex: React.StatelessComponent<{ index: number }> = ({ index }) => (
  <PaginationItem>
    <PaginationLink href={`#${index}`}>
      {index}
    </PaginationLink>
  </PaginationItem>
)