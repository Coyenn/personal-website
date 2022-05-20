import Project from "./project";

function AllProjects({ allProjects }) {
    let even = false;

    return (
        <div className="relative">
            <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 transform bg-gradient-to-b from-blue-500 via-sky-500 to-purple-600 md:block"></div>
            <span className="flex flex-col gap-5 md:gap-0">
                {allProjects?.map((project) => {
                    even = !even;

                    if (project._status === "published") {
                        return (
                            <div className="md:py-20" key={project.id}>
                                <Project
                                    website={project.website}
                                    repository={project.repository}
                                    title={project.title}
                                    content={project.content}
                                    key={project.id}
                                    direction={even === true ? "left" : "right"}
                                />
                            </div>
                        );
                    }
                })}
            </span>
        </div>
    );
}

export default AllProjects;
