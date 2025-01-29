module.exports = {
  mode: 'jit', 
    content: [
      "./src/**/*.{html,js,php}", // Sesuaikan dengan path file HTML, JS, atau PHP-mu
      "./*.{html,php}", // Jika file ada di root
      "node_modules/preline/dist/*.js"
    ],
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto'],    // Font Roboto
        jetbrains: ['JetBrains Mono'],  // Font JetBrains Mono
        },
      },
    },
    plugins: [
        require('preline/plugin'),
    ], // Tambahkan plugin Tailwind di sini
  };
  