const format = require("pg-format");
const db = require("../connection");

const seed = ({
  allTeasData,
  energisedTeasData,
  focusedTeasData,
  happyTeasData,
  relaxedTeasData,
}) => {
  return db
    .query(`DROP TABLE IF EXISTS all_teas;`)
    .then(() => {
      return db.query("DROP TABLE IF EXISTS energised_teas;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS focused_teas;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS happy_teas;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS relaxed_teas;");
    })
    .then(() => {
      const allTeasTable = db.query(`CREATE TABLE all_teas (
        tea_id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        slug VARCHAR NOT NULL,
        altnames VARCHAR,
        image VARCHAR,
        origin VARCHAR NOT NULL,
        type VARCHAR NOT NULL,
        caffeine VARCHAR NOT NULL,
        caffeineLevel VARCHAR NOT NULL,
        description VARCHAR,
        colorDescription VARCHAR,
        tasteDescription VARCHAR,
        sources VARCHAR);`);

      const energisedTable = db.query(`CREATE TABLE energised_teas (
        tea_id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        slug VARCHAR NOT NULL,
        altnames VARCHAR,
        image VARCHAR,
        origin VARCHAR NOT NULL,
        type VARCHAR NOT NULL,
        caffeine VARCHAR NOT NULL,
        caffeineLevel VARCHAR NOT NULL,
        description VARCHAR,
        colorDescription VARCHAR,
        tasteDescription VARCHAR,
        sources VARCHAR);`);

      const focusedTable = db.query(`CREATE TABLE focused_teas (
        tea_id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        slug VARCHAR NOT NULL,
        altnames VARCHAR,
        image VARCHAR,
        origin VARCHAR NOT NULL,
        type VARCHAR NOT NULL,
        caffeine VARCHAR NOT NULL,
        caffeineLevel VARCHAR NOT NULL,
        description VARCHAR,
        colorDescription VARCHAR,
        tasteDescription VARCHAR,
        sources VARCHAR);`);

      const happyTable = db.query(`CREATE TABLE happy_teas (
        tea_id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        slug VARCHAR NOT NULL,
        altnames VARCHAR,
        image VARCHAR,
        origin VARCHAR NOT NULL,
        type VARCHAR NOT NULL,
        caffeine VARCHAR NOT NULL,
        caffeineLevel VARCHAR NOT NULL,
        description VARCHAR,
        colorDescription VARCHAR,
        tasteDescription VARCHAR,
        sources VARCHAR);`);

      const relaxedTable = db.query(`CREATE TABLE relaxed_teas (
        tea_id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        slug VARCHAR NOT NULL,
        altnames VARCHAR,
        image VARCHAR,
        origin VARCHAR NOT NULL,
        type VARCHAR NOT NULL,
        caffeine VARCHAR NOT NULL,
        caffeineLevel VARCHAR NOT NULL,
        description VARCHAR,
        colorDescription VARCHAR,
        tasteDescription VARCHAR,
        sources VARCHAR);`);

      return Promise.all([
        allTeasTable,
        energisedTable,
        focusedTable,
        happyTable,
        relaxedTable,
      ]);
    })
    .then(() => {
      const insertAllTeasQueryStr = format(
        `INSERT INTO all_teas (name, slug, altnames, image, origin, type, caffeine, caffeineLevel, description, colorDescription, tasteDescription, sources) VALUES %L;`,
        allTeasData.map(
          ({
            name,
            slug,
            altnames,
            image,
            origin,
            type,
            caffeine,
            caffeineLevel,
            description,
            colorDescription,
            tasteDescription,
            sources,
          }) => [
            name,
            slug,
            altnames,
            image,
            origin,
            type,
            caffeine,
            caffeineLevel,
            description,
            colorDescription,
            tasteDescription,
            sources,
          ]
        )
      );
      const allTeasPromise = db.query(insertAllTeasQueryStr);

      const insertEnergisedTeasQueryStr = format(
        `INSERT INTO energised_teas (name, slug, altnames, image, origin, type, caffeine, caffeineLevel, description, colorDescription, tasteDescription, sources) VALUES %L;`,
        energisedTeasData.map(
          ({
            name,
            slug,
            altnames,
            image,
            origin,
            type,
            caffeine,
            caffeineLevel,
            description,
            colorDescription,
            tasteDescription,
            sources,
          }) => [
            name,
            slug,
            altnames,
            image,
            origin,
            type,
            caffeine,
            caffeineLevel,
            description,
            colorDescription,
            tasteDescription,
            sources,
          ]
        )
      );
      const energisedTeasPromise = db.query(insertEnergisedTeasQueryStr);

      const insertFocusedTeasQueryStr = format(
        `INSERT INTO focused_teas (name, slug, altnames, image, origin, type, caffeine, caffeineLevel, description, colorDescription, tasteDescription, sources) VALUES %L;`,
        focusedTeasData.map(
          ({
            name,
            slug,
            altnames,
            image,
            origin,
            type,
            caffeine,
            caffeineLevel,
            description,
            colorDescription,
            tasteDescription,
            sources,
          }) => [
            name,
            slug,
            altnames,
            image,
            origin,
            type,
            caffeine,
            caffeineLevel,
            description,
            colorDescription,
            tasteDescription,
            sources,
          ]
        )
      );
      const focusedTeasPromise = db.query(insertFocusedTeasQueryStr);

      const insertHappyTeasQueryStr = format(
        `INSERT INTO happy_teas (name, slug, altnames, image, origin, type, caffeine, caffeineLevel, description, colorDescription, tasteDescription, sources) VALUES %L;`,
        happyTeasData.map(
          ({
            name,
            slug,
            altnames,
            image,
            origin,
            type,
            caffeine,
            caffeineLevel,
            description,
            colorDescription,
            tasteDescription,
            sources,
          }) => [
            name,
            slug,
            altnames,
            image,
            origin,
            type,
            caffeine,
            caffeineLevel,
            description,
            colorDescription,
            tasteDescription,
            sources,
          ]
        )
      );
      const happyTeasPromise = db.query(insertHappyTeasQueryStr);

      const insertRelaxedTeasQueryStr = format(
        `INSERT INTO relaxed_teas (name, slug, altnames, image, origin, type, caffeine, caffeineLevel, description, colorDescription, tasteDescription, sources) VALUES %L;`,
        relaxedTeasData.map(
          ({
            name,
            slug,
            altnames,
            image,
            origin,
            type,
            caffeine,
            caffeineLevel,
            description,
            colorDescription,
            tasteDescription,
            sources,
          }) => [
            name,
            slug,
            altnames,
            image,
            origin,
            type,
            caffeine,
            caffeineLevel,
            description,
            colorDescription,
            tasteDescription,
            sources,
          ]
        )
      );
      const relaxedTeasPromise = db.query(insertRelaxedTeasQueryStr);

      return Promise.all([
        allTeasPromise,
        energisedTeasPromise,
        focusedTeasPromise,
        happyTeasPromise,
        relaxedTeasPromise,
      ]);
    });
};
module.exports = seed;
