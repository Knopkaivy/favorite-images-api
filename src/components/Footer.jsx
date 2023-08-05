import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import '../styles/Footer.css';

const Footer = ({ pageChange }) => {
  const [active, setActive] = useState(1);
  let items = [];
  const handlePageClick = (e) => {
    const pageNum = e.target.id;
    setActive(pageNum);
    pageChange(pageNum);
  };
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        id={number}
        active={number === active}
        onClick={(e) => handlePageClick(e)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = <Pagination>{items}</Pagination>;

  return (
    <div className="Footer">
      <div>{paginationBasic}</div>
      <div className="copyright">
        &copy; Copyright {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
