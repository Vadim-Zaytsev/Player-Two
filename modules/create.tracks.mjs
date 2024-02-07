//CREATE TRACK
 export const createTrack = function(anyTracks) {
    const tracksListElement = document.createElement('ul');

    for (let i = 0; i < anyTracks.length; i++) {
        const trackElement = document.createElement('li');
        const trackCoverElement = document.createElement('img');
        const audio = document.createElement('audio');

        trackCoverElement.src = anyTracks[i].trackCoverImgUrl;
        audio.src = anyTracks[i].trackFileUrl;
        audio.controls = true;

        trackElement.append(trackCoverElement);
        trackElement.append(
            `${anyTracks[i].artistName} - ${anyTracks[i].trackTitle}`
        );
        trackElement.append(audio);
        tracksListElement.append(trackElement);
    }

    return tracksListElement;
}