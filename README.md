# Description

This is the README for the MVP personal website I will create with Vite, React, Sass, ...what else?

# Dev Notes

- New blogs are provided by new React page components, which files should be identified by three keywords and named as such "BlogOneTwoThree.jsx".
- New notes are provided by new React page components, which files should be identified by one keyword and named as such "NoteOne.jsx". 
- Note to self: When you make a change to the codebase, you can't just push it. You have to run `npm run deploy` which will update the static build on the `gh-pages` git branch. Then push to Github and Github Pages will serve the website from that branch (but you can keep working on main locally). Basically, I followed the instructions [here](https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf).
- To serve a static asset, put it in the "/public" directory. (Don't forget to redeploy!) Anything in there can be with the name of the resource, e.g. "jchooch.github.io/Fleming.pdf". You can link to it with a normal anchor tag.

# TODO

- ...