// alert('Cek koneksi JS')
const DATA = [];

const nama = document.getElementById('nama');

const umur = document.getElementById('umur');

const jk = document.getElementById('jk');
const kelas = document.getElementById('kelas');


const namaOutput = document.getElementById('nama-output');
const umurOutput = document.getElementById('umur-output');
const jkOutput = document.getElementById('jk-output');
const kelasOutput = document.getElementById('kelas-output');

const bodyData = document.getElementById('bodyData');

const formPendaftaran = document.getElementById('form-pendaftaran');

formPendaftaran.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const tempData = {
    nama: nama.value,
    umur: umur.value,
    jk: jk.value,
    kelas: kelas.value,
  };

  DATA.push(tempData);
  
  namaOutput.innerText = nama.value;
  umurOutput.innerText = umur.value;
  jkOutput.innerText = jk.value;
  kelasOutput.innerText = kelas.value;

  bodyData.innerHTML = '';
  DATA.forEach((item) => {
    bodyData.innerHTML += `
      <tr>
        <td>${item.nama}</td>
        <td>${item.umur}</td>
        <td>${item.jk}</td>
        <td>${item.kelas}</td>
      </tr>
    `;
  });
  console.log(DATA);
})

