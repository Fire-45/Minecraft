var canvas = new fabric.Canvas("myCanvas");
var block_image_width = 30;
var block_image_height = 30;
var player_x  = 50;
var player_y = 50;
var player_object = "";
var block_image_object = "";

function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
        top:player_y,
        left:player_x
    })
    canvas.add(player_object);
})
}

function block_update(get_image){
fabric.Image.fromURL(get_image,function(Img){
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    })
    canvas.add(block_image_object);
})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '84'){
        block_update("trunk.jpg");
        console.log("t");
    }

    if(keyPressed == '68'){
        block_update("dark_green.png");
        console.log("d");
    }

    if(keyPressed == '76'){
        block_update("light_green.png");
        console.log("l");
    }

    if(keyPressed == '71'){
        block_update("ground.png");
        console.log("g");
    }

    if(keyPressed == '87'){
        block_update("wall.jpg");
        console.log("w");
    }

    if(keyPressed == '89'){
        block_update("yellow_wall.png");
        console.log("y");
    }

    if(keyPressed == '82'){
        block_update("roof.jpg");
        console.log("g");
    }

    if(keyPressed == '67'){
        block_update("cloud.jpg");
        console.log("c");
    }

    if(keyPressed == '85'){
        block_update("unique.png");
        console.log("u");
    }

    if(e.shiftKey == true && keyPressed == '80'){
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("width").innerHTML = block_image_width;
        document.getElementById("height").innerHTML = block_image_height;
        
    }

    if(e.shiftKey == true && keyPressed == '77'){
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("width").innerHTML = block_image_width;
        document.getElementById("height").innerHTML = block_image_height;
        
    }

    if(keyPressed == '37'){
        Left();
        console.log("left");
    }

    if(keyPressed == '38'){
        MoveUp();
        console.log("up");
    }

    if(keyPressed == '39'){
        MoveRight();
        console.log("right");
    }

    if(keyPressed == '40'){
         Down();
         console.log("down");
    }

}
