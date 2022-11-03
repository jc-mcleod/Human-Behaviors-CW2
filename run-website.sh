#!/bin/bash

if which python3 > /dev/null 2>&1;
then
    echo "Starting web server on port 8080"
    echo "You can visit the website at http://localhost:8080/login.html"
    echo ""
    python3 -m http.server 8080
else
    echo "Python 3 must be installed to run the webserver."
fi
