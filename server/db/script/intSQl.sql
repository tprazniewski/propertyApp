
-- CREATE TABLE users(
--   id INT PRIMARY KEY AUTO_INCREMENT, 
--   name VARCHAR(255) NOT NULL,
--   surname VARCHAR(255) NOT NULL,
--   dob date NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   phone VARCHAR(255) NOT NULL
-- )

-- CREATE TABLE properties(
--   id INT PRIMARY KEY AUTO_INCREMENT, 
--   title VARCHAR(255) NOT NULL,
--   description VARCHAR(255),
--   price DECIMAL(10,2),
--   type VARCHAR(255) NOT NULL,
--   location VARCHAR(255) NOT NULL,	
--   img VARCHAR(255),
--   kind VARCHAR(255) NOT NULL,
--   property_id INT,
--   FOREIGN KEY (property_id) REFERENCES users(id)
-- );

-- INSERT INTO properties (title, description, price, type, location, img, kind, property_id)
-- VALUES
-- ('Pretty cheap House for sale', 'This flat is pretty small and pretty cheap', 12345, 'For Sale', 'Stockholm', '', 'House', 1 ),
-- ('Pretty cheap House for sale', 'This flat is pretty small and pretty cheap', 44444, 'For Sale', 'Stockholm', '', 'House', 2 ),
-- ('Pretty cheap appartment for sale', 'This flat is pretty small and pretty cheap', 55555, 'For Sale', 'Stockholm', '', 'Flat', 1 ),
-- ('Pretty cheap appartment to Rent', 'This flat is pretty small and pretty cheap', 66666, 'To Rent', 'Stockholm', '', 'Flat', 1 )
--  


-- INSERT INTO users (name, surname, dob, email, phone)
-- VALUES 
-- ('Tomas', 'Smith', '1969-12-04', 'tomasz@wp.pl', '123-555-666' ),
-- ('Johanes', 'Loca', '1989-04-04', 'joha@wp.pl', '555-222-666' ),
-- ('David', 'Smith', '1999-03-04', 'daw@gmail.com', '123-555-666' ),
-- ('Alexander', 'Valkow', '1969-02-04', 'ale@wp.pl', '663-555-443' )

-- drop table properties
-- DELETE FROM properties where id =2

