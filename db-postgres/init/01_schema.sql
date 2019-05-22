create schema challenge;

create table challenge.article (
  id serial not null,
  title text,
  description text,
  author text,
  tags text,
  created_at_stage text,
  updated_at_stage text,
  created_at date,
  updated_at date,
  PRIMARY KEY (id)
);
