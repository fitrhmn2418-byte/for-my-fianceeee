function playVideo() {
    const video = document.getElementById("myVideo");

    // show video
    video.style.display = "block";

    // unmute (important after user tap)
    video.muted = false;

    // play video
    video.play().catch(err => {
        console.log("Video play failed:", err);
    });
}
