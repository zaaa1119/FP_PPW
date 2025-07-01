document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("scrollContainer");
  const btnLeft = document.getElementById("btnScrollLeft");
  const btnRight = document.getElementById("btnScrollRight");

  if (btnLeft && container) {
    btnLeft.addEventListener("click", function () {
      console.log("Tombol kiri diklik");
      container.scrollBy({ left: -325, behavior: "smooth" });
    });
  }

  if (btnRight && container) {
    btnRight.addEventListener("click", function () {
      console.log("Tombol kanan diklik");
      container.scrollBy({ left: 325, behavior: "smooth" });
    });
  }

  
  function tampilkanGaleriGambar(folderName, totalGambar) {
    const container = document.getElementById("scrollContainer");
    if (!container) return;

    for (let i = 1; i <= totalGambar; i++) {
      const card = document.createElement("div");
      card.className = "card-destinasi";

      const img = document.createElement("img");
      img.src = `${folderName}/${folderName}${i}.jpg`;
      img.alt = `Gambar ${folderName.replace(/_/g, ' ')}`;

      card.appendChild(img);
      container.appendChild(card);
    }
  }

    // Ambil nama file HTML tanpa ".html"
  const path = window.location.pathname;
  const currentFile = path.substring(path.lastIndexOf("/") + 1);
  const folderName = currentFile.replace(".html", "");
  

  if (folderName.toLowerCase() !== "index") {
  tampilkanGaleriGambar(folderName, 10);
  }


  const daftarHewan = [
    { nama: "Harimau Sumatera", file: "Harimau_Sumatera.html" },
    { nama: "Badak Jawa", file: "Badak_Jawa.html" },
    { nama: "Badak Sumatera", file: "Badak_Sumatera.html" },
    { nama: "Orangutan Kalimantan", file: "Orangutan_Kalimantan.html" },
    { nama: "Orangutan Sumatera", file: "Orangutan_Sumatra.html" },
    { nama: "Gajah Sumatera", file: "Gajah_Sumatera.html" },
    { nama: "Elang Jawa", file: "Elang_Jawa.html" },
    { nama: "Komodo", file: "Komodo.html" },
    { nama: "Jalak Bali", file: "Jalak_Bali.html" },
    { nama: "Burung Cendrawasih", file: "Burung_Cendrawasih.html" },
    { nama: "Kaktua Raja", file: "Kakatua_Raja.html" },
    { nama: "Trenggiling", file: "Trenggiling_pongloin.html" },
    { nama: "Anoa", file: "Anoa.html" },
    { nama: "Rangkong Gading", file: "Rangkong_Gading.html" },
    { nama: "Pesut Mahakam", file: "Pesut_Mahakam.html" },
    { nama: "Bekantan", file: "Bekantan.html" },
    { nama: "Kangkareng Hitam", file: "Kangkareng_Hitam.html" },
    { nama: "Kucing Merah Kalimantan", file: "Kucing_Merah_Kalimantan.html" },
    { nama: "Kura-Kura Rote", file: "Kurakura_Leher_Panjang_Rote.html" },
    { nama: "Kukang Jawa", file: "Kukang_Jawa.html" },
    { nama: "Panda Raksasa", file: "Panda_Raksaksa.html" },
    { nama: "Harimau Siberia", file: "Harimau_Siberia.html" },
    { nama: "Macan Tutul Amur", file: "Macan_Tutul_Amur.html" },
    { nama: "Gorila Gunung", file: "Gorila_Gunung.html" },
    { nama: "Gajah Afrika", file: "Gajah_Afrika.html" },    
    { nama: "Badak Hitam", file: "Badak_Hitam.html" },
    { nama: "Lumba-lumba Irrawady", file: "Lumbalumba_Irrawaddy.html" },
    { nama: "Penyu Hijau", file: "Penyu_Hijau.html" },
    { nama: "Iriomote Cat", file: "Iriomote_Cat.html" },
    { nama: "Axolotl", file: "Axolotl.html" },
    { nama: "Vaquita", file: "Vaquita_ikan_porpoise.html" },
    { nama: "Kakapo", file: "Kakapo.html" },
    { nama: "Saola", file: "Saola.html" },
    { nama: "Leopard Salju", file: "Leopard_Salju.html" },
    { nama: "Condor California", file: "Condor_California.html" },
    { nama: "Salamander Raksasa Cina", file: "Salamander_Raksasa_Cina.html" },
    { nama: "Burung Shoebill", file: "Burung_Shoebill.html" },
    { nama: "Binturong", file: "Binturong.html" },
    { nama: "Bonobo", file: "Bonobo.html" },
    { nama: "Serigala_Merah", file: "Serigala_Merah.html" },
    { nama: "Dodo", file: "Dodo.html" },
    { nama: "Harimau Tasmania", file: "Harimau_Tasmania.html" },
    { nama: "Burung Moa", file: "Burung_Moa.html" },
    { nama: "Mammoth Berbulu", file: "Mammoth_Berbulu.html" },
    { nama: "Quagga", file: "Quagga.html" },
    { nama: "Great Auk", file: "Great_Auk.html" },
    { nama: "Baiji", file: "Baiji_Lumbalumba_Sungai.html" },
    { nama: "Singa Gua Eropa", file: "Singa_Gua_Eropa.html" },
    { nama: "Rusa Irlandia", file: "Rusa_Irlandia_Megaloceros.html" },
    { nama: "Carolina Parakeet", file: "Carolina_Parakeet.html" },
    { nama: "Aurochs", file: "Aurochs_lembuliar.html" },
    { nama: "Burung Passenger Pigeon", file: "Burung_Passenger_Pigeon.html" },
    { nama: "Pyrenean Ibex", file: "Pyrenean_Ibex.html" },
    { nama: "Steller's Sea Cow", file: "Stellers_Sea_Cow.html" },
    { nama: "Tikus Pulau Bramble Cay", file: "Tikus_Pulau_Bramble_Cay.html" },
    { nama: "Burung Labrador Duck", file: "Burung_Labrador_Duck.html" },
    { nama: "Kapodak", file: "Kapodak_burungflightless.html" },
    { nama: "Burung Pinguin Raksasa", file: "Burung_Pinguin_Raksasa.html" },
    { nama: "Tikus Pulau Wake", file: "Tikus_Pulau_Wake.html" },
    { nama: "Lumba-Lumba Atlantik Abu-abu", file: "Lumbalumba_Atlantik_Abuabu.html" },
  ];

  function getRandomImage(fileHtml) {
    const baseName = fileHtml.replace(".html", "");
    const nomor = Math.floor(Math.random() * 10) + 1;
    return `../${baseName}/${baseName}${nomor}.jpg`;
  }

  function tampilkanHewanLain() {
    const path = window.location.pathname;
    const currentFile = path.substring(path.lastIndexOf("/") + 1);

    const hewanLain = daftarHewan.filter(h => h.file !== currentFile);
    if (hewanLain.length < 2) return;

    const acak1 = hewanLain[Math.floor(Math.random() * hewanLain.length)];
    let acak2;
    do {
      acak2 = hewanLain[Math.floor(Math.random() * hewanLain.length)];
    } while (acak2.file === acak1.file);

    const gambar1 = getRandomImage(acak1.file);
    const gambar2 = getRandomImage(acak2.file);

    const div = document.getElementById("hewan-lain");
    if (!div) return;
        
    div.innerHTML = `
      <hr>
      <p style="text-align: center;"><strong>Lihat juga hewan lainnya :</strong></p>
      <div class="hewan-kartu d-flex flex-wrap gap-3 justify-content-center">
        <div class="hewan-item text-center">
          <a href="${acak1.file}" class="text-decoration-none text-dark">
            <img src="${gambar1}" alt="${acak1.nama}" class="img-hewan">
            <p>${acak1.nama}</p>
          </a>
        </div>
        <div class="hewan-item text-center">
          <a href="${acak2.file}" class="text-decoration-none text-dark">
            <img src="${gambar2}" alt="${acak2.nama}" class="img-hewan">
            <p>${acak2.nama}</p>
          </a>
        </div>
      </div>
    `;
  }

  tampilkanHewanLain();
});
