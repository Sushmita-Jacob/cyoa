let enterButton;
let replayButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let c1Button;
let c2Button;
let screen = 0;

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER);
    textSize(20);
    noStroke();

    // Create buttons for all screens
    enterButton = new Sprite(width / 2, height * 3/4, 100, 50, "k");
    enterButton.color = "plum";
    enterButton.text = "Play";

    a1Button = new Sprite(-200, -200, 150, 50, "k");
    a2Button = new Sprite(-50, -50, 150, 50, "k");
    b1Button = new Sprite(-100, -100, 150, 50, "k");
    b2Button = new Sprite(-150, -150, 150, 50, "k");
    c1Button = new Sprite(-250, -250, 150, 50, "k");
    c2Button = new Sprite(-300, -300, 150, 50, "k");

    replayButton = new Sprite(-350, -350, 100, 50, "k");
    replayButton.color = "plum";
    replayButton.text = "Replay";

}

function draw() {
    rectMode(CENTER);
    if (screen == 0){
        background("purple");
        fill("lightgreen");
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
        replayButton.pos = {x: -350, y: -350};
        enterButton.pos = {x: 300, y: 300};
        showShapes();
    }

    if (enterButton.mouse.presses()) {
        print("pressed");
        showScreen1();
        screen = 1;
    }

    if (replayButton.mouse.presses()) {
        screen = 0;
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
            screen = 3;
        } else if (b2Button.mouse.presses()){
            showScreen4();
            screen = 4;
        }
    } else if (screen == 5){
        if (c1Button.mouse.presses()){
            showScreen6();
            screen = 6;
        } else if (c2Button.mouse.presses()){
            showScreen7();
            screen = 7;
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
    fill("lightgreen")
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
    fill("lightgreen");
    text(
        "You've been wandering for hours and get lost.",
        width / 2,
        height / 2 - 100
    );
    text(
        "A witch asks if you want to pay for your freedom.",
        width / 2,
        height / 2 - 50
    );
    text(
        "What do you do?",
        width / 2,
        height / 2
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
    fill("lightgreen");
    text(
        "The witch brings you home and you return safely.",
        width / 2,
        height / 2 - 100
    );
    text(
        "She also gives you a black cat as a gift!",
        width / 2,
        height / 2 - 50
    );
    text(
        "Congrats on making it out! You may not be lucky next time...",
        width / 2,
        height / 2
    );
    b1Button.pos = {x: -100, y: -100};
    b2Button.pos = {x: -50, y: -50};
    replayButton.pos = {x: 300, y: 300};
}

function showScreen4() {
    background("purple");
    fill("lightgreen");
    text(
        "You end up being lost for centuries after your demise.",
        width / 2,
        height / 2 - 100
    );
    text(
        "But you've become best friends with the skeleton!",
        width / 2,
        height / 2 - 50
    );
    text(
        "You may be stuck, but you made a companion!",
        width / 2,
        height / 2
    );
    b1Button.pos = {x: -100, y: - 100};
    b2Button.pos = {x: -50, y: -50};
    replayButton.pos = {x: 300, y: 300};
}

function showScreen5() {
    background("purple");
    fill("lightgreen");
    text(
        "You got locked in! Will you try to leave yourself?",
        width / 2,
        height / 2 - 100
    );
    text(
        "Or will you ask the skeleton for help?",
        width / 2,
        height / 2 - 50
    );
    a1Button.pos = {x: -200, y: -200};
    a2Button.pos = {x: -50, y: -50};
    c1Button.pos = {x: 200, y: 300};
    c1Button.color = "plum";
    c1Button.text = "Bang the door";
    c2Button.pos = {x: 400, y: 300};
    c2Button.color = "plum";
    c2Button.text = "Ask for help"
}

function showScreen6() {
    background("purple");
    fill("lightgreen");
    text(
        "The door refuses to budge. You panic.",
        width / 2,
        height / 2 - 100
    );
    text(
        "You come to the realization you're trapped...",
        width / 2,
        height / 2 - 50
    )
    text(
        "...for eternity.",
        width / 2,
        height / 2
    )
    c1Button.pos = {x: -250, y: -250};
    c2Button.pos = {x: -300, y: -300};
    replayButton.pos = {x: 300, y: 300};
}

function showScreen7() {
    background("purple");
    fill("lightgreen");
    text(
        "The skeleton shrugs with an unamused look",
        width / 2, 
        height / 2 - 100
    );
    text(
        "\"That\'s not my problem,\" she murmurs.",
        width / 2,
        height / 2 - 50
    );
    text(
        "Your independence led to being trapped forever.",
        width / 2,
        height / 2
    );
    c1Button.pos = {x: -250, y: -250};
    c2Button.pos = {x: -300, y: -300};
    replayButton.pos = {x: 300, y: 300};
}

function showShapes() {
    // House
    fill("brown");
    rect(475, 350, 200, 150);
    fill("saddlebrown");
    triangle(375, 275, 575, 275, 475, 200)
    fill("black");
    rect(475, 375, 75, 100);

    //Skeleton
    fill("white");
    circle(100, 200, 75);
    rect(100, 100, 10, 25);
}