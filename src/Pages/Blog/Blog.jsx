import React from 'react';
import setTitle from '../../hooks/useTitle';

const Blog = () => {
    setTitle('Blog')
    return (
        <div className='my-12'>

            <h1 className='text-6xl font-bold text-center my-12'>Question Answer</h1>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary">What is MongoDB aggregate and how does it work ?</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary">MongoDB's aggregate is a framework for data aggregation and analysis within the database. It allows you to perform advanced data operations by applying a series of stages to the data. Each stage represents a specific operation, such as filtering, grouping, sorting, or projecting fields. The data flows through these stages, and the result is returned as an aggregated output. The aggregation pipeline in MongoDB provides a flexible and efficient way to process and transform data, enabling complex queries and computations to be performed directly within the database.
                </div>
            </div>




            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-secondary">Compare SQL and NoSQL databases?</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-secondary">SQL databases are relational, have a predefined schema, enforce data integrity, and support complex querying but are less scalable. NoSQL databases are non-relational, schema-less, provide flexibility in data modeling, and are highly scalable but may sacrifice some querying capabilities and data integrity constraints.</div>
            </div>


            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-accent">What is express js? What is Nest JS ?</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-accent">Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible approach to building web applications and APIs, simplifying tasks like handling HTTP requests, routing, middleware, and server-side rendering.

                    NestJS is a framework for building scalable and efficient server-side applications with Node.js. It leverages TypeScript and incorporates features from Angular, offering a modular and structured approach to application development. NestJS emphasizes modularity, dependency injection, and uses decorators to define routes, controllers, and other application components, making it easier to create maintainable and scalable back-end systems.</div>
            </div>



            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info">What is MongoDB aggregate and how does it work ?</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info">MongoDB's aggregate is a powerful data aggregation framework used to perform advanced data operations within the database. It allows you to process and analyze data by applying a series of stages to a collection. Each stage represents a specific operation, such as filtering, grouping, sorting, projecting, or joining data. The data flows through these stages, with the output of one stage becoming the input for the next. This allows for complex queries and computations to be performed efficiently in the database itself. Aggregation pipelines in MongoDB support a wide range of operators and expressions to manipulate and transform the data. It provides functionality for data summarization, data transformation, and generating computed results. The aggregate framework is particularly useful for performing analytics, generating reports, and extracting insights from large datasets.</div>
            </div>

        </div>
    );
};

export default Blog;