START --------------------------------------------------------------------------

Type "myDB.init()" on the console to start the UI.

THE HTML FILE ------------------------------------------------------------------

I've created an index.html file with a link to index.js so we can see the program
running on the browser directly (without using repl.it).

I had to do so because we can't loop trough prompts and log something to the
console at the same time on repl.it - I mean, technically we can, we just can't
see the console until the prompt is closed (and in this project, this means
exiting the program loop), which doesn't work when you need to use the data on
the console during the program's execution, like what happens when the user needs
to use the 's' command (but can't see the console output).

I'm not messing with the DOM here, the html file's only purpose is to host our
code. Every output is displayed on the console and every input is received
trough prompts.

ADITIONAL NOTES ----------------------------------------------------------------

As always, I'm not (fully) validating user inputs. I'm catching some invalid
commands, but the user could still input any values on the database during the
"new student insertion" use case.
