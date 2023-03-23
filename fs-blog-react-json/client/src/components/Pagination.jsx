import React from "react";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBBtn,
} from "mdb-react-ui-kit";

const Pagination = ({
  currentPage,
  pageLimit,
  loadBlogsData,
  data,
  totalBlog,
}) => {
  const renderPagination = () => {
    if (
      (currentPage === 0 && data.length < 5) ||
      (totalBlog === pageLimit && currentPage === 0)
    )
      return null;
    if (currentPage === 0) {
      return (
        <MDBPagination center className="mb-0">
          <MDBPaginationItem>
            <MDBPaginationLink>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn rounded onClick={() => loadBlogsData(5, 10, 1)}>
              Next
            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else if (
      currentPage < pageLimit - 1 &&
      data.length === pageLimit &&
      totalBlog - data.length !== pageLimit
    ) {
      return (
        <MDBPagination center className="mb-0">
          <MDBPaginationItem>
            <MDBBtn
              rounded
              onClick={() =>
                loadBlogsData((currentPage - 1) * 5, currentPage * 5, -1)
              }
            >
              Prev
            </MDBBtn>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn
              rounded
              onClick={() =>
                loadBlogsData((currentPage + 1) * 5, (currentPage + 2) * 5, 1)
              }
            >
              Next
            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else {
      return (
        <MDBPagination center className="mb-0">
          <MDBPaginationItem>
            <MDBBtn
              rounded
              onClick={() =>
                loadBlogsData((currentPage - 1) * 5, currentPage * 5, -1)
              }
            >
              Prev
            </MDBBtn>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      );
    }
  };
  return <div>{renderPagination()}</div>;
};

export default Pagination;
