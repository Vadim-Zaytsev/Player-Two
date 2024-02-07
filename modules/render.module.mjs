import { createHeader } from './create.header.module.mjs';
import { createTrack } from './create.tracks.mjs';

//RENDER PLAYLIST
export const renderPlaylist = function (anyPlaylist) {
    //RENDER HEADER
    const header = createHeader(anyPlaylist);
    for (let i = 0; i < header.length; i++) {
        document.body.append(header[i]);
    }

    //RENDER TRACK
    const tracksLilt = createTrack(anyPlaylist.tracks);
    document.body.append(tracksLilt);
};
