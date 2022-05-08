import Project from "./project";


function AllProjects({ allProjects }) {
    let even = false;

    return (
        <>
            <h3 className="text-white text-2xl md:text-3xl lg:text-5xl mb-10 lg:mb-20 text-center">Past and Recent Projects</h3>
            <div className="relative">
                <div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-gradient-to-b from-blue-500 via-sky-500 to-purple-600 md:block left-1/2"></div>
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
                        )
                    }
                })}
            </div>
        </>
    )
}

export default AllProjects;