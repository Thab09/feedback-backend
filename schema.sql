CREATE DATABASE IF NOT EXISTS feedbox_app;
USE feedbox_app;

CREATE TABLE boxes (
    box_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id INTEGER NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    box_title VARCHAR(255) NOT NULL,
    box_description VARCHAR(255) NOT NULL,
    box_open BOOLEAN NOT NULL,
    box_public BOOLEAN NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE feedbacks (
    feedback_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    box_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    feedback_description TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (box_id) REFERENCES boxes(box_id)
);

INSERT INTO boxes (user_id, user_name, box_title, box_description, box_open, box_public)
VALUES 
(2323, "Hassan", "Suggestion box test #1", "This is the first one.", true, false),
(2324, "John", "Suggestion box test #2", "This is the second one.", false, false),
(2325, "Liam", "Suggestion box test #3", "This is the third one.", true, true);