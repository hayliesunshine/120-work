Haylie Peacock, MART 120

[Live Sketch Link](https://hayliesunshine.github.io/120-work/HW-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

There is a ball created by making an ellipse, built through the parameters of the variables declared universally before the setup function. This allows the variables to be used in any of the functions within the project. The canvas and background are created as static elements that are not renewed each frame, as they are in the setup function rather than draw. The ball remains the same size because the ellipse itself is not being changed, only the location of it. The location is determined by ball.x and ball.y, which inside of the draw function are made to be changing with every frame in the first two statements of the function block. The x and y coordinates both begin as one, as defined by the values given to the ball deltas and ball scales, but because of the +, they increase by one each time. The ball stays within the window because the conditional statements say that if the ball's x location gets to either the width or zero, then it will turn the other way. If the ball's y location gets to the height or zero, it will turn the other way. The ball will change directions when the mouse is pressed, because the mouse pressed function is used, with the map statements that allow the program to choose a new direction for the ball to go, based on the mouseX or mouseY being what you want mapped, 0 and width or height being the input range, and 0.5 and 10 being the output range. The ball is traced as this sketch happens because the background is not reset with each round of the draw function.

3) Declares the object ball
4) Nests variable of width of ball, assigns the value 40 to variable
5) Nests variable x of ball, assigns value 10
6) Nests variable y of ball, assigns value 10
7) Nests variable delta_x of ball, assigns value 1
8) Nests variable delta_y of ball, assigns value 1
9) Nests variable scale_x of ball, assigns value 1
10) Nests variable scale_y of ball, assigns value 1

12) New function setup
13) create a canvas width of window, height of 400 pixels
14) create white background
15) end function block

19) new function draw
21) sets value of ball.x to increase by one each time, beginning with the value of ball.delta_x multiplied by ball.scale_x, which is one.
22) sets value of ball.y to increase by one each time, beginning with the value of ball.delta_y multiplied by ball.scale_y, which is one.

25) sets conditional statement that if the value of ball.x is greater than or equal to the width of the window, or is less than or equal to zero, then the value of the change (delta) of x will equal the opposite of ball.delta_x (which means it will switch directions).
27) ends statement block
28) sets conditional statement that if the value of ball.y is greater than or equal to the height of the window, or is less than or equal to zero, then the value of the change (delta) of y will equal the opposite of ball.delta_y (which means it will switch directions).
30) ends statement block

32) sets the fill of the ellipse to white
33) draws ellipse at location ball.x, ball.y, with dimensions of ball.width by ball.width, which means it will be a perfect circle.
34) ends statement block

36)new function for when the mouse is pressed
37) maps new increments for the movement/direction of the x position of the ball, by setting the value you want mapped (mouseX), the expected input range (0-width), and the expected output range (0.5-10).
38) maps new incremetns for the movement/direction of the y position of the ball by setting the value you want mapped (mouseY), the expected input range (0-height), and the expected output range (0.5-10).

You can make the ball change directions through the use of the delta variables and the conditional statements, where you provide constraints for the ball to move inside. Once it hits one of the constraints, it switches directions, as prompted by the statement that IF x or y reaches point a or point b, THEN delta (change of position) will be multiplied by -1, or become the opposite of what it was.
You can also press the mouse, which triggers the mousePressed() function, in which the mouse position is mapped and new outputs are given for the ball position.

<!--
--This is a Comment Block--

Please describe what the original code is doing.

Why is it working the way it is?

There is a ball created by making an ellipse, built through the parameters of the variables declared universally before the setup function. This allows the variables to be used in any of the functions within the project. The canvas and background are created as static elements that are not renewed each frame, as they are in the setup function rather than draw. The ball remains the same size because the ellipse itself is not being changed, only the location of it. The location is determined by ball.x and ball.y, which inside of the draw function are made to be changing with every frame in the first two statements of the function block. The x and y coordinates both begin as one, as defined by the values given to the ball deltas and ball scales, but because of the +, they increase by one each time. The ball stays within the window because the conditional statements say that if the ball's x location gets to either the width or zero, then it will turn the other way. If the ball's y location gets to the height or zero, it will turn the other way. The ball will change directions when the mouse is pressed, because the mouse pressed function is used, with the map statements that allow the program to choose a new direction for the ball to go, based on the mouseX or mouseY being what you want mapped, 0 and width or height being the input range, and 0.5 and 10 being the output range. The ball is traced as this sketch happens because the background is not reset with each round of the draw function.

What does each line do?

3) Declares the object ball
4) Nests variable of width of ball, assigns the value 40 to variable
5) Nests variable x of ball, assigns value 10
6) Nests variable y of ball, assigns value 10
7) Nests variable delta_x of ball, assigns value 1
8) Nests variable delta_y of ball, assigns value 1
9) Nests variable scale_x of ball, assigns value 1
10) Nests variable scale_y of ball, assigns value 1

12) New function setup
13) create a canvas width of window, height of 400 pixels
14) create white background
15) end function block

19) new function draw
21) sets value of ball.x to increase by one each time, beginning with the value of ball.delta_x multiplied by ball.scale_x, which is one.
22) sets value of ball.y to increase by one each time, beginning with the value of ball.delta_y multiplied by ball.scale_y, which is one.

25) sets conditional statement that if the value of ball.x is greater than or equal to the width of the window, or is less than or equal to zero, then the value of the change (delta) of x will equal the opposite of ball.delta_x (which means it will switch directions).
27) ends statement block
28) sets conditional statement that if the value of ball.y is greater than or equal to the height of the window, or is less than or equal to zero, then the value of the change (delta) of y will equal the opposite of ball.delta_y (which means it will switch directions).
30) ends statement block

32) sets the fill of the ellipse to white
33) draws ellipse at location ball.x, ball.y, with dimensions of ball.width by ball.width, which means it will be a perfect circle.
34) ends statement block

36)new function for when the mouse is pressed
37) maps new increments for the movement/direction of the x position of the ball, by setting the value you want mapped (mouseX), the expected input range (0-width), and the expected output range (0.5-10).
38) maps new incremetns for the movement/direction of the y position of the ball by setting the value you want mapped (mouseY), the expected input range (0-height), and the expected output range (0.5-10).

How can you make the ball change direction?

You can make the ball change directions through the use of the delta variables and the conditional statements, where you provide constraints for the ball to move inside. Once it hits one of the constraints, it switches directions, as prompted by the statement that IF x or y reaches point a or point b, THEN delta (change of position) will be multiplied by -1, or become the opposite of what it was.
You can also press the mouse, which triggers the mousePressed() function, in which the mouse position is mapped and new outputs are given for the ball position.

-->


## How did you alter the sketch?

I altered the sketch by getting rid of the tracing of the ball, making the frame rate faster, setting a random color assignment for the fill of the ball, and changing the canvas size. I tried to set conditionals for the ball fill, and when that didn't work, I tried to set the fill so that it would become orange when the mouse was pressed, and that didn't work either. So until I can figure that out, the ball color is randomly changing for now. The speed of the ball also changes depending on where in the window you click the mouse. I constrained the ball within the conditional statements to bounce within an invisible box within the window.
To achieve this, within the code I moved the background statement into draw, added a statement for frame rate int in the setup and assigned it a high value, made a statement for random rgb values for the fill of the ellipse, and and changed the canvas size values to fit the entire window. I changed the values in the conditional statements so that the ball will change directions at width and height divided by two.

<!--
Please describe how and why you changed the sketch?

I altered the sketch by getting rid of the tracing of the ball, making the frame rate faster, setting a random color assignment for the fill of the ball, and changing the canvas size. I tried to set conditionals for the ball fill, and when that didn't work, I tried to set the fill so that it would become orange when the mouse was pressed, and that didn't work either. So until I can figure that out, the ball color is randomly changing for now. The speed of the ball also changes depending on where in the window you click the mouse. I constrained the ball within the conditional statements to bounce within an invisible box within the window.
To achieve this, within the code I moved the background statement into draw, added a statement for frame rate int in the setup and assigned it a high value, made a statement for random rgb values for the fill of the ellipse, and and changed the canvas size values to fit the entire window. I changed the values in the conditional statements so that the ball will change directions at width and height divided by two.
-->
