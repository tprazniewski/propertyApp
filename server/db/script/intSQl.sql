-- DROP TABLE IF EXISTS Users;
-- DROP TABLE IF EXISTS Properties;

-- CREATE TABLE properties(
-- id SERIAL PRIMARY KEY,
--   title VARCHAR(255) NOT NULL,
--   description VARCHAR(255),
--   price DECIMAL(10,2),
--   type VARCHAR(255) NOT NULL,
--   img VARCHAR(255),
--   kind VARCHAR(255) NOT NULL
-- );
-- CREATE TABLE users(
--   id SERIAL PRIMARY KEY, 
--   name VARCHAR(255) NOT NULL,
--   surname VARCHAR(255) NOT NULL,
--   dob date NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   phone VARCHAR(255) NOT NULL,
--   property_id INT,
--   FOREIGN KEY (property_id) REFERENCES properties(id)
-- )
-- INSERT INTO properties (title, description, price, type, location, img, kind)
-- VALUES
-- ('Pretty cheap House for sale', 'This flat is pretty small and pretty cheap', 12345, 'For Sale', 'Stockholm', '', 'House' ),
-- ('Pretty cheap House for sale', 'This flat is pretty small and pretty cheap', 44444, 'For Sale', 'Stockholm', '', 'House' ),
-- ('Pretty cheap appartment for sale', 'This flat is pretty small and pretty cheap', 55555, 'For Sale', 'Stockholm', '', 'Flat' ),
-- ('Pretty cheap appartment to Rent', 'This flat is pretty small and pretty cheap', 66666, 'To Rent', 'Stockholm', '', 'Flat' )
 


-- INSERT INTO users (name, surname, dob, email, phone, property_id)
-- VALUES (
-- ('Tomas', 'Smith', '1969-12-04', 'tomasz@wp.pl', '123-555-666', 1 )
-- ('Johanes', 'Loca', '1989-04-04', 'joha@wp.pl', '555-222-666', 2 )
-- ('David', 'Smith', '1999-03-04', 'daw@gmail.com', '123-555-666', 3 )
-- ('Alexander', 'Valkow', '1969-02-04', 'ale@wp.pl', '663-555-443', 4 )
)