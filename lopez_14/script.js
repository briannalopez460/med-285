document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('songForm');
  const input = document.getElementById('songName');

  form.addEventListener('submit', function (e) {
    const song = input.value.trim();
    if (song === '') {
      alert('Please enter a song!');
      e.preventDefault();
    } else {
      alert('Thanks for your suggestion!');
    }
  });
});
