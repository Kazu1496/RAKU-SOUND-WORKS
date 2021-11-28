import { Model } from '@/lib/microcms/client/types/model';
import {
  GetContentQuery,
  GetContentsQuery,
} from '@/lib/microcms/client/types/request';
import { GetContentsResponse } from '@/lib/microcms/client/types/response';

type GetContentFn<T> = <K extends keyof T>(
  _endpoint: K,
  _id: string,
  _query?: GetContentQuery,
) => Promise<T[K] & Model>;

type GetContentsRawFn<T> = <K extends keyof T>(
  _endpoint: K,
  _query?: GetContentsQuery,
) => Promise<GetContentsResponse<T[K] & Model>>;

type GetContentsFn<T> = <K extends keyof T>(
  _endpoint: K,
  _query?: GetContentsQuery,
) => Promise<(T[K] & Model)[]>;

type GetObjectContentFn<T> = <K extends keyof T>(
  _endpoint: K,
  _query?: GetContentsQuery,
) => Promise<T[K] & Model>;

interface Client<T extends EndpointTypeMap> {
  getContent: GetContentFn<T>;
  getObjectContent: GetObjectContentFn<T>;
  getContentsRaw: GetContentsRawFn<T>;
  getContents: GetContentsFn<T>;
}

export interface ClientConfig {
  serviceId: string;
  apiKey: string;
  globalDraftKey?: string;
}

const makeQueryString = (query: object): string => {
  let queryStr = Object.entries(query)
    .map(([key, value]) => {
      return value ? `${key}=${value}` : '';
    })
    .join('&');
  if (queryStr.length > 0) {
    queryStr = `?${queryStr}`;
  }
  return queryStr;
};

interface EndpointTypeMap {
  [endpoint: string]: object;
}

export const createClient = <T extends EndpointTypeMap>(
  config: ClientConfig,
): Client<T> => {
  const baseUrl = `https://${config.serviceId}.microcms.io/api/v1`;
  const httpOption = {
    headers: {
      'X-MICROCMS-API-KEY': config.apiKey,
    },
  };

  const getContent: GetContentFn<T> = async (endpoint, id, query = {}) => {
    return fetch(
      `${baseUrl}/${endpoint}/${id}${makeQueryString(query)}`,
      httpOption,
    )
      .then((res) => res.json())
      .catch(() => null);
  };

  const getObjectContent: GetObjectContentFn<T> = async (
    endpoint,
    query = {},
  ) => {
    return fetch(`${baseUrl}/${endpoint}${makeQueryString(query)}`, httpOption)
      .then((res) => res.json())
      .catch(() => null);
  };

  const getContentsRaw: GetContentsRawFn<T> = async (endpoint, query = {}) => {
    return fetch(`${baseUrl}/${endpoint}${makeQueryString(query)}`, httpOption)
      .then((res) => res.json())
      .catch(() => []);
  };

  const getContents: GetContentsFn<T> = async (endpoint, query = {}) => {
    const data = await getContentsRaw(endpoint, query);
    return data.contents;
  };

  return {
    getContent,
    getObjectContent,
    getContentsRaw,
    getContents,
  };
};
