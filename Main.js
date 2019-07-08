function create(){

    //Declare variables as input friom each text box
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;
    var third = document.getElementById("third").value;
    var fourth = document.getElementById("fourth").value;
    var fifth = document.getElementById("fifth").value;
    var sixth = document.getElementById("sixth").value;

    //Final Result is the input processed into a paragraph
    //Then it is sent as output to a <p> element
    document.getElementById("result").innerHTML =
    "Once upon a time, a " + first + " walked into the " + second + " carrying some "
    + third + ". All of a sudden, a " + fourth + " stuck inside a " + fifth +
    " collided into him, causing him to get sent to " + sixth + "!";
};

//When LIB ME button is clicked, execute function
document.getElementById("finish").addEventListener('click', create);