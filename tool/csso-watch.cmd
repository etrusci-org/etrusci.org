@ECHO OFF

SET inputFile="./tmp/style.css"
SET outputFile="./app/res/style.min.css"

:: Usage:
::
:: $ cd etrusci.org/
:: $ ./csso-watch.cmd

csso ^
    --watch ^
    --stat ^
    --comments none ^
    --input-source-map auto ^
    --source-map none ^
    --input %inputFile% ^
    --output %outputFile%
