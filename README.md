# Steps for Netlify Deploy

## Version One

In this first version we want to control the build process ourself. We will build and then push the `build` folder to Github by ourselves. Netlify will just be the hosting solution.

1. Create an Account with [Netlify](https://netlify.com) or login.
2. Create your Github Repo where your project will be pushed.
3. Add the remote URL in your local repo or clone it.
4. Remove or comment out `/build` from your `.gitignore` file.
5. Create a `netlify.toml` file at the project root.

```toml
[build]
  publish="build"
```

6. Run your build script `yarn build`
7. Add, commit, and push everything to Github repo `main` branch (including the build folder).
8. Go to Netlify and click on `New Site From Git` button.
9. Follow steps to Authorize Netlify access and select your Repo.
10. With each local change to your project: `yarn build`, `git add`, `git commit`, and `git push` to Github
11. Profit

## Version Two

In this second version we want to leave the building of the project to Netlify. We will push things to Github that will automatically be copied to Netlify where the build process will take place.

1. Create an Account with [Netlify](https://netlify.com) or login.
2. Create your Github Repo where your project will be pushed.
3. Add the remote URL in your local repo or clone it.
4. Add, commit, and push everything to Github repo `main` branch (NO build folder).
5. Go to Netlify and click on `New Site From Git` button.
6. Follow steps to Authorize Netlify access and select your Repo.
7. Add the build command `yarn build`.
8. Select the `build` folder as the production folder.
9. In your site settings under the `Build & deploy` heading you can change things like the `main` branch as the only branch, the build command, or the publish folder.
10. With each local change to your project: `git add`, `git commit`, and `git push` to Github. (No build)
11. Profit
