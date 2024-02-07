export default class Playlist {
    constructor(PlaylistId, coverImgUrl, title, tracks) {
        this.PlaylistId = PlaylistId;
        this.coverImgUrl = coverImgUrl;
        this.title = title;
        this.tracks = tracks;
        this.totalTrackCount = this.countTracks(this.tracks);
        this.totalTrackDurationInSec = this.countingPlaylistDuration(
            this.tracks
        );
    }

    countTracks(tracks) {
        return tracks.length;
    }

    countingPlaylistDuration(tracks) {
        let playlistDuration = 0;

        for (let i = 0; i < tracks.length; i++) {
            playlistDuration += tracks[i].trackDurationInSec;
        }

        return playlistDuration;
    }
}
