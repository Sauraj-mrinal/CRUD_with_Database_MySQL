# CRUD_with_Database_MySQL

# CRUD App README

## Description
This CRUD (Create, Read, Update, Delete) application showcases the fundamentals of web development using HTML, CSS, JavaScript, Node.js, and MySQL. It offers a simple yet functional interface to interact with a MySQL database through basic CRUD operations.

## Features
- **Create:** Add new items to the database.
- **Read:** Retrieve and display items from the database.
- **Update:** Modify existing items in the database.
- **Delete:** Remove items from the database.

## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Sauraj-mrinal/crud-app.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd crud-app
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Set up the Database:**
   - Create a database named `crud_db`.
   - Import `crud_db.sql` into your MySQL database.

5. **Configure the Database Connection:**
   - Update connection details in `config.js`.

6. **Start the Server:**
   ```bash
   node server.js
   ```

## Usage
Once the server is running, access the application at `http://localhost:3000` in your web browser.

- **Create:** Click on "Add Item" to insert new entries.
- **Read:** Existing database items are displayed automatically.
- **Update:** Click "Edit" to modify item details.
- **Delete:** Remove items by clicking "Delete".

## Contributing
We welcome contributions! Follow these steps to contribute:
1. **Fork** the repository.
2. Create a new branch (`git checkout -b feature/improvement`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push changes to your branch (`git push origin feature/improvement`).
5. Create a **Pull Request**.

