import { Video, FetchedTimestamp } from '../models';

export interface IRepository<T> {
  insert(entity: T): Promise<T>;
  read(id: number): Promise<T>;
  readAll(): Promise<T[]>;
  update(entity: T): Promise<T>;
  delete(id: number): Promise<number>;
}

export interface IDatabase {
  getVideoRepository(): IRepository<Video>;
  getCountryVideosFetchedTimestampRepository(): IRepository<FetchedTimestamp>;
  setup(): Promise<void>;
}