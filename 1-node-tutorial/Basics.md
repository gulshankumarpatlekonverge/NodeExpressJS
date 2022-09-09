# Basics of NodeJs

    Installation:
        1. Install Node using nodejs.org
        2. Check for Version using node --v / node --version

    Run REPL(Read-Eval-Print-Loop) on your system.
        1. To run repl type "node" in terminal and execure the code.
            PS C:\Users> node
            Welcome to Node.js v16.15.0.
            Type ".help" for more information.
            > const name = "Gulshankumar"
            undefined
            > name
            'Gulshankumar'
            >
    
    Run JS file using CLI:
        1. type node <fileName>.js or node <filename> e.g. node app.js or node app in the directory and you code will get executed.

# npm(Node Package Manager):
    
    Link:
        https://www.npmjs.com

    Process:
        npm - global command comes with Node
        npm --version

        local dependency - use it only in thi perticular project
        npm i <packagename>

        global dependency - use it in any project
        npm install -g<packagename> [WINDOWS]
        sudo npm install -g<packagename> [MAC]

        package.json - minifest file - store important info about project/packages

        manual approach - create package.json in the root, create proprties etc.

        automatic approach
        npm init- step by step, press enter to skip
        npm init -y - everything default
