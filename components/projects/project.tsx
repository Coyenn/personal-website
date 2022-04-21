interface Project {
    title: string,
    content: string,
    link: string,
}

export default function Project(props: Project) {
    return (
        <a href={props.link} target="_blank" rel='noreferrer' className='no-underline'>
            <p className='link mb-2'>{props.title}</p>
            <p className="secondary">{props.content}</p>
        </a>
    )
}