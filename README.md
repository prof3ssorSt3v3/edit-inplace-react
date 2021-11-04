# Steps for Netlify Deploy

1. Create an Account with [Netlify](https://netlify.com)
2. Create your Github Repo where your project will be pushed.
3. Add the remote URL for your local repo.
4. Remove or comment out `/build` from your `.gitignore` file.
5. Create a `netlify.toml` file at root

```toml
[build]
  publish="build"
```

6. Run your build script `yarn build`
7. Add, commit, and push everything to Github repo `main` branch (including the build folder).
8. Go to Netlify and click on `New Site From Git` button.
9. Follow steps to Authorize Netlify access and select your Repo.
10. Select the `build` folder as the production folder.
11. With each local change to your project: `git add`, `git commit`, and `git push` to Github
12. Profit
