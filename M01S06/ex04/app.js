(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function (e) {
      console.log('Mouseul este pe scena');
      p.innerText = 'Mouseul este pe scena';
      document.body.append(p);
    });

    stage.addEventListener('mousemove', function (e) {
      console.log('Mouesul NU este pe scena');
      const p = document.createElement('p');
      p.innerText = 'Mouseul NU este pe scena';

      document.body.append(p);
    });
  });
})();
