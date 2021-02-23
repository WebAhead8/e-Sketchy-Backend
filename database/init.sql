BEGIN;
DROP TABLE IF EXISTS users, products, comments, cart, blog CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    user_pass VARCHAR(255),
    email VARCHAR(255),
    loc VARCHAR(255)
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    namee VARCHAR(255),
    pic_url TEXT,
    descr TEXT,
    price INTEGER,
    category VARCHAR(255)
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id INTEGER REFERENCES users(id),
    prod_id INTEGER REFERENCES products(id)
);

CREATE TABLE cart(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    prod_id INTEGER REFERENCES products(id),
    Qty INTEGER,
    total INTEGER
);

CREATE TABLE blog (
    blog_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    blog_title VARCHAR(255),
    blog_dec VARCHAR(255),
    post_body TEXT,
    comments VARCHAR(255),
    tags TEXT []
);

INSERT INTO users (username, user_pass, email, loc) VALUES
  ('Haneen', 123421, 'haneen@gmail.com', 'Nazareth'),
  ('Bushra', 9876789, 'boshee@gmail.com', 'Nazareth' ),
  ('May', 41114, 'may@gmail.com', 'Nazareth'),
  ('Khaled', 727272, 'khaled@gmail.com', 'Sakhnin')

;

COMMIT;