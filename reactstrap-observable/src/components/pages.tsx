import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavLink, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { mapPageToHash } from '../app/routes';

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
        <PaginationLink previous={true} href={mapPageToHash(1)} />
      </PaginationItem>
      {
        numbers.map(index => <PageIndex key={String(index + 1)} index={index + 1} />)
      }
      <PaginationItem>
        <PaginationLink next={true} href={mapPageToHash(pagesCount)} />
      </PaginationItem>
    </Pagination >
  )
};

const PageIndex: React.StatelessComponent<{ index: number }> = ({ index }) => (
  <PaginationItem>
    <NavLink tag={Link} to={mapPageToHash(index)}>{index}</NavLink>
  </PaginationItem >
)

