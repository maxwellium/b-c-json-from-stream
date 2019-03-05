import { Readable } from 'stream';
export declare function jsonFromStream<T>(req: Readable, encoding?: string): Promise<T>;
