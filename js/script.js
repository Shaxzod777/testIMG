let url =
  "https://script.google.com/macros/s/AKfycbwUBrbH2571alXBG_0D2jl7hcOKIF6cEeaDgSjwhYzBorlcqs7uYoZegKbK1pjd4-tt/exec";

const formData = {
  name: "Иван",
  phone: "+79991234567",
  email: "test@example.com",
  message: "Хочу заказать услугу",
};

fetch(url, {
  method: "POST",
  mode: "no-cors", // Если фронтенд находится на другом домене (CORS-ограничения Google Apps Script)
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
})
  .then((response) => console.log("Успешно отправлено!"))
  .catch((error) => console.error("Ошибка:", error));
