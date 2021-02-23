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
    pro_name VARCHAR(255),
    pic_url TEXT,
    descr TEXT,
    price DECIMAL,
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

/* Inserting Products */
INSERT INTO products(pro_name, pic_url, descr, price, category) VALUES
('Ruby Rose', '/pictures/Rubyrose.jpg', 'Australin Actor', 29.99, 'portrait'),
('Blue Alex', '/pictures/Alex.jpg', 'Lost in the music', 29.99, 'anime'),
('Purple Alex','/pictures/AlexAgain.jpg','Lost in the music',29.99,'anime'),
('Bassam','/pictures/Bassam.jpg','Request from client',19.99,'portrait'),
('Bess','/pictures/Bess.jpg','Request from client',19.99,'portrait'),
('Cascina','/pictures/Cascina.jpg','Request from client',19.99,'portrait'),
('Daynah','/pictures/Daynah.jpg','Request from client',29.99,'portrait'),
('Dua Lipa','/pictures/Dualipa.jpg','Singer & Songwriter',29.99,'portrait'),
('Lindsey','/pictures/Lindsey.jpg','Anime portrait',29.99,'anime'),
('Saule','/pictures/Saule.jpg','Request from client',29.99,'portrait'),
('Samantha','/pictures/Samantha.jpg','Request from client',29.99,'portrait'),
( 'Drawing Paint Brush','https://5.imimg.com/data5/WY/YU/MY-13876579/drawing-brush-500x500.jpg','6 Drawing Paint Brush',12.99,'brushes'),
('Drawing Paint Brushes','https://images-na.ssl-images-amazon.com/images/I/61ClMLNOv0L._SL1001_.jpg','13 Drawing Paint Brush',19.99,'brushes'),
('Drawing Paint Brush Pink','https://i5.walmartimages.com/asr/53eb6892-d382-4cb0-ac00-c7323aaa49b9.5abf31a4f228e9d781605f0c367f9c8a.jpeg','15 Drawing Paint Brush',29.99,'brushes'),
('Sketch Pad','https://images-na.ssl-images-amazon.com/images/I/91bvXSjXYaL._AC_SL1500_.jpg','8.5x11 Double-Sided Hardbound Sketchbook',29.99,'sketchbook'),
('Sketch','https://target.scene7.com/is/image/Target/GUEST_f465293e-7666-44d0-85e6-086da74875cd?wid=488&hei=488&fmt=pjpeg','Blank 8.5x11 Black-Piccedilly',29.99,'sketchbook'),
('Space Sketch Book','http://prodimage.images-bn.com/pimages/0067103694932_p0_v1_s1200x630.jpg','Space Sketch Book',29.99,'sketchbook'),
('Uni Pin Fineline Drawing Pen','https://images-na.ssl-images-amazon.com/images/I/81GjrpUbmfL._AC_SL1500_.jpg','Sketching Set Gray Tones',19.99,'pens'),
('Sharpie Pen Set','https://i5.walmartimages.com/asr/83f1661e-6d04-46f2-b364-680398cbf96c_2.b61958885225513e44373778c19ed5fa.jpeg','Sharpie Assorted Fine Point Drawing 12 pieces',29.99,'pens'),
('Uni Pin Drawing Pen','https://www.cultpens.com/imgs/products/cp/950_constW/UN50212~Uni-PIN-Drawing-Pen-Black-Pack-of-5-Assorted-Sizes_DTL1_P1.jpg','Uni Pin Drawing Pen Set of 5',9.99,'pens'),
('XP Pen Star','https://images-na.ssl-images-amazon.com/images/I/51yUx-wAO5L._SL1500_.jpg','XP Pen Star03 V2 Graphics Drawing Tablet',99.99,'tablets'),
('XP Pen Star 6','https://images-na.ssl-images-amazon.com/images/I/61YJScBQ6aL._SL1500_.jpg','XP Pen Star03 V2 Graphics Drawing Tablet',99.99,'tablets'),
('Deco 02','https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/G/151456_1566390860.jpg','Deco 02 Graphics Drawing Tablet',99.99,'tablets')
;

COMMIT;