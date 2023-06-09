CREATE DATABASE IF NOT EXISTS feedbox_app;
USE feedbox_app;

CREATE TABLE boxes (
    box_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    box_title TEXT NOT NULL,
    box_description TEXT NOT NULL,
    box_open BOOLEAN NOT NULL,
    box_public BOOLEAN NOT NULL,
    box_active BOOLEAN,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE feedbacks (
    feedback_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    box_id INTEGER NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    feedback_description TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (box_id) REFERENCES boxes(box_id)
);
