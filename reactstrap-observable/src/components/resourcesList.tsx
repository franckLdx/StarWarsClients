import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { Pages } from './pages';


export interface IRessourcesListProps {
  pageNumber: number,
  pagesCount: number | undefined,
  items: any[]
  renderItem: (item: any) => React.ReactNode;
};

export const ResourceList: React.StatelessComponent<IRessourcesListProps> = ({ pageNumber, pagesCount, items, renderItem }) => {
  return (
    <Row>
      <Pages activePageNumber={pageNumber} pagesCount={pagesCount} />
      {items.map((item, index) =>
        < Col key={String(index)} lg="4" className="mb-3">
          {renderItem(item)}
        </Col>
      )}
    </Row >
  );
}