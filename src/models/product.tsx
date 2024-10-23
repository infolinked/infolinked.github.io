interface Category {
  name: string;
}
interface Client {
  name: string;
  logo: string;
  description: string;
}
interface Owner {
  name: string;
  logo: string;
  type: string;
  work_type: string;
}

interface Product {
  title: string;
  sub_title: string;
  slug: string;
  client: Client;
  owner: Owner;
  categories: Category[];
  link: string;
  description: string;
  images: string[];
}

export type { Category, Client, Owner, Product };
