-- Create database
CREATE DATABASE user_data;

-- Select user_data database
\c user_data;

CREATE SCHEMA IF NOT EXISTS public;

-- Enable pgcrypto
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

INSERT INTO users (email, password) VALUES (
  'koop@mail.com',
  crypt('poop', gen_salt('bf'))
);