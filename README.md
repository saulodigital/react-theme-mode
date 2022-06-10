# React Theme Mode

React component to switch between light and dark mode for a theme based on some requirements.

Features:

- `<button>` to switch between modes
- Respects the user's browser preferences and will default to the options the user set
- Check if the user hit the toggle button before and set a mode
- Use local storage instead of cookies to save it locally and lower server bandwitdh
- Take advantage of data attribute to be CSS class agnostic and provide more flexibility such as not breaking styles or break with class overwrite
- Targets the `<html>` so it can be applied on the page load before child elements