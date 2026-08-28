import { IProduct } from "../../types";

export class Basket {
  private items: IProduct[] = [];

  getBasketProducts(): IProduct[] {
    return this.items;
  }

  addProduct(product: IProduct): void {
    this.items.push(product);
  }

  removeProduct(id: string): void {
    this.items = this.items.filter(function (item) {
      return item.id !== id;
    });
  }

  clearBasket(): void {
    this.items = [];
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, item) => sum + (item.price || 0), 0);
  }

  getCount(): number {
    return this.items.length;
  }

  hasProduct(id: string): boolean {
    return this.items.some((item) => item.id === id);
  }
}
