function slider(action, id , mousedown=function(){}, mouseup=function(){}){
    const parent = document.getElementById(id);
    const fill = parent.getElementsByClassName("fill")[0];
    const fill_btn = parent.getElementsByClassName("fill-btn")[0];
    const can_drag = false;
    const value = 0;

    function update(){
        let pos_x = window.event.clientX;
        let left = document.getElementById("left-width-" + id).getBoundingClientRect().left;
        let right = document.getElementById("right-width-" + id).getBoundingClientRect().right;
        let width = right - left;

        value = (pos_x - left) / width;

        if(value < 0){
            value = 0;
        }else if(value > 1){
            value = 1;
        }

        fill.style.width = (value * 100) + "%";
        fill_btn.style.left = (value * 100) + "%";

    }

    parent.addEventListener("click", function(e){
        if(e.button == 0){
            update();
        }
    });
}