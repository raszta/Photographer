document.addEventListener('DOMContentLoaded', function(){

    const playVideo = document.querySelector('.video__container');
    const sliderItem = document.querySelectorAll('.slider__item');
    const dotsSlider = document.querySelectorAll('.dot__el');

    playVideo.addEventListener('click', function(e){
        const video = document.querySelector('video');
       
        if(video.paused){
            video.play();
        }else{
            video.pause();
        }
    });
    
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        sliderItem.forEach(el => el.style.display = "none");
        dotsSlider.forEach(el => el.classList.remove('active'));
        slideIndex++;
        if (slideIndex > sliderItem.length) {
             slideIndex = 1; 
        }
        sliderItem[slideIndex - 1].style.display = "block";
        dotsSlider[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 3000); 
    }
});