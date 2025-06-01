# Using Wimp

Ever felt a bit lazy and you didn't want to write your won code and just want something simple or overly complex in a single command, now you can! 

## What's Wimp?

Wimp is a package manager for Tusk, in simple terms it lets you download Advanced Python code. 

## Setting up sources

You can skip this step if you want the official Wimp Packages, **I do reccomend checking the code or getting it from a verified author because it is very easy to install a virus onto it.** So if you ever see someone on reddit providing a Tusk package download from an unknown source, I reccomend chekcing it. You can put any code up on Github

To setup a source you will need to find the Github repository to it, [the Official one](https://github.com/TutlaMC/wimp-packages) comes preinstalled and is used by default. To add a source run `/wimp source` and the name of your source and then rpoivde a url and branch (uses official wimp packages and main as default url and branch respectively)

## Installing a package
Here's the fun part, all you have to do is `/wimp install packagenameHere`. You can use `/wimp search` to search for a package of your liking (by name, it does not filter through description). For example if I wanted to install an AI, I could just run `/wimp install package:ai` (try it now!) and it would install. 

**Beware some packages require pip package to go with it**, for example the **ai** package requires `google-generativeai

You can uninstall a package, by you guessed it- `/wimp uninstall`
## Listing packages