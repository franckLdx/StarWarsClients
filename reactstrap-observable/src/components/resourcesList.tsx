import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { Pages } from './pages';

export interface IRessourcesListProps<T> {
  pageNumber: number,
  pagesCount: number | undefined,
  items: T[]
  renderItem: (item: T) => React.ReactNode;
};

export const ResourceList: React.StatelessComponent<IRessourcesListProps<any>> = ({ pageNumber, pagesCount, items, renderItem }) => {
  return (
    <>
      <Pages activePageNumber={pageNumber} pagesCount={pagesCount} />
      <Row>
        {items.map((item, index) =>
          < Col key={String(index)} lg="4" className="mb-3">
            {renderItem(item)}
          </Col>
        )}
      </Row >
    </>)
    ;
}