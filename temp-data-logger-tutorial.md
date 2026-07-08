```package
datalogger= github:lancaster-university/microbit-datalogger-ui
```

# Data Logger: Air Temperature

Let's write a program to record air temperature every 1 minute


## Step 1
 We need to set up how often we want to show the number. In this example, we are going to show it every 30 seconds, using the Loops ``||loops: every 500 ms||``. 
 After you put this block in the working area, change the number from 500 to 60000 ms.

```blocks
loops.everyInterval(60000, function () {
   
})
 

```

## Step 2
Next, go to the data logger and put block ``||datalogger: log data column value 0 ||`` inside the Loops ``||loops: every 60000 ms||``

```blocks
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("", ))
})


```

## Step 3
We are going to add the column name by typing to "Air_Temperature" inside the quotation. And, go to Input ``||input: temperature (C)||`` and replace the 0 with this block.
```blocks
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Air_Temperature", input.temperature()))
})


```