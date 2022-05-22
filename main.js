function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json',modelReady);
    
    }
    
    function modelReady(){
        classifier.classify(gotResults)
    }

    dog = 0;
    cat = 0;

    function gotResults(error,results){

        if(error){
            
            console.error(error);


        }

        else{
            console.log(results);

            random_r = Math.floor(Math.random()*255)+1;
            random_g = Math.floor(Math.random()*255)+1;
            random_b = Math.floor(Math.random()*255)+1;

            document.getElementById("number_dog").innerHTML = "Detected Dog - " + dog;
            document.getElementById("number_cat").innerHTML = "Detected Cat - " + cat;
            document.getElementById("audio_name").innerHTML = "Detected Animal Sound - " + results[0].label;

            document.getElementById("audio_name").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
            
            img = document.getElementById("pic");


            if(results[0].label == "Barking"){
                img.src = "dog.gif";
                dog = dog + 1;

            }
            else if(results[0].label == "Meowing"){
                img.src = "cat.gif";
                cat = cat + 1;
            }
            else{
                img.src = "ear.png";

            }
        }
    




    }

