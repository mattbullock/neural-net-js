neural-net-js
=============

A simple neural network implementation in javascript

Sample character json data is converted from the matlab files in the Coursera machine learning course: https://www.coursera.org/course/ml

To create a new network, specify the network shape and supply some data:
```
neural_network = new NeuralNetwork( [400, 25, 10], { X: training_examples, y: training_labels });
```

To train the network using back propagation:
```
neural_network.train()
```

