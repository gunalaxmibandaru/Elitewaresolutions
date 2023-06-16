import { getDefaultNormalizer } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "./index.css";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const User = (props) => {
  const { user, search, data, setadData } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);

  const paginationLength = [];
  const noOfPages = parseInt(data.length / perPage);
  console.log(noOfPages);
  for (let i = 1; i <= noOfPages; i++) {
    paginationLength.push(i);
  }

  console.log(paginationLength);

  const filteredData = data.filter((item) =>
    item.login.toLowerCase().includes(search.toLowerCase())
  );

  const previousPage = currentPage * perPage - perPage;
  const nextPage = currentPage * perPage;
  const paginationData = filteredData.slice(previousPage, nextPage);

  const bookMarkStatus = (value) => {
    console.log(value);
    const bookmarkFilter = data.map((e) => {
      if (e.id === value) {
        return { ...e, isBookmarked: !e.isBookmarked };
      }
      return e;
    });
    setadData(bookmarkFilter);
  };

  return (
    <div>
      {user ? (
        <div className="main-container">
        <div className="userlist">
          {paginationData.map((e) => (
            <div className="usercontainer">
              {e.isBookmarked === true ? (
                <AiTwotoneStar
                  className="activeBookmark"
                  onClick={() => bookMarkStatus(e.id)}
                />
              ) : (
                <AiOutlineStar
                  className="staricon"
                  onClick={() => bookMarkStatus(e.id)}
                />
              )}
              <img src={e.avatar_url} alt="avatar" className="avatar" />
              <h1 className="username">{e.login}</h1>
              <h1>{e.isBookmarked}</h1>
            </div>
          ))}{" "}
        </div>
        {paginationData.length >4 &&
        <div>
          
        {paginationLength.map((e) => (
            <button className={`${currentPage === e ? 'active-btn':'pagination-button '}`} onClick={() => setCurrentPage(e)}>{e}</button>
          ))}
          </div>}
        </div>
      ) : null}
    </div>
  );
};

export default User;
