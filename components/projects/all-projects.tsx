import Project from "./project";

function AllProjects({ allProjects }) {
    let even = false;

    return (
        <>
            <h3 className="mb-10 text-center text-2xl text-white md:text-3xl lg:mb-20 lg:text-5xl">
                Past and Recent Projects
            </h3>
            <div className="relative">
                <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 transform bg-gradient-to-b from-blue-500 via-sky-500 to-purple-600 md:block"></div>
                {allProjects?.map((project) => {
                    even = !even;

                    if (project._status === "published") {
                        return (
                            <Project
                                link={project.link}
                                title={project.title}
                                content={project.content}
                                key={project.id}
                                direction={even === true ? "left" : "right"}
                            />
                        );
                    }
                })}
            </div>
        </>
    );
}

export default AllProjects;
