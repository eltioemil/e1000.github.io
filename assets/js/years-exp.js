---
---
(function () {
  var start = new Date('{{ site.career_start }}');
  var now = new Date();
  var months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
  var years = Math.round(months / 12);
  document.querySelectorAll('.years-exp').forEach(function (el) {
    el.textContent = years;
  });
})();
