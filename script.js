let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER);
    textSize(20);
    noStroke();
    background("pink");
    text(
        "Welcome to screen 0. This is the home screen.",
        width / 2,
        height / 2-100
    );
    // Create buttons for all screens
    enterButton = new Sprite(300, 300, 100, 50, "k");
    enterButton.color = "plum";
    enterButton.text = "Enter";

    a1Button = new Sprite(-200, -200, 50, 50, "k");

    a2Button = new Sprite(-50, -50, 50, 50, "k");

}

function draw() {
    if (enterButton.mouse.presses()) {
        print("pressed");
        background("paleturquoise");
        text (
            "Welcome to screen 1. Make your first choice.",
            width / 2,
            height / 2 - 100
        );
        enterButton.pos =  {x: -100, y: -100};

        a1Button.pos = {x: 250, y: 300};
        a1Button.color = "plum";
        a1Button.text = "A1";

        a2Button.pos = {x: 350, y:300};
        a2Button.color = "plum";
        a2Button.text = "A2";

        screen = 1;
        
    }

    if (screen==1){
        if(a1Button.mouse.presses()) {
            print("Display screen 2.")
            screen = 2;
        } else if (a2Button.mouse.presses()) {
            print("Display screen 5.")
            screen = 5;
        }
    }
    // Display enter button

    // Add A1 button

    // Add A2 button

    // Check enter button

}

// Functions to display screens