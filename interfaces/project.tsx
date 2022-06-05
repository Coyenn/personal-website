import Tag from "./tag";

export default interface Project {
    title: string;
    content: string;
    website: string;
    repository: string;
    direction: string;
    tags: Tag[];
}