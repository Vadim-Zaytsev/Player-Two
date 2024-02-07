//CREATE HEADER
export const createHeader = function (anyPlaylist) {
    const headerPlaylist = [];

    const playlistCoverElement = document.createElement('img');
    playlistCoverElement.classList.add('.playlistCoverElement');
    playlistCoverElement.src = anyPlaylist.coverImgUrl;
    headerPlaylist.push(playlistCoverElement);

    const playlistTitleElement = document.createElement('h1');
    playlistTitleElement.append(anyPlaylist.title);
    headerPlaylist.push(playlistTitleElement);

    const playlistInfoElement = document.createElement('span');
    playlistInfoElement.append(
        `${anyPlaylist.totalTrackCount} tracks, ${anyPlaylist.totalTrackDurationInSec}`
    );
    headerPlaylist.push(playlistInfoElement);

    const listNamesArtists = document.createElement('span');
    let namesArtists = '';
    for (let i = 0; i < anyPlaylist.tracks.length; i++) {
        if (i < anyPlaylist.tracks.length - 1) {
            namesArtists += `${anyPlaylist.tracks[i].artistName}, `;
        } else {
            namesArtists += `${anyPlaylist.tracks[i].artistName}`;
        }
    }
    listNamesArtists.append(namesArtists);
    headerPlaylist.push(listNamesArtists);

    return headerPlaylist;
};
