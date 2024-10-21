interface Author {
  name: string;
  image: string;
  link: string;
  position: string;
}

interface Category {
  name: string;
}
interface Blog {
  title: string;
  author: Author;
  date: string;
  categories: Category[];
  site: string;
  path: string;
  slug: string;
  description: string;
  images: string[];
}

export type { Blog };
