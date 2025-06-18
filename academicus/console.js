const totalRows = parseInt(document.getElementById('n').value);

for (let i = 1; i <= totalRows; i++) {
    const radio = document.getElementById(`r${i}a3`);
    if (radio) {
        radio.checked = true;
    }
}

// Automate the submit button click
// const submitButton = document.querySelector('input[value="Simpan dan Lanjut"]');
// if (submitButton) {
//     submitButton.click();
// }