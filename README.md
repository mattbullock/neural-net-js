neural-net-js
=============

A simple neural network implementation in javascript

This was created as an exercise to better understand neural nets while completing Andrew Ng's machine learning course on Coursera: https://www.coursera.org/course/ml

The training data (X.json, y.json) is converted from the matlab files in the Coursera exercises.



To create a new network, specify the network shape and supply some data:
```javascript
var shape = [400, 25, 10];                                          // the number of neurons in each layer
var training_data = { X: training_examples, y: training_labels };   // training data, e.g. the data in X.json and y.json
var options = { iterations: 100 };                                  // network options, currently just number of iterations

neural_network = new NeuralNetwork( shape, training_data, options );
```



To train the network using back propagation:
```javascript
neural_network.train()
```



To test the trained network against a new example:
```javascript
var outputs = neural_network.predict(example)

// outputs is the raw values from the output layer
// e.g. [5.5383610051568533e-8, 2.168146182731572e-11, 0.9998759356463254]
```



TODOs:
* AMD-ify and tidy up the code
* Implement common optimizations such as momentum learning and regularization
* Improve the neural network API so we can:
  * instantiate with already-learned weights
  * export learned weights
  * set training data and other options after instantiation

