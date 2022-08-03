import{ Item } from '../../auth/models/search-item.model'

export interface Response {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
