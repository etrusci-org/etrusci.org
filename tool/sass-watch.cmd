@ECHO OFF

SET input="./src/style.scss"
SET output="./tmp/style.css"

:: Usage:
::
:: $ cd etrusci.org/
:: $ ./sass-watch.cmd

sass ^
    --watch ^
    --update ^
    --style expanded ^
    --charset ^
    --source-map ^
    %input%:%output%
