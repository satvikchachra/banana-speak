const btnTranslate = document.querySelector('#btn-translate');
const txtareaInput = document.querySelector('#txt-input');
const txtOutput = document.querySelector('#txt-output');

const serverURL = 'https://api.funtranslations.com/translate/minion.json';

const getTranslationURL = inputText => serverURL + '?' + 'text=' + inputText;

const errorHandler = err => console.log('Error: ', err);

const translateHandler = () => {
    const ipText = txtareaInput.value;

    fetch(getTranslationURL(ipText))
        .then(response => response.json())
        .then(data => {
            const translatedText = data.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener('click', translateHandler);

// Live Exercise
// document.querySelector('textarea');
// document.querySelector('.btn-primary');
// document.querySelector('#input-btn');
// document.querySelector('input[name="translator"]');