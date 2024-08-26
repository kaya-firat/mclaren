function toggleMenu(){
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const defaultModel = 'mclaren-1';
    changeContent(defaultModel);

    document.querySelectorAll('.model-button').forEach(button => {
        button.addEventListener('click', function() {
            const modelClass = this.dataset.model;
            changeContent(modelClass);
        });
    });
});

function changeContent(carModel) {

    const models = document.querySelectorAll('.content .model');
    const videos = document.querySelectorAll('.bg-video');

    models.forEach(model => {
        model.classList.remove('active');
    });

    videos.forEach(video => {
        video.classList.remove('active');
    });

    const selectedModel = document.querySelector(`.model.${carModel}`);
    const selectedVideo = document.querySelector(`.bg-video.${carModel}`);

    if (selectedModel && selectedVideo) {
        selectedModel.classList.add('active');
        selectedVideo.classList.add('active');
    }
}
