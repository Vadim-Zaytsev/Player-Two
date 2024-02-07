import { playlistOne } from '/modules/playlist.module.mjs';
import { renderPlaylist } from '/modules/render.module.mjs';

// const buttonCreatePlaylist = document.querySelector('.buttonCreatePlaylist');

// buttonCreatePlaylist.addEventListener('click', () => {
//     buttonCreatePlaylist.classList.add('disabled')
//     renderPlaylist(playlistOne);
// });


renderPlaylist(playlistOne);