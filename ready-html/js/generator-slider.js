function slider_value(){
    
  const output = document.getElementById('slider-value');

  // Инициализация вывода текущего значения ползунка
  output.textContent = "Slide count: " + slider.value;

  // Обновление текста при перемещении ползунка
  slider.oninput = function() {
      output.textContent = "Slide count: " + slider.value;
  }
}

slider_value()