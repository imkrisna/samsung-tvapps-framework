@ECHO off
del /A /F /Q doc
java -jar "..\jsdoc\jsrun.jar" "..\jsdoc\app\run.js" -t="..\jsdoc\templates\bootstrap" -d="doc" -r .