import React from 'react';

const Blogs = () => {
    return (
        <div className='w-2/3 mx-auto mt-10 mb-10'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2">
                <div className="collapse-title text-xl font-medium">
                    What is CORS?
                </div>
                <div className="collapse-content">
                    <p>CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated.<br /><br/>This policy is used to secure a certain web server from access by other website or domain. For example, only the allowed domains will be able to access hosted files in a server such as a stylesheet, image, or a script.
</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.
                        <br /><br />
                        You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.
                        <br /><br />
                        As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.<br /><br />Other Authentication Option:<br />
                        # Auth0<br />
                        # MongoDB<br />
                        # Keycloak<br />
                        # Passport<br />
                        # Okta<br />
                        # JSON Web Token<br />
                        # Amazon Cognito

                    </p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p>Node.js maintains a limited thread pool to serve requests.
                        Whenever a request comes, Node.js places it into a queue.
                        Now, the single-threaded “Event loop”—the core component—comes into the picture. This event loop waits for requests indefinitely.<br />
                        When a request comes in, the loop picks it up from the queue and checks whether it requires a blocking input/output (I/O) operation. If not, it processes the request and sends a response.<br />
                        If the request has a blocking operation to perform, the event loop assigns a thread from the internal thread pool to process the request. There are limited internal threads available. This group of auxiliary threads is called the worker group.<br />
                        The event loop tracks blocking requests and places them in the queue once the blocking task is processed. This is how it maintains its non-blocking nature.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;