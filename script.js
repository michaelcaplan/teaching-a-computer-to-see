/**
 *  Make a prediction about an image
 */
function predictImage(input) {
  
  // Data from our form
  let preview = document.querySelector('#preview');
  let answer = document.querySelector('#answer');
  let file = input.files[0];
  
  // File reader, reads our file....
  let reader = new FileReader();
  
  // Where the Custom Vision API lives
  let url = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/' + document.querySelector('#predictionProject').value + '/image';
    
  // Our coding challenge:
  
  // 0 - Reset the answer text
  
  // 1 - Ask for the file in a format that we can display on the screen
    
  // 2 - Fetch a prediction
    
    // 2.1 - convert the response to JSON
  
    // 2.2 - find the tag with the highest probability
  
  

}

// call predict image when the file button changes
document.getElementById('file').onchange = function() {
  predictImage(this);
}