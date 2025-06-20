import { artists } from './data/artists.js';
import { artistList } from './artists/artistList.js';

artistList(artists, document.querySelector('#app'));
