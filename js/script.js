

function insert(num) {
  if (document.form.calcul.value == "0") {
    document.form.calcul.value = num;
  } else {
  document.form.calcul.value = document.form.calcul.value + num;
};
  document.form.textview.value = eval(document.form.calcul.value);
}

function equal() {
  document.form.calcul.value = eval(document.form.calcul.value);
  document.form.textview.value = "";
}

function c() {
  document.form.textview.value = "0";
  document.form.calcul.value = "0";
}

function back() {
  var exp = document.form.calcul.value;
  document.form.calcul.value = exp.substring(0, exp.length - 1);
  document.form.textview.value = eval(document.form.calcul.value) ;
}
