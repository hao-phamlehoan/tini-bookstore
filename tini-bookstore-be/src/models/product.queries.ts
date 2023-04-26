export const ProductQueries = {
  getProduct: `SELECT * FROM PRODUCT`,
  getProductById: `SELECT * FROM PRODUCT WHERE PRODUCT.UUID = $1`,
  getProductByName: `SELECT * FROM PRODUCT WHERE UPPER(PRODUCT.P_NAME) LIKE '%' || UPPER($1) || '%'`
}

export const BookQueries = {
  getBook: `SELECT * FROM BOOK 
    INNER JOIN PRODUCT ON BOOK.BOOK_UUID = PRODUCT.UUID`,
  getBookById: `SELECT * FROM BOOK 
    INNER JOIN PRODUCT ON BOOK.BOOK_UUID = PRODUCT.UUID
    WHERE BOOK.BOOK_UUID = $1`
}

export const StationeryQueries = {
  getStationery: `SELECT * FROM STATIONERY
    INNER JOIN PRODUCT ON STATIONERY.STATIONERY_UUID = PRODUCT.UUID`,
  getStationeryById: `SELECT * FROM STATIONERY 
    INNER JOIN PRODUCT ON STATIONERY.STATIONERY_UUID = PRODUCT.UUID
    WHERE STATIONERY.STATIONERY_UUID = $1`
}