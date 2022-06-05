interface TagProps {
    label: string;
    color: string;
}

export default function Tag(props: TagProps) {
    switch (props.color) {
        case "blue":
            return (
                <span className="inline-block bg-blue-200 text-blue-800 text-xs rounded-full px-3 py-1 mr-2">
                    {props.label}
                </span>
            );
        case "red":
            return (
                <span className="inline-block bg-red-200 text-red-800 text-xs rounded-full px-3 py-1 mr-2">
                    {props.label}
                </span>
            );
        case "green":
            return (
                <span className="inline-block bg-green-200 text-green-800 text-xs rounded-full px-3 py-1 mr-2">
                    {props.label}
                </span>
            );
        case "purple":
            return (
                <span className="inline-block bg-purple-200 text-purple-800 text-xs rounded-full px-3 py-1 mr-2">
                    {props.label}
                </span>
            );
        default:
            return (
                <span className="inline-block bg-blue-500 text-white text-xs rounded-full px-3 py-1 mr-2">
                    {props.label}
                </span>
            );
    }
}