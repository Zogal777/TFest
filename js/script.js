document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('form-message').hidden = false;
      form.reset();
    });

    const messageField = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    charCount.textContent = messageField.maxLength;

    messageField.addEventListener('input', () => {
      const remaining = messageField.maxLength - messageField.value.length;
      charCount.textContent = remaining;
    });
  }

  const params = new URLSearchParams(window.location.search);
  const songId = params.get("song");
  if (songId && songs[songId]) {
    const song = songs[songId];
    document.getElementById("cover").src = song.cover;
    document.getElementById("song-title").textContent = song.title;
    document.getElementById("audio").src = song.file;
  }
});

function applyTheme(theme) {
  document.body.classList.toggle('dark-theme', theme === 'dark');
}

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

function openPlayer(id) {
  window.location.href = `player.html?song=${id}`;
}

const songs = {
  1: { title: "Ламбада", file: "audio/song1.mp3", cover: "images/song1.webp" },
  2: { title: "Улети", file: "audio/song2.mp3", cover: "images/song2.webp" },
  3: { title: "Ни вчера не завтра", file: "audio/song3.mp3", cover: "images/song3.webp" },
  4: { title: "Соври мне", file: "audio/song4.mp3", cover: "images/song4.webp" },
  5: { title: "Ты хочешь жить / Go Loco", file: "audio/song5.mp3", cover: "images/song5.webp" },
  6: { title: "Устал, беги", file: "audio/song6.mp3", cover: "images/song6.webp" },
  7: { title: "Не помню", file: "audio/song7.mp3", cover: "images/song7.webp" },
  8: { title: "Одно я знал_выдох", file: "audio/song8.mp3", cover: "images/song8.webp" },
  9: { title: "Музыка пасла меня", file: "audio/song9.mp3", cover: "images/song9.webp" },
  10: { title: "Окно", file: "audio/song10.mp3", cover: "images/song10.webp" },

};
