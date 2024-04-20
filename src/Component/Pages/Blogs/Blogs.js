import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="qna-parent">
      <div className="second-parent">
        <div className="qna">
          <h3>1. Difference between javascript and nodejs:</h3>
          <h5>(A). Javascript:</h5>
          <p>
            Javasrcript is a lightweight, interpreted web interectivity browser
            language. It runs with V8 engine of google chrome or any brower's
            engine. It is basically used on the client-side. Javascript is used
            for font-end development.
          </p>
          <h5>(B). Nodejs:</h5>
          <p>
            Nodejs is a Javascript runtime environment. It is basically used for
            server-side. It builds on google chrome javascript engine V8.
            Node.js is a platform built on Chrome's JavaScript runtime for
            easily building fast and scalable network applications.
          </p>
        </div>
        <div className="qna">
          <h3>
            2. When should you use nodejs and when should you use mongodb:
          </h3>
          <h5>(A). When should you use nodejs:</h5>
          <p>
            Nodejs is a real time data processing web application. It's
            basically used for server-side. It is API development application.
            It is used to run api server as a backend.
          </p>
          <h5>(B). When should use Mongodb: </h5>
          <p>
            MongodbDB is a web database system. It's contaied all data of a web
            site. It is super scalable, real-time data getting system. And make
            a website always live.
          </p>
        </div>
        <div className="qna">
          <h3>3. Differences between sql and nosql databases:</h3>
          <h5>(A). Sql:</h5>
          <p>
            Sql database is a particular sized table-based. It's a vertical
            scalable databse system. Database Fixed and predefiend schema. It
            can be used for complex quires.
          </p>
          <h5>(B). NoSql:</h5>
          <p>
            Nosql database is a dynamic schema. No fixed and predefined. It's a
            horizontally scalable. It has keys and value as there size. It's is
            most easyable and less costed of everyone.
          </p>
        </div>
        <div className="qna">
          <h3>4. What is the purpose of jwt and how does it work?</h3>
          <h5>(A) The purpose of jwt:</h5>
          <p>
            JSON Web Tokens (JWTs) a re a standardized way to securely send data
            between two parties.
          </p>
          <h5>(B) How does it works: </h5>
          <p>
            JSON Web Tokens (JWTs) are a standardized way to securely send data
            between two parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
