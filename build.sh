#!/usr/bin/env bash
if [ -z `which uglifyjs` ]; then
	sudo npm i -g uglify-es
fi
uglifyjs imgui.js -c -m -o imgui.min.js
