/*Stepper*/

//const steppers = document.querySelectorAll(".stepper");

//if (steppers.length > 0) {
//  const isNotApple = () => {
//    return !/iPhone|iPad|iPod/i.test(navigator.userAgent);
//  };

//  function allowNumbersOnly(e) {
//    const code = e.which ? e.which : e.keyCode;
//    if (code > 31 && (code < 48 || code > 57)) {
//      e.preventDefault();
//    } else if (code >= 48 && code <= 57) {
//      if (!e.target.value) {
//        e.target.value = 1;
//      }
//    }
//  }

//  steppers.forEach((stepper) => {
//    const stepperInput = stepper.querySelector(".stepper__input");
//    const stepperBtnUp = stepper.querySelector(".stepper__btn--up");
//    const stepperBtnDown = stepper.querySelector(".stepper__btn--down");
//    const stepperField = stepper.querySelector(".stepper__field");
//    const stepperText = stepper.querySelector(".stepper__text");
//    let count = parseInt(stepperInput.value);

//    stepperInput.addEventListener("keyup", (e) => {
//      if (parseInt(e.target.value) === 0) {
//        e.target.value = 1;
//      }

//      if (isNotApple()) {
//        e.target.style.width = e.target.value.length + 0.6 + "ex";
//      } else {
//        e.target.style.width = e.target.value.length + 1.2 + "ex";
//      }

//      count = parseInt(stepperInput.value);

//      if (count <= 1) {
//        stepperBtnDown.classList.add("stepper__btn--disabled");
//        count = 1;
//      } else {
//        stepperBtnDown.classList.remove("stepper__btn--disabled");
//      }
//    });

//    stepperField.addEventListener("click", () => {
//      stepperText.style.display = "none";
//      stepperInput.style.minWidth = "2em";
//    });

//    stepperInput.addEventListener("keypress", (e) => {
//      allowNumbersOnly(e);
//    });

//    stepperInput.addEventListener("change", (e) => {
//      if (!parseInt(e.target.value)) {
//        e.target.value = 1;
//      }

//      count = parseInt(stepperInput.value);

//      if (count <= 1) {
//        stepperBtnDown.classList.add("stepper__btn--disabled");
//        count = 1;
//      } else {
//        stepperBtnDown.classList.remove("stepper__btn--disabled");
//      }
//    });

//    stepperBtnUp.addEventListener("click", (e) => {
//      e.preventDefault();

//      if (count < 0) count = 0;

//      count++;

//      if (count <= 1) {
//        stepperBtnDown.classList.add("stepper__btn--disabled");
//        count = 1;
//      } else {
//        stepperBtnDown.classList.remove("stepper__btn--disabled");
//      }

//      stepperInput.value = count.toString();
//    });
//  });
//}


/*End Stepper*/

const counters = document.querySelectorAll('.stepper');

counters.forEach((counter) => {
  const input = counter.querySelector('.stepper__input');
  const stepperText = counter.querySelector('.stepper__text');

  console.log('stepper test');
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '');

    if (input.value.length > 0) {
      stepperText.style.display = 'none';
    } else {
      stepperText.style.display = 'inline';
    }
  });

  input.minLength = 1;

  input.addEventListener('input', () => {
    input.style.width = (input.value.length * 12) + 'px';
  });
});




