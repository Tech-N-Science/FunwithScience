@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\@typescript-eslint\eslint-plugin\node_modules\semver\bin\semver.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\@typescript-eslint\eslint-plugin\node_modules\semver\bin\semver.js" %*
)