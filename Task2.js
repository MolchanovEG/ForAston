class PaginationUtil {
  constructor(arr, elOnPage) {
    this.arr = arr;
    this.elOnPage = elOnPage;
  }

  pageCount() {
    let buff = Math.ceil(this.arr.length / this.elOnPage);
    return buff;
  }

  itemCount() {
    let buff = this.arr.length;
    return buff;
  }

  pageItemCount(pageNumber) {
    let lengthArr = this.arr.length;
    if (pageNumber < 0 || pageNumber >= this.pageCount()) {
      return -1;
    }
    let buff = ~~(lengthArr / (this.elOnPage * (pageNumber + 1)))
      ? this.elOnPage
      : lengthArr % this.elOnPage;
    return buff;
  }

  pageIndex(elIndex) {
    if (elIndex < 0 || elIndex > this.arr.length) return -1;

    return Math.floor(elIndex / this.elOnPage);
  }
}

// test
const helper = new PaginationUtil([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

console.log(helper.pageCount());

console.log(helper.itemCount());

console.log(helper.pageItemCount(0));
console.log(helper.pageItemCount(3));
console.log(helper.pageItemCount(4));

console.log(helper.pageIndex(7));
console.log(helper.pageIndex(2));
console.log(helper.pageIndex(20));
console.log(helper.pageIndex(-10));
