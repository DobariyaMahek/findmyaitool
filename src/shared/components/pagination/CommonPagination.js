// CommonPagination.js
import React, { useEffect } from "react";
import styles from "./pagination.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";

const PaginationArrow = "/assets/icons/pagination-arrow.webp";

export default function CommonPagination({
  nPages,
  currentPage,
}) {
  const router = useRouter();

  const handlePageChange = (page) => {
    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, page },
      },
      undefined,
      { shallow: true }
    );
  };

  const renderPaginationItems = () => {
    const items = [];
    items.push(1);
    if (nPages > 3 && currentPage > 3) {
      items.push(null);
    }
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < nPages) {
        items.push(i);
      }
    }
    if (nPages > 3 && currentPage < nPages - 2) {
      items.push(null); // Ellipsis placeholder
    }
    if (nPages > 1) {
      items.push(nPages);
    }

    return items;
  };

  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <div
          className={styles.arrow}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <img loading="lazy" src={PaginationArrow} alt="PaginationArrow" />
        </div>
      )}

      {renderPaginationItems().map((item, index) => (
        <div
          key={index}
          className={classNames(styles.paginationBoxAlignment, {
            [styles.active]: item === currentPage,
            [styles.ellipsis]: item === null,
          })}
          onClick={() => item !== null && handlePageChange(item)}
        >
          {item !== null ? (
            <p className={styles.count}>{item}</p>
          ) : (
            <p className={styles.count}>...</p>
          )}
        </div>
      ))}

      {currentPage < nPages && (
        <div
          className={styles.arrow}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <img loading="lazy" src={PaginationArrow} alt="PaginationArrow" />
        </div>
      )}
    </div>
  );
}
