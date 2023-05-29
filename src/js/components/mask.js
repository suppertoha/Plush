// Получаем все поля ввода с классом .phone-mask на странице
let phoneInputs = document.querySelectorAll(".phone-mask");

// Проверяем, есть ли поля ввода на странице
if (phoneInputs.length > 0) {
  // Опции маски
  let maskOptions = {
    mask: "+{7}(000)000-00-00",
  };

  // Применяем маску к каждому полю ввода в цикле forEach
  phoneInputs.forEach(function (input) {
    let mask = IMask(input, maskOptions);
  });
}

//var element = document.getElementById('myInput');
//var maskOptions = {
//  mask: '+{7}(000)000-00-00'
//};
//var mask = IMask(element, maskOptions);
