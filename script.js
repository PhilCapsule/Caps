var mescookies = document.getElementsByClassName('cookie');

for(var i=0; i<mescookies.length; i++){
    mescookies[i].addEventListener("click", function(){
        if(this.src.indexOf("cookie-1") != -1){
            this.src = 'cookie-2.jpg';
        }else{
            this.remove();
        }
    })
}