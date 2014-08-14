var zeroes, dimensioned_y, preview, vectorize_y, predict;

zeroes = function (size) {
  var arr = [size];
  for (var i = 0; i < size; i++) {
    arr[i] = 0;
  }
  return arr;
};

vectorize_y = function (training_label) {
  var vectorized_training_label = zeroes(10);
    
  // Relabel 0s - originally labeled 10 for convenience in matlab
  if (training_label === 10) {
    training_label = 0;
  }

  // Set the correct output node to 1
  vectorized_training_label[training_label] = 1;
  
  return vectorized_training_label;
};

// Draw the character in the training example, pixel by pixel
preview = function (example) {
  var col, container;
  
  container = $('.character');
  container.empty();
  
  for (var i = 0; i < example.length; i++) {
    if (i % 20 === 0) {
      col = $('<div></div>').addClass('col');
      container.append(col);
    }

    // Data cleaning: convert to positive value if negative, then to a grayscale value
    var gray = Math.round(Math.abs(example[i] * 255));
    var cell = $('<div></div>').addClass('cell');
    
    cell.css('background','rgb('+gray+','+gray+','+gray+')');
    col.append(cell);
  }
};


// Input: a training data index value, 0-4999
predict = function (training_example_index) {
  var output, positives;
  
  output = nn.predict(X[training_example_index]);
  positives = [];
  
  for (var i = 0; i < output.length; i++) {
    if (output[i] > 0.5) {
      positives.push(i);
    }
  }

  console.log('The neural net thinks that example is:', positives);
};