export abstract class StatusServiceInterface {
  abstract createStatus(): string;
  abstract updateStatus(): string;
  abstract getStatus(): string;
  abstract searchStatus(): string;
}
