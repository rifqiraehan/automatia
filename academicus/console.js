(async () => {
  const DELAY = 2000;
  const TARGET = 21;

  function getNomorKuesioner() {
    const onclick = document
      .querySelector('input[value="Simpan dan Lanjut"]')
      ?.getAttribute('onclick');

    const match = onclick?.match(/simpan_ikm2\(\d+,\s*\d+,\s*(\d+),/);

    return match ? parseInt(match[1]) : null;
  }

  async function tungguPerubahan(nomorLama) {
    return new Promise(resolve => {
      const interval = setInterval(() => {
        const nomorBaru = getNomorKuesioner();

        if (
          nomorBaru !== null &&
          nomorBaru !== nomorLama
        ) {
          clearInterval(interval);
          resolve(nomorBaru);
        }

      }, 500);
    });
  }

  let current = getNomorKuesioner();
  console.log("Mulai dari:", current);

  while (current && current <= TARGET) {
    const totalRows =
      parseInt(document.getElementById('n')?.value || 0);

    for (let i = 1; i <= totalRows; i++) {
      const radio = document.getElementById(`r${i}a4`); // Spam Rata Kanan
      if (radio) radio.click();
    }

    console.log(`Kuesioner ${current} diisi`);
    await new Promise(r => setTimeout(r, DELAY));

    document
      .querySelector('input[value="Simpan dan Lanjut"]')
      ?.click();

    current = await tungguPerubahan(current);
    console.log(`Pindah ke ${current}`);
  }

  console.log("Selesai");
})();
