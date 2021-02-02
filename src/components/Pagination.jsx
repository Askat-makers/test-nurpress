import React from 'react';

const Pagination = (props) => {
  let arr = []
  for (let i = 1; i <= props.number; i++) {
    arr.push(i)
  }
  return (
    <>
      <ul className="pagination">
        {arr.map(item => (
          <li key={item.id} onClick={props.handleClick} className="prev"><span>{item}</span></li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;