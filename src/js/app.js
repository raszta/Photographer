document.addEventListener('DOMContentLoaded', function(){

    const playVideo = document.querySelector('.video__container');
    
    playVideo.addEventListener('click', function(e){
        const video = document.querySelector('video');
       
        if(video.paused){
            video.play();
        }else{
            video.pause();
        }
    });



});