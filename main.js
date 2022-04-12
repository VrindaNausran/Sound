function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FZ79SU19j/model.json'
     , modelReady );
}

function modelReady()
{
    classifier.classify(gotResults);
}