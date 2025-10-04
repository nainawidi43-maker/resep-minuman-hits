const resepMinuman = [
  {
    nama: "Es Teh Lemon",
    bahan: [
      "2 kantong teh",
      "1 buah lemon",
      "3 sdm gula",
      "500ml air panas",
      "Es batu secukupnya"
    ],
    cara: "Seduh teh dengan air panas, tambahkan gula, aduk rata. Tambahkan perasan lemon dan es batu."
  },
  {
    nama: "Jus Alpukat Cokelat",
    bahan: [
      "1 buah alpukat",
      "200ml susu cair",
      "2 sdm gula",
      "Saus cokelat secukupnya",
      "Es batu"
    ],
    cara: "Blender alpukat, susu, gula, dan es. Sajikan dengan saus cokelat."
  },
  {
    nama: "Es Kopi Susu Gula Aren",
    bahan: [
      "100ml kopi hitam",
      "50ml susu cair",
      "2 sdm gula aren cair",
      "Es batu"
    ],
    cara: "Masukkan gula aren dan es ke gelas, tambahkan kopi dan susu."
  },
  {
    nama: "Smoothie Mangga",
    bahan: [
      "1 buah mangga matang",
      "100ml yoghurt",
      "1 sdm madu",
      "Es batu"
    ],
    cara: "Blender semua bahan hingga halus, sajikan dingin."
  },
  {
    nama: "Es Cincau Susu",
    bahan: [
      "Cincau hitam",
      "Susu kental manis",
      "Air matang",
      "Es batu"
    ],
    cara: "Potong cincau, campur dengan susu dan air, tambahkan es."
  },
  {
    nama: "Lemon Tea Mint",
    bahan: [
      "Teh celup",
      "Perasan lemon",
      "Daun mint",
      "Gula",
      "Es batu"
    ],
    cara: "Seduh teh, tambahkan lemon, mint, gula, dan es."
  },
  {
    nama: "Jus Semangka",
    bahan: [
      "300g semangka tanpa biji",
      "1 sdm gula",
      "Es batu"
    ],
    cara: "Blender semua bahan, sajikan dingin."
  },
  {
    nama: "Soda Gembira",
    bahan: [
      "Sirup merah",
      "Susu kental manis",
      "Air soda",
      "Es batu"
    ],
    cara: "Campur sirup, susu, dan soda dalam gelas berisi es batu."
  },
  {
    nama: "Es Buah Segar",
    bahan: [
      "Buah-buahan potong (melon, semangka, anggur)",
      "Sirup cocopandan",
      "Air matang",
      "Es batu"
    ],
    cara: "Campur buah, sirup, dan air. Tambahkan es."
  },
  {
    nama: "Matcha Latte",
    bahan: [
      "1 sdt bubuk matcha",
      "200ml susu cair",
      "1 sdm gula",
      "Air panas sedikit"
    ],
    cara: "Larutkan matcha, campur dengan susu dan gula, aduk rata."
  },
  {
    nama: "Jus Jeruk Wortel",
    bahan: [
      "1 buah jeruk",
      "1 buah wortel",
      "1 sdm madu",
      "Air sedikit"
    ],
    cara: "Blender semua bahan hingga halus, saring bila perlu."
  }
];

const container = document.getElementById("resep-container");

resepMinuman.forEach((resep) => {
  const card = document.createElement("div");
  card.className = "resep";

  card.innerHTML = `
    <h2>${resep.nama}</h2>
    <h4>Bahan:</h4>
    <ul>${resep.bahan.map(b => `<li>${b}</li>`).join("")}</ul>
    <h4>Cara Membuat:</h4>
    <p>${resep.cara}</p>
  `;

  container.appendChild(card);
});
