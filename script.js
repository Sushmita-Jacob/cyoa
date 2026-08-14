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

    // Create buttons for all screens
    enterButton = new Sprite(300, 300, 100, 50, "k");
    enterButton.color = "plum";
    enterButton.text = "Enter";

    a1Button = new Sprite(-200, -200, 150, 50, "k");

    a2Button = new Sprite(-50, -50, 150, 50, "k");

    b1Button = new Sprite(-100, -100, 150, 50, "k");

    b2Button = new Sprite(-150, -150, 150, 50, "k");

}

function draw() {
    if (screen == 0){
        background("purple");
        text(
            "Welcome to Hade's Haunted House.",
            width / 2,
            height / 2-100
        );
        text(
            "Enter if you wish to dare.",
            width / 2,
            height / 2 - 50
        )
    }

    if (enterButton.mouse.presses()) {
        print("pressed");
        showScreen1();
        screen = 1;
        
    }

    if (screen==1){
        if(a1Button.mouse.presses()) {
            print("Display screen 2.")
            showScreen2();
            screen = 2;
        } else if (a2Button.mouse.presses()) {
            print("Display screen 5.");
            showScreen5();
            screen = 5;
        }
    } else if (screen == 2){
        if(b1Button.mouse.presses()){
            showScreen3();
        } else if (b2Button.mouse.presses()){
            showScreen4();
        }
    }
    // Display enter button

    // Add A1 button

    // Add A2 button

    // Check enter button

}

// Functions to display screens
function showScreen1() {
    background("purple")
    text(
        "You see a skeleton giving you a last chance to turn back.",
        width / 2,
        height / 2 - 100
    );
    text(
        "But she also has a chest. What do you do?",
        width / 2,
        height / 2 - 50
    );
    enterButton.pos =  {x: -100, y: -100};

    a1Button.pos = {x: 200, y: 300};
    a1Button.color = "plum";
    a1Button.text = "Take the chest";

    a2Button.pos = {x: 400, y:300};
    a2Button.color = "plum";
    a2Button.text = "Go back";
}

function showScreen2() {
    background("purple");
    text(
        "You've been wandering for hours and get lost.",
        width / 2,
        height / 2 - 100
    );
    text(
        "A witch asks if you want to pay for your freedom. What do you do?",
        width / 2,
        height / 2 - 50
    );
    a1Button.pos = {x: - 200, y: -200};
    a2Button.pos = {x: - 50, y: -50};
    b1Button.pos = {x: 200, y: 300};
    b1Button.color = "plum";
    b1Button.text = "Pay up";
    b2Button.pos = {x: 400, y: 300};
    b2Button.color = "plum";
    b2Button.text = "Deny the offer";
}

function showScreen3() {
    background("purple");
    text(
        "",
        width / 2,
        height / 2 - 100
    )
    b1Button.pos = {x: -100, y: -100};
    b2Button.pos = {x: -50, y: -50};
}

function showScreen4() {
    background("plum");
    text(
        "You hit an end point at screen 4.",
        width / 2,
        height / 2 - 100
    )
    b1Button.pos = {x: -100, y: - 100};
    b2Button.pos = {x: -50, y: -50};
}

function showScreen5() {
    background("purple");
    text(
        "You return home safely.",
        width / 2,
        height / 2 - 100
    )
    a1Button.pos = {x: -200, y: -200};
    a2Button.pos = {x: -50, y: -50};
}