
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "family_member" (
    "id" SERIAL PRIMARY KEY,
    "member_name" VARCHAR (80) NOT NULL,
    "user_id" INT REFERENCES "user"
);

-- CREATE TABLE "events" (
--     "event_id" SERIAL PRIMARY KEY,
--     "title" VARCHAR(255) NOT NULL,
--     "description" TEXT,
--     "location" VARCHAR(255),
--     "start_time" TIME,
--     "start_date" DATE,
--     "family_member_id" INT REFERENCES "family_member(id)",
-- );

CREATE TABLE "events" (
    "event_id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "location" VARCHAR(255),
    "start_time" TIME,
    "start_date" DATE,
    "family_member_id" INT REFERENCES "family_member"("id")
);

