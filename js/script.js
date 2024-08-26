const textToEncrypt = document.getElementById('text-to-encrypt');
const encryptedText = document.getElementById('encrypted-text');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const copyButton = document.getElementById('copy-button');

encryptButton.addEventListener('click', (event) => {
    event.preventDefault();  // Evita que el formulario se envíe
    const text = textToEncrypt.value;
    const encrypted = encrypt(text);
    encryptedText.value = encrypted;
});

decryptButton.addEventListener('click', (event) => {
    event.preventDefault();  // Evita que el formulario se envíe
    const text = textToEncrypt.value;
    const decrypted = decrypt(text);
    encryptedText.value = decrypted;
});

copyButton.addEventListener('click', () => {
    copyToClipboard(encryptedText.value);
});

function encrypt(text) {
    // Reglas de encriptación
    text = text.replace(/e/g, 'enter');
    text = text.replace(/i/g, 'imes');
    text = text.replace(/a/g, 'ai');
    text = text.replace(/o/g, 'ober');
    text = text.replace(/u/g, 'ufat');
    return text;
}

function decrypt(text) {
    // Reglas de desencriptación
    text = text.replace(/enter/g, 'e');
    text = text.replace(/imes/g, 'i');
    text = text.replace(/ai/g, 'a');
    text = text.replace(/ober/g, 'o');
    text = text.replace(/ufat/g, 'u');
    return text;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            alert('Error al copiar el texto: ', err);
        });
}
