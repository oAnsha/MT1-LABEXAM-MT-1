# MT1-LABEXAM - Library Book Management

This project has two independent servers, as required by the lab handout:

- `httpServer.js` uses Node's built-in HTTP and FS modules on port 3000.
- `expressApp.js` uses Express for a REST API on port 4000.
- `public/index.html` is the static page served at `/home` on port 3000.
- `screenshots/` is where you can save your own screenshots for submission.

## First-time setup

1. Install Node.js if the `node` and `npm` commands are not available.
2. Open a terminal in this `MT1-LABEXAM` folder.
3. Run `npm install` once to install Express.

## Start the servers

Open two terminal windows in this folder:

- First window: `npm run start:http`
- Second window: `npm run start:api`

Keep both windows open while using the app. Visit `http://localhost:3000/` or `http://localhost:3000/home` for the page. The API is at `http://localhost:4000/books`.

## API examples

Use an API client such as EchoAPI. For POST, select JSON as the request body and send:

```json
{
  "id": 4,
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "price": 550,
  "category": "Programming"
}
```

For PUT, send all book fields to `http://localhost:4000/books/1`. For DELETE, use `http://localhost:4000/books/1`. The data is held in memory, so changes reset when the Express server restarts.

## Submission items to do yourself

- Create the GitHub repository named `MT1-LABEXAM`, add your GitHub ID to the answer sheet, and push your commits.
- Capture screenshots of both servers, the `/home` page, API GET/POST/PUT/DELETE results, and GitHub commit history. Save them in `screenshots/`.
