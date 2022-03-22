export interface ApiType<T> {
  loading: boolean;
  data?: T;
  error: Error;
}
