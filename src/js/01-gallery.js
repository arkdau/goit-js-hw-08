// Add imports above this lineimport
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const list = document.querySelector('.gallery');
const markup = galleryItems.map((item) => `<li><a  class="gallery__item" href=${item.original}><img  class="gallery__image"  src=${item.preview} alt="${item.description}" width="480"  height=auto></a></li>`).join('');
list.insertAdjacentHTML('beforeend', markup);
console.log();

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'outside',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: true,
});
