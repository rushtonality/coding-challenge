create schema challenge;

create table challenge.article (
  id serial not null,
  title text,
  description text,
  author text,
  tags text,
  created_at text,
  updated_at text,
  PRIMARY KEY (id)
);
