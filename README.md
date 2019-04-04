# MAP

---

## What it does

Usually in all projects you want to add some sort of a readme, even if the project is simple, it will still allow you to show what the project does and how it works. Also, it is a great reference if you ever forget what the heck you are doing.

## What I Added In

- This readme (duh)
- esLint
  - esLint is a development tool for reading your files and trying to find any code smell, or possible bugs, while also helping you adhere to a standard style of development (I chose google standard for you, but you can look into others as you please.) For configuration you can check out [their website](https://eslint.org/) and find what works for you.
- Prettier
  - Prettier is kind of like ESLint, but only in that it enforces a style that your code should follow and will make some changes for you. Wonderful for when you are on a team and working with many devs. If you set it as a pre-commit hook (which I have done), it will run before committing code, ensuring everything in a repo is in the same style. Configuration can be found [here](https://prettier.io/)
- Husky
  - Husky is a javascript package which sets up git hooks for easy use! If you look in the package.json you'll see a section that says "husky" with a pre-commit script. This is what runs esLint and Prettier before committing the file. More information can be found [here](https://github.com/typicode/husky)
- Nodemon
  - Nodemon is a dev tool like grunt or gulp, but only used for restarting a node server after changes have been made! I used this for a long time before I moved over to using Typescript for all my development. Pretty good documentation in their [github repo](https://github.com/remy/nodemon)
- DotEnv
  - We talked a bit about this over Reddit. DotEnv allows you to use .env files for different stages of development (dev, staging, prod, etc) to that you can configure your server faster with environment variables without cluttering your own machine's environment variables. [Docs are here](https://github.com/motdotla/dotenv)
- A .gitignore file
  - All projects stored with git should include a .gitignore, it helps keep your repository cleaner and easier to download for others. Make sure to exclude your `node_modules` folder and your `.env` file. I only added the `.env` so you could see an example. To remove it from the git use `git rm --cache .env`.

---

### A few other changes

- Most of the time, nowadays especially, it is looked down upon to use `var` and instead a better idea to use `const` and `let` as these respect variable scopeing and allow for better variable control. Just something to think about
- There is a change that I made in the routes folder and the app.js file. This does not have to be permanent, but it may be a good idea to look into how to pass your app instance from your app.js to routes/index to routes/* from there for better control over the files. This is just my opinion though and there is no right or wrong way to do it.
- Once you get comfortable with Node and Express, possibly check out Typescript as a development tool. It adds static typings to your JS files turning them into TS and can allow for even cleaner and healthier code. This can be a slow change though, so no worries.