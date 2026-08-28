import { IProduct } from "../../types";

export class Basket {
  items: IProduct[] = [];

  getBasketProducts(): IProduct[] {
    return this.items;
  }

  addProduct(product: IProduct): void {
    this.items.push(product);
  }

  removeProduct(product: IProduct): void {
    this.items = this.items.filter(function (item) {
      return item.id !== product.id;
    });
  }

  clearBasket(): void {
    this.items = [];
  }

  getTotalPrice(): number {
    return this.items.reduce(function (sum, product) {
      if (product.price === null) {
        return sum;
      }
      return sum + product.price;
    }, 0);
  }

  getCount(): number {
    return this.items.length;
  }

  hasProduct(id: string): boolean {
    const product = this.items.find(function (item) {
      return item.id === id;
    });

    if (product !== undefined) {
      return true;
    } else {
      return false;
    }
  }
}
