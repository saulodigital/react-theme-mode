# React Theme Mode

React component to switch between light and dark theme mode, based on some requirements.

Features:

- `<button>` to switch between modes
- Respects the user's browser preferences and will default to the options the user set
- Check if the user manually choose a mode before and switch to it based on the user's preference
- Use local storage instead of cookies to save it locally and decrease usage of server bandwitdh
- Take advantage of data attribute to be CSS class agnostic and provide more flexibility such as not breaking styles or class overwrite
- Targets the `<html>` top-level element so it can be applied on the page load before child elements