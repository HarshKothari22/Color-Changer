const bgcolor = () => {
    let boxes = document.getElementsByClassName('box');   
    for(let i = 0; i < boxes.length; i++){
        const getCode = boxes[i].getAttribute("data-value") ;
        boxes[i].addEventListener("click",function(){
            document.body.style.backgroundColor = getCode;
        });
    }
}
    document.addEventListener("DOMContentLoaded", function() {
        bgcolor();
    });