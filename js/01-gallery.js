//вывести галерею html. Скопирвать обьект
//Поставить слушателя на картинку
//при клике по умолчанию пользователь будет перенаправлен на другую страницу. 
//Запрети это поведение по умолчанию.
//зделать функцию на слушателя
//Добавь закрытие модального окна по нажатию клавиши Escape. 
//Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. 


import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const galleryBox = galleryItems.map(({ preview, original, description }) => { 
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}",
        data-source="${original}",
        alt="${description}",
        />
    </a>
</div>`;
}).join("");

const galleryHandler = (event) => { 
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    const originalUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${originalUrl}" >
    `)
    instance.show();
};

galleryEl.insertAdjacentHTML("afterbegin", galleryBox);
galleryEl.addEventListener("click", galleryHandler);
