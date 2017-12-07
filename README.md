EgReader.com is an open and free platform for reading pdf books online. Its very user friendly and doesn't require any sign up process.
From home page user need to click on book image which he wants to read. Then the pdf file will open in browser. There is download and print 
option available in the pdf view.
Admin can create new books and edit them. For that sign in is required.
In future I will add category of books, newsletter through email, book request to admin etc. 


**How to set up the code**

1. Install [Node.js](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/download-center?jmp=nav) on your computer

2. Download this code, and from command prompt run:

   `npm install`


   `bower install`


3. To run the code, run:

    `node server.js`

    
4. In the browser open http://localhost:3000/, and you should see the index page

**Exposed APIs**:

GET **/api/articles** (returns list of articles)

POST **/api/articles** (create new article)

GET **/api/articles/:articleId** (returns an article with matching id)

DELETE **/api/articles/:articleId** (deletes the matching article)

GET **/api/articles/edit/:articleId** (returns an article with matching id)

PUT **/api/articles/edit/:articleId** (updates the matching article)
