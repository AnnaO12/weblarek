import "./scss/styles.scss";
import { Api } from "./components/base/Api";
import { API_URL } from "./utils/constants";
import { WebLarekApi } from "./components/Api/WebLarekApi";
import { Catalog } from "./components/Models/Catalog";
import { Basket } from "./components/Models/Basket";
import { Buyer } from "./components/Models/Buyer";
import { apiProducts } from "./utils/data";

const catalog = new Catalog();
const basket = new Basket();
const buyer = new Buyer();

// Проверка Catalog
catalog.saveProducts(apiProducts.items);
console.log("Массив товаров из каталога:", catalog.getProducts());
const firstProductId = apiProducts.items[0].id;
console.log("Товар по id:", catalog.getProduct(firstProductId));
const firstProduct = apiProducts.items[0];
catalog.setSelectedProduct(firstProduct);
console.log("Выбранный товар:", catalog.getSelectedProduct());

// Проверка Basket
basket.addProduct(apiProducts.items[0]);
basket.addProduct(apiProducts.items[1]);
console.log("Товары в корзине:", basket.getBasketProducts());
console.log("Количество товаров в корзине:", basket.getCount());
console.log("Общая стоимость корзины:", basket.getTotalPrice());
console.log(
  "Есть ли первый товар в корзине:",
  basket.hasProduct(apiProducts.items[0].id),
);
basket.removeProduct(apiProducts.items[0].id);
console.log("Корзина после удаления товара:", basket.getBasketProducts());
basket.clearBasket();
console.log("Корзина после очистки:", basket.getBasketProducts());

// Проверка Buyer
buyer.savePayment("card");
buyer.saveEmail("test@mail.ru");
buyer.savePhone("+7999999999");
buyer.saveAddress("Spb");
console.log("Данные покупателя:", buyer.getBuyerData());
console.log("Ошибки при заполнении:", buyer.validateBuyerData());
buyer.clearBuyerData();
console.log("Данные покупателя после очистки:", buyer.getBuyerData());
console.log("Ошибки после очистки:", buyer.validateBuyerData());

// Получение каталога с сервера
const api = new Api(API_URL);
const webLarekApi = new WebLarekApi(api);

async function loadProducts() {
  try {
    const data = await webLarekApi.getProducts();
    catalog.saveProducts(data.items);
    console.log("Каталог с сервера:", catalog.getProducts());
  } catch (error) {
    console.error("Ошибка загрузки каталога:", error);
  }
}
loadProducts();
