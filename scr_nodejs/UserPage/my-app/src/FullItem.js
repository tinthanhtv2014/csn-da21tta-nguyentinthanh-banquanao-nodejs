import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./Fullitem.css";
import ReactPaginate from "react-paginate";
import axios from "axios";

const FullItem = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(3);
  const [totalPages, setTotalPages] = useState(9);
  const [currentLimit, setCurrentLimit] = useState(8);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/v1/product?page=${currentPage}&limit=${currentLimit}`
      );

      if (!response.data) {
        throw new Error("Dữ liệu không tồn tại");
      }

      const { totalRows, totalPages } = response.data.data;

      setTotalPages(totalPages); // Cập nhật totalPages từ dữ liệu trả về
      setData(totalRows);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePageClick = async (event) => {
    setCurrentPage(+event.selected + 1);
    await fetchData(+event.selected + 1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePriceFilterChange = (value) => {
    setPriceFilter(value);
  };

  const filteredData =
    data &&
    data.length > 0 &&
    data
      .filter((item) =>
        item.tensp.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((item) =>
        priceFilter === "200000"
          ? item.giatien < 200000
          : priceFilter === "300000"
          ? item.giatien < 300000 && item.giatien >= 200000
          : priceFilter === "500000"
          ? item.giatien < 500000 && item.giatien >= 300000
          : priceFilter === "700000"
          ? item.giatien < 700000
          : true
      );

  return (
    <div className="container-bottom">
      <div className="tieude1">
        <div>
          <h1>Danh Sách Sản Phẩm</h1>
        </div>

        <div className="Searchfillter">
          <div className="editinput">
            <input
              placeholder="tìm kiếm sản phẩm"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="fillter">
            <label>
              <input
                type="radio"
                name="priceFilter"
                value="200000"
                checked={priceFilter === "200000"}
                onChange={() => handlePriceFilterChange("200000")}
              />
              Dưới 200k
            </label>
            <label>
              <input
                type="radio"
                name="priceFilter"
                value="300000"
                checked={priceFilter === "300000"}
                onChange={() => handlePriceFilterChange("300000")}
              />
              Dưới 300k
            </label>
            <label>
              <input
                type="radio"
                name="priceFilter"
                value="500000"
                checked={priceFilter === "500000"}
                onChange={() => handlePriceFilterChange("500000")}
              />
              Dưới 500k
            </label>
            <label>
              <input
                type="radio"
                name="priceFilter"
                value="700000"
                checked={priceFilter === "700000"}
                onChange={() => handlePriceFilterChange("700000")}
              />
              Tất cả
            </label>
          </div>
        </div>
      </div>

      <ul className="products">
        {filteredData && filteredData.length > 0 ? (
          <>
            {filteredData.map((item, index) => (
              <li key={index}>
                <div className="product-top">
                  <a
                    href={`/thongtinchitietsp/${item.id}`}
                    className="product-thumb"
                  >
                    <img
                      src={`http://localhost:8081/public/images/${item.mota}`}
                      alt={item.tensp}
                    />
                  </a>
                  <a href={`/thongtinchitietsp/${item.id}`} className="mua">
                    Mua
                  </a>
                </div>
                <div className="product-info">
                  <div className="product-name">{item.tensp}</div>
                  <div className="product-price">
                    {item.giatien.toLocaleString()} VND
                  </div>
                </div>
              </li>
            ))}
          </>
        ) : (
          <tr>
            <td>Không có sản phẩm nào phù hợp.</td>
          </tr>
        )}
      </ul>

      {totalPages > 0 && (
        <div className="product-footer">
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={totalPages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
};

export default withRouter(FullItem);
