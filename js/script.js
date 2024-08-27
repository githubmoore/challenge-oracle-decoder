const textToEncrypt = document.getElementById('text-to-encrypt');
const encryptedText = document.getElementById('encrypted-text');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const copyButton = document.getElementById('copy-button');
const defaultImageContainer = document.getElementById('default-image-container');
const errorMessage = document.createElement('div');
errorMessage.className = 'alert alert-danger mt-3';
errorMessage.style.display = 'none';

textToEncrypt.parentElement.appendChild(errorMessage);

function showEncryptedContent() {
    defaultImageContainer.classList.add('d-none');
    encryptedText.classList.remove('d-none');
    copyButton.classList.remove('d-none');
}

function validateText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function hideErrorMessage() {
    errorMessage.style.display = 'none';
}

encryptButton.addEventListener('click', (event) => {
    event.preventDefault();
    const text = textToEncrypt.value;
    hideErrorMessage();
    if (text.trim() !== '') {
        if (validateText(text)) {
            const encrypted = encrypt(text);
            encryptedText.value = encrypted;
            showEncryptedContent();
        } else {
            showErrorMessage('El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas sin acentos y espacios.');
        }
    }
});

decryptButton.addEventListener('click', (event) => {
    event.preventDefault();
    const text = textToEncrypt.value;
    hideErrorMessage();
    if (text.trim() !== '') {
        if (validateText(text)) {
            const decrypted = decrypt(text);
            encryptedText.value = decrypted;
            showEncryptedContent();
        } else {
            showErrorMessage('El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas sin acentos y espacios.');
        }
    }
});

copyButton.addEventListener('click', () => {
    copyToClipboard(encryptedText.value);
});

function encrypt(text) {
    text = text.replace(/e/g, 'enter');
    text = text.replace(/i/g, 'imes');
    text = text.replace(/a/g, 'ai');
    text = text.replace(/o/g, 'ober');
    text = text.replace(/u/g, 'ufat');
    return text;
}

function decrypt(text) {
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
            showErrorMessage('Texto copiado al portapapeles');
            errorMessage.classList.replace('alert-danger', 'alert-success');
            setTimeout(() => hideErrorMessage(), 3000);
        })
        .catch(err => {
            showErrorMessage('Error al copiar el texto: ' + err);
            errorMessage.classList.replace('alert-success', 'alert-danger');
        });
}
