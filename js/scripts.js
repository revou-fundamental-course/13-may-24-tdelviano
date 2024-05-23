// scripts.js

// Tunggu sampai seluruh dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen form untuk luas dan keliling
    const areaForm = document.getElementById('areaForm');
    const perimeterForm = document.getElementById('perimeterForm');
    const areaFormContainer = document.getElementById('areaFormContainer');
    const perimeterFormContainer = document.getElementById('perimeterFormContainer');
    const areaButton = document.getElementById('areaButton');
    const perimeterButton = document.getElementById('perimeterButton');
    const triangleButton = document.getElementById('triangleButton');
    const parallelogramButton = document.getElementById('parallelogramButton');

    // Tampilkan form luas segitiga
    areaButton.addEventListener('click', () => {
        areaFormContainer.style.display = 'block';
        perimeterFormContainer.style.display = 'none';
    });

    // Tampilkan form keliling segitiga
    perimeterButton.addEventListener('click', () => {
        perimeterFormContainer.style.display = 'block';
        areaFormContainer.style.display = 'none';
    });

    // Tampilkan section segitiga
    triangleButton.addEventListener('click', () => {
        document.getElementById('triangleSection').style.display = 'block';
    });

    // Sembunyikan section jajar genjang (tidak ada form)
    parallelogramButton.addEventListener('click', () => {
        document.getElementById('triangleSection').style.display = 'none';
    });

    // Tambahkan event listener untuk form luas
    areaForm.addEventListener('submit', function(event) {
        // Mencegah form dari reload halaman
        event.preventDefault();

        // Ambil nilai dari input alas dan tinggi
        const base = parseFloat(document.getElementById('base').value);
        const height = parseFloat(document.getElementById('height').value);

        // Hitung luas segitiga
        const area = 0.5 * base * height;

        // Tampilkan hasil luas segitiga
        document.getElementById('areaCalculation').textContent = `Luas Segitiga: ${area}`;
    });

    // Tambahkan event listener untuk form keliling
    perimeterForm.addEventListener('submit', function(event) {
        // Mencegah form dari reload halaman
        event.preventDefault();

        // Ambil nilai dari input sisi A, B, dan C
        const sideA = parseFloat(document.getElementById('sideA').value);
        const sideB = parseFloat(document.getElementById('sideB').value);
        const sideC = parseFloat(document.getElementById('sideC').value);

        // Hitung keliling segitiga
        const perimeter = sideA + sideB + sideC;

        // Tampilkan hasil keliling segitiga
        document.getElementById('perimeterCalculation').textContent = `Keliling Segitiga: ${perimeter}`;
    });

    // Reset hasil perhitungan ketika form direset
    areaForm.addEventListener('reset', function() {
        document.getElementById('areaCalculation').textContent = '';
    });

    perimeterForm.addEventListener('reset', function() {
        document.getElementById('perimeterCalculation').textContent = '';
    });
});
