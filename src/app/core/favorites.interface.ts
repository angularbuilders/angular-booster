export interface Favorites {
  add(slug: string): void;
  getList(): string[];
}
