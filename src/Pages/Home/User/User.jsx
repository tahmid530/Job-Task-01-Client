
const User = () => {

    return (
        <div>
            <h1 className="text-center">
                <h1 className="text-5xl font-extrabold">Welcome to TaskMagnet</h1>
                <p className="text-xl">Your All-in-One Task Management Solution</p>
            </h1>
            <section>
                <h2 className="text-3xl text-center font-extrabold">Who Benefits from TaskMagnet?</h2>
                <div className="user-category">
                    <img src="developer-icon.png" alt="Developer Icon" />
                        <h3>Developers</h3>
                        <p>Stay organized with project timelines, code reviews, and task assignments. Integration with popular development tools ensures seamless collaboration.</p>
                </div>
                <div className="user-category">
                    <img src="corporate-icon.png" alt="Corporate Icon" />
                        <h3>Corporate Professionals</h3>
                        <p>Executives and team leaders can manage and monitor project progress, assign tasks efficiently, and maintain clear communication within the corporate environment.</p>
                </div>
            </section>
        </div>
    );
};

export default User;