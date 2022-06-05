import Tag from "./tag";
import Thumbnail from "./thumbnail";

export default interface Post {
    title: string;
    content: string;
    id: string;
    publishedAt: string;
    thumbnail: Thumbnail;
    teaser: string;
    size: "large" | "small";
    tags: Tag[];
}