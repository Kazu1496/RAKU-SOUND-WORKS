interface DefaultQuery {
  draftKey?: string;
  fields?: string;
  depth?: number;
}

export interface GetContentQuery extends DefaultQuery {}

export interface GetContentsQuery extends DefaultQuery {
  limit?: number;
  offset?: number;
  orders?: string;
  q?: string;
  ids?: string;
  filters?: string;
}
