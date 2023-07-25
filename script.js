let icon = document.querySelector('#theme-img');

icon.addEventListener('click', function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src="./icons/sun.png";
    }else{
        icon.src="./icons/moon.png";
    }
})