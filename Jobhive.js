var i = 0;
function move(){
    if(i == 0){
        i = 1;
        var elem = document.getElementsByClassName("progress-bar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame(){
            if(width >= progress){
                clearInterval(id);
            }
            else{
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

move(50);