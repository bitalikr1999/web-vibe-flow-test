export interface IPagination {
  limit: number;
  page?: number;
  sortField?: string;
  sort?: string;
  skip?: number;
  searchString?: string;
}

export interface IPaginationList<T> {
  items: T[];
  count: number;
}
