
// // document.getElementById("open-invitation").addEventListener("click", function () {
// //   document.getElementById("splash").style.display = "none";
// //   document.getElementById("main-content").style.display = "block";
// //   document.getElementById("bottom-nav").style.display = "flex";
// // });

// document.querySelectorAll('.bottom-nav a').forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     const targetId = this.getAttribute('href').substring(1);

//     // Sembunyikan semua section
//     document.querySelectorAll('section').forEach(section => {
//       section.classList.remove('show-card');
//       section.classList.add('hidden-card');
//     });

//     // Tampilkan dan animasikan yang dipilih
//     const target = document.getElementById(targetId);
//     target.classList.remove('hidden-card');
    
//     // Sedikit delay agar animasi transisi terlihat
//     setTimeout(() => {
//       target.classList.add('show-card');
//     }, 100);
//   });
// });

// document.getElementById("menu-galeri").addEventListener("click", function () {
//   // Sembunyikan menu 'opening'
//   document.getElementById("menu-opening").style.display = "none";
  
//   // Tampilkan menu 'doa' dan 'lokasi'
//   document.getElementById("menu-doa").style.display = "inline";
//   document.getElementById("menu-lokasi").style.display = "inline";
// });

// document.getElementById('open-invitation').addEventListener('click', function () {
//   // Sembunyikan splash screen
//   document.getElementById('splash').style.display = 'none';
  
//   // Tampilkan main content
//   document.getElementById('main-content').style.display = '';

//   // Scroll ke #opening
//   document.getElementById('opening').scrollIntoView({ behavior: 'smooth' });
// });

// const sections = document.querySelectorAll('#main-content section');
// const navLinks = document.querySelectorAll('.bottom-nav a');

// navLinks.forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault(); // Mencegah loncatan default
//     const targetId = this.getAttribute('href').substring(1); // Contoh: 'akad'

//     sections.forEach(section => {
//       if (section.id === targetId) {
//         section.style.display = '';
//       } else {
//         section.style.display = 'none';
//       }
//     });
//   });
// });

// window.addEventListener('DOMContentLoaded', function () {
//   sections.forEach(section => {
//     if (section.id !== 'opening') {
//       section.style.display = 'none';
//     }
//   });
// });
// // Get guest name from URL
// const urlParams = new URLSearchParams(window.location.search);
//   const guestName = urlParams.get('to');

//   if (guestName) {
//     const decodedName = decodeURIComponent(guestName.replace(/\+/g, ' '));
//     document.querySelectorAll('.guest-name').forEach(el => {
//       el.textContent = decodedName;
//     });
//   }

// // Countdown
// const eventDate = new Date("May 25, 2025 08:00:00").getTime();

// const countdown = setInterval(() => {
//   const now = new Date().getTime();
//   const distance = eventDate - now;

//   if (distance < 0) {
//     clearInterval(countdown);
//     document.getElementById("countdown").innerHTML = "Acara telah selesai";
//     return;
//   }

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("days").innerHTML = days;
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("minutes").innerHTML = minutes;
//   document.getElementById("seconds").innerHTML = seconds;
// }, 1000);



// Splash screen open invitation
document.getElementById('open-invitation').addEventListener('click', function () {
  // Sembunyikan splash screen
  document.getElementById('splash').style.display = 'none';

  // Tampilkan main content dan bottom-nav
  document.getElementById('main-content').style.display = '';
  // document.getElementById('bottom-nav').style.display = 'flex';

  // // Scroll ke #opening
  // document.getElementById('opening').scrollIntoView({ behavior: 'smooth' });
   // Tampilkan hanya section opening
  
  document.querySelectorAll('#main-content section').forEach(section => {
    if (section.id === 'opening') {
      section.style.display = '';
    } else {
      section.style.display = 'none';
    }
  });

  // Set menu Opening jadi aktif
  document.querySelectorAll('.bottom-nav .nav-link').forEach(link => {
    link.classList.remove('active');
  });
  document.getElementById('menu-opening').classList.add('active');

  // Scroll ke Opening
  document.getElementById('opening').scrollIntoView({ behavior: 'smooth' });
});

// Sembunyikan semua section kecuali 'opening' saat halaman dimuat
const sections = document.querySelectorAll('#main-content section');
window.addEventListener('DOMContentLoaded', function () {
  sections.forEach(section => {
    if (section.id !== 'opening') {
      section.style.display = 'none';
    }
  });
});

// Navigasi menu bottom-nav
document.querySelectorAll('.bottom-nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);

    // Tampilkan hanya section yang dipilih
    sections.forEach(section => {
      if (section.id === targetId) {
        section.style.display = '';
      } else {
        section.style.display = 'none';
      }
    });

    // Tambahkan animasi
    const target = document.getElementById(targetId);
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('show-card');
      section.classList.add('hidden-card');
    });
    target.classList.remove('hidden-card');
    setTimeout(() => {
      target.classList.add('show-card');
    }, 100);

    // Atur menu dinamis
    if (targetId === "couple") {
      document.getElementById("menu-opening").style.display = "none";
      document.getElementById("menu-quotes").style.display = "none";
      document.getElementById("menu-lokasi").style.display = "inline";
      document.getElementById("menu-galeri").style.display = "inline";
    } else if (
      targetId === "akad" ||
      targetId === "resepsi"
    ) {
      document.getElementById("menu-opening").style.display = "inline";
      document.getElementById("menu-lokasi").style.display = "none";
      document.getElementById("menu-quotes").style.display = "inline  ";
      document.getElementById("menu-galeri").style.display = "none";
    }
  });
});

// Get guest name from URL
const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get('to');
if (guestName) {
  const decodedName = decodeURIComponent(guestName.replace(/\+/g, ' '));
  document.querySelectorAll('.guest-name').forEach(el => {
    el.textContent = decodedName;
  });
}

//Highlight active menu
document.querySelectorAll('.bottom-nav .nav-link').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.bottom-nav .nav-link').forEach(nav => {
      nav.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// Countdown Timer
const eventDate = new Date("May 25, 2025 08:00:00").getTime();
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Acara telah selesai";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

