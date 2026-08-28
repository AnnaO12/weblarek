import { IBuyer, IValidationErrors, TPayment } from "../../types";

export class Buyer {
  private payment: TPayment | null = null;
  private email: string = "";
  private phone: string = "";
  private address: string = "";

  savePayment(payment: TPayment): void {
    this.payment = payment;
  }

  saveEmail(email: string): void {
    this.email = email;
  }

  savePhone(phone: string): void {
    this.phone = phone;
  }

  saveAddress(address: string): void {
    this.address = address;
  }

  getBuyerData(): IBuyer {
    return {
      payment: this.payment,
      email: this.email,
      phone: this.phone,
      address: this.address,
    };
  }

  clearBuyerData(): void {
    this.payment = null;
    this.email = "";
    this.phone = "";
    this.address = "";
  }

  validateBuyerData(): IValidationErrors {
    const errors: IValidationErrors = {};
    if (!this.payment) {
      errors.payment = "Выберите способ оплаты";
    }
    if (!this.email) {
      errors.email = "Укажите email";
    }
    if (!this.phone) {
      errors.phone = "Укажите номер телефона";
    }
    if (!this.address) {
      errors.address = "Укажите адрес доставки";
    }
    return errors;
  }
}
