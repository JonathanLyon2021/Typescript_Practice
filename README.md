# Typescript_Practice
This is TypeScript practice that I am implementing in my code now. This is not one whole program, this is multiple different programs in different folders. Each folder contains a different program(ie. TypeScript2, TypeScript3, etc.). This has made my understanding of TypeScript much better. Some of these are tutorials from YouTube and me switching the tutorial code around to make it more challenging for me to run it and understand it. Moving forward I feel more confident using TypeScript and statically typed languages, they create less errors & more clarity.

# Overview 
In this repository you will find files that I made to implement TypeScript which works in connection with JavaScript. The JavaScript compilier sompiles the TypeScript file. We go through all of the subjects in TypeScript. Here are the subjects:
### 1. Environment Setup
### 2. Variable Declarations
### 3. Variable Types
### 4. Functions
### 5. Interfaces
### 6. Classes
### 7. Access Modifiers


# Prequisites
- Node.js
- TypeScript
- JavaScript VM

# Steps
### 1. Setting up the environment and installing TypeScript.###
### 2. Afterwards entering the command in the TS(TypeScript) terminal to `watch` the TS file for changes so the JavaScript file can compile and make the changes in the JavaScript file. 

Install node @ *nodejs.org*
I always install the reccommended version.
Then in your terminal, go to the correct directory and check your node version by typing this command:

        node -v
    
After that, Install Typescript.

        npm install -g typescript
 
Then create a new file **main.ts**.

Once you install TypeScript and want to run the code, type this command in your terminal: 

        tsc.main.ts
        
The JavaScript compiler does something to compile the TypeScript code into JavaScript and creates a JavaScript file(main.js). 
Again in the terminal run:

        node main.js
        
Then the compiler runs that JavaScript code.<br>
This JavaScript file is treated like a script not a module. It is important to know the differences between the two. <br>
Make sure you `export{}` up top of the TS file in your code. <br>

TypeScript has a watch file option. In the terminal run this command: 

        tsc main --watch

NOW the JavaScript compiler is watching the TypeScript file for any changes.<br>
**Open a separate terminal in the same directory** and type the command below, this will run the program:

        node main

#### Congratulations!!! You've successfully setup a TypeScript file and are watching the file for changes with the JavaScript compiler!


