import { openDB } from 'idb';
import { FetchedTimestamp, Video } from '../../models';
import { IDatabase, IRepository } from '../IDatabase';
import { DATABASE_NAME, DATABASE_VERSION } from './constants';
import { IndexedDatabaseBaseRepository } from './IndexedDatabaseBaseRepository';

const VIDEO_OBJECT_STORE = 'video';
const COUNTRY_VIDEO_FETCHED_TIMESTAMP_OBJECT_STORE = 'country-videos-timestamp';

const VIDEO_PRIMARY_KEY = 'id';
const COUNTRY_VIDEO_FETCHED_TIMESTAMP_ID = 'id';

export class IndexedDbDatabase implements IDatabase {
  private videoRepository: IRepository<Video>;
  private countryVideosFetchedTimestampRepository: IRepository<FetchedTimestamp>;

  constructor() {
    this.videoRepository = new IndexedDatabaseBaseRepository<Video>(VIDEO_OBJECT_STORE);
    this.countryVideosFetchedTimestampRepository = new IndexedDatabaseBaseRepository<FetchedTimestamp>(COUNTRY_VIDEO_FETCHED_TIMESTAMP_OBJECT_STORE);
  }

  getVideoRepository(): IRepository<Video> {
    return this.videoRepository;
  }
  
  getCountryVideosFetchedTimestampRepository(): IRepository<FetchedTimestamp> {
    return this.countryVideosFetchedTimestampRepository;
  }

  async setup(): Promise<void> {
    await openDB(DATABASE_NAME, DATABASE_VERSION, {
      upgrade(db) {
        const insertObjectStore = (entity: string, objectStoreName: string, objectStoreOptions: any) => {
          if(!db.objectStoreNames.contains(objectStoreName)) {
            db.createObjectStore(objectStoreName, objectStoreOptions);
            console.log(`${entity} object store created`);
          }
        };

        console.log('setting up data');
        
        insertObjectStore('video', VIDEO_OBJECT_STORE, { keyPath: VIDEO_PRIMARY_KEY, autoIncrement: false });
        insertObjectStore('country videos timestamp', COUNTRY_VIDEO_FETCHED_TIMESTAMP_OBJECT_STORE, { keyPath: COUNTRY_VIDEO_FETCHED_TIMESTAMP_ID, autoIncrement: false });
      }
    });
  }
}