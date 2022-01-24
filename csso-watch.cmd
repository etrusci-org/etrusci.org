@ECHO OFF

SET inputFile="./src/build/style.css"
SET outputFile="./dist/style.min.css"

:: Usage:
::
:: $ cd etrusci.org/
:: $ ./csso_watch.cmd

csso ^
    --watch ^
    --stat ^
    --comments none ^
    --input-source-map auto ^
    --source-map none ^
    --input %inputFile% ^
    --output %outputFile%
