// alert('Cek koneksi JS')
const nama = document.getElementById('nama');

const umur = document.getElementById('umur');

const jk = document.getElementById('jk');

const namaOutput = document.getElementById('nama-output');
const umurOutput = document.getElementById('umur-output');
const jkOutput = document.getElementById('jk-output');

const formPendaftaran = document.getElementById('form-pendaftaran');

formPendaftaran.addEventListener('submit', function(e) {
  e.preventDefault();
  
  namaOutput.innerText = nama.value;
  umurOutput.innerText = umur.value;
  jkOutput.innerText = jk.value;
})