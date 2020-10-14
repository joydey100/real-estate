function videoPlay(){
    const videoOn = document.querySelector('.video');
    const video = document.querySelector('.video video');
    videoOn.classList.toggle('active');  
    video.currentTime = 0;
    video.pause();
}
