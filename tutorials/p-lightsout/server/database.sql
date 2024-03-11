CREATE DATABASE p_lightsout;

CREATE TABLE puzzles(
    level_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    solve_mapping TEXT []
);

CREATE TABLE puzzles_editable(
    level_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    last_edited TIMESTAMP NOT NULL,
    solve_mapping TEXT []
);

CREATE TABLE help_twosteps(
    level_id integer REFERENCES puzzles (level_id),
    description VARCHAR(255),
    last_edited TIMESTAMP NOT NULL,
    solve_mapping TEXT []
);

