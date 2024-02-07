export default class Track {
    constructor(
        trackId,
        artistName,
        trackTitle,
        trackFileUrl,
        trackCoverImgUrl,
        trackDurationInSec
    ) {
        this.trackId = trackId;
        this.artistName = artistName;
        this.trackTitle = trackTitle;
        this.trackFileUrl = trackFileUrl;
        this.trackCoverImgUrl = trackCoverImgUrl;
        this.trackDurationInSec = trackDurationInSec;
    }
}
