import Project from "./project";
import Fade from "react-reveal/Fade";

function AllProjects({ allProjects }) {
    let even = false;

    return (
        <div className="relative">
            <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 transform bg-gradient-to-b from-blue-500 via-sky-500 to-purple-600 md:block"></div>
            {allProjects?.map((project) => {
                even = !even;

                if (project._status === "published") {
                    return (
                        <div className="md:py-20">
                            <Fade
                                bottom
                                delay={300}
                                duration={500}
                                distance={"50px"}
                            >
                                <Project
                                    link={project.link}
                                    title={project.title}
                                    content={project.content}
                                    icon={project.icon}
                                    key={project.id}
                                    direction={even === true ? "left" : "right"}
                                />
                            </Fade>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default AllProjects;
