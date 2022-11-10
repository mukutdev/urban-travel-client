import React from "react";
import BgImage from "../../components/BgImage/BgImage";
import blogImg from "../../assets/images//pexels-suliman-sallehi-2128181.jpg";
import { Accordion } from "flowbite-react";
const Blog = () => {

    const blogPost =[
        {
            id :1,
            ques : 'Difference between SQL and NoSQL ?',
            content:'SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.'
        },
        {
            id :2,
            ques : 'What is JWT, and how does it work?',
            content:'JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesnt have to completely rely on a datastore(database) to save session information.'
        },
        {
            id :3,
            ques : 'What is the difference between javascript and NodeJS?',
            content : ' JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.'
        },
        {
            id :4,
            ques : 'How does NodeJS handle multiple requests at the same time?',
            content : ' NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.'
        },
    ]


  return (
    <div>
      <BgImage img={blogImg} content={"Blogs"} />

      <div className="container mx-auto w-2/3  my-12">
        <div className="shadow p-9">
          <Accordion>

            {
                blogPost.map(post =>  <Accordion.Panel key={post.id}>
                    <Accordion.Title>{post.ques}</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                       {post.content}
                      </p>
                     
                    </Accordion.Content>
                  </Accordion.Panel>)
            }
           

           
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Blog;
