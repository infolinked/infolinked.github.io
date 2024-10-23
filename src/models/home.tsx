import { Blog } from "./blog";
import { Mindmap } from "./mindmap";
import { Product } from "./product";

interface Home {
  blogs: Blog[];
  products: Product[];
  mindmaps: Mindmap[];
}
export type { Home };