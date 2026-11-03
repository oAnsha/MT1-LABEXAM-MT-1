# Book API calls

Run the Express server (`npm run start:api`) and keep its terminal open. These requests are for `http://localhost:4000`.

Open `books-api.http` in VS Code. Use EchoAPI or a REST Client extension to send each request, top to bottom:

1. `GET /books` lists all books.
2. `GET /books/1` gets book ID 1.
3. `POST /books` adds book ID 4 (JSON body included).
4. `PUT /books/1` updates book ID 1 (JSON body included).
5. `DELETE /books/4` removes the added book.

POST and PUT require `Content-Type: application/json`. The book data is held in memory and resets when the Express server restarts.

Save screenshots of successful request responses in the project `screenshots/` folder.
