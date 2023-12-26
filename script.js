function togglePassword() {
    var passwordField = document.getElementById("passwordInput");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      document.querySelector(".toggle-btn").textContent = "Показать";
    } else {
      passwordField.type = "password";
      document.querySelector(".toggle-btn").textContent = "Скрыть";
    }
  }

  // Получаем ссылки на элементы
  const input1 = document.getElementById("useremail");
  const input2 = document.getElementById("passwordInput");
  const myButton = document.getElementById("myButton");

  // Функция для изменения цвета кнопки
  function changeButtonColor() {
    // Получаем значения из обоих полей ввода
    const value1 = input1.value.trim();
    const value2 = input2.value.trim();

    // Если оба поля ввода не пустые, меняем цвет кнопки
    if (value1 !== "" && value2 !== "") {
      myButton.style.backgroundColor = "rgba(254, 44, 85, 1)"; // Любой цвет, который вам нравится
      myButton.style.color = "#fff";
    } else {
      myButton.style.backgroundColor = ""; // Если одно из полей пустое, сбрасываем цвет
    }
  }

  // Слушаем события изменения в полях ввода
  input1.addEventListener("input", changeButtonColor);
  input2.addEventListener("input", changeButtonColor);