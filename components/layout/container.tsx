export default function Container(props) {
    return(
        <div className="container mx-auto px-5 sm:px-20 lg:px-0">
            {props.children}
        </div>
    )
}