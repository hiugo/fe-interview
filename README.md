## Cleo Frontend Interview - Bills
### Get Started
1. Fork or clone this repo (a simple [`create-react-app`](https://github.com/facebook/create-react-app) extended with [`json-server`](https://github.com/typicode/json-server) and some Cleo-specific goodies)
1. Install dependencies via `yarn` (or `npm`)
1. Run `yarn start` to start the dev server
1. Run `yarn api` in a different terminal to start the json-api server

### The Task
1. Create a Tabs component that allows multiple pages to be switched between.
1. One tab should show a list of bills. These can be found at http://localhost:3002/bills/. Bills have a flag `isBill` set to `true`.
1. Another tab should show a list of transactions which are potential bills. These can also be found at http://localhost:3000/bills/. Potential bills have a flag `isBill` set to `false`.
1. Under each bill row for both lists, should be a hidden list of transactions for that bill. This should show when the bill row is clicked.
1. Under the name of each bill should show a count of the transactions for it
1. Add an action to the bills tab for each bill called "remove bill" which updates the relevant bill's `isBill` flag to `false`. You can use a `PATCH` request to `http://localhost:3000/bills/:id` using the id of the bill to update the bill resource.
1. Add an action to the potential bills tab for each potential bill called "Add as bill" which updates the relevant bill's `isBill` flag to `true`.
1. After each action, the lists should reflect the changes.

### Notes
- I wanted to get this project as polished as possible so I spend about 6 hours working on it.
- I've created a clean UI using the given data. The layout is responsive and I've added a couple of little improvements like animations and sticky tabs.
- The state folder structure is probably a bit "overkill" for this project but I wanted to show how I like to organize it and leave it ready for scalability.
- Added some basic eslint to the project for some things I like to validate, I would add some more if I kept working on this project.
- There were a couple of improvements I wanted to include like optional chaining and path alias but I was having some issues adding babel to the project and decided it wasn't worth spend any more time on it.