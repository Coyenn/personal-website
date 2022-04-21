import Project from "./project";

function AllProjects({ allProjects }) {
    return (
        <div className="py-2 md:py-3">
            <p className='mb-3 secondary'><small>Projects</small></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                {allProjects?.map((project) => {
                    if (project._status === "published") {
                        return (
                            <Project
                                link={project.link}
                                title={project.title}
                                content={project.content}
                                key={project.id}
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default AllProjects;