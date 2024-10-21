// import BlogListComponent from '@/components/blog/list'

import BlogComponent from "@/components/blog-component";
import ProductComponent from "@/components/product-component";
import { Blog } from "@/models/blog";
import { Product } from "@/models/product";

async function fetchAllBlogs(){
  console.log('start 1'); 
  const response = await fetch('http://localhost:3000/api/master', {
    method: 'GET',
    cache: 'no-store'
  })
  console.log('start 2'); 
  const result = await response.json();
  console.log('start 3'); 
  console.log('stage 4'); 

  if(result?.success) return result.data; 
}
const  Master = async () => {
  debugger; 
  const getAllBlogs = await fetchAllBlogs(); 
  debugger; 

  return (
    <div className="flex min-h-screen flex-col p-8">
      { getAllBlogs?.products && 
        <div className="px-2 mx-auto my-8 max-w-7xl">
          <div className="flex justify-center text-2xl font-bold md:text-3xl">
            Products
          </div>
          

          <ul className="grid gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:p-5">
            {getAllBlogs?.products?.slice(0, 10).map((product: Product, index: number) => (
              <ProductComponent key={index} product={product} />
            ))}
          </ul>

          <div className="max-w-xl mx-auto overflow-hidden rounded-lg shadow-xs">
            <div className="flex justify-center max-w-xl ">
              <a
                href="/products"
                className="block w-full px-4 py-3 text-center transition ease-in-out delay-75 rounded-lg cursor-pointer bg-slate-100 hover:bg-slate-200"
              >
                Show more projects
              </a>
            </div>
          </div>
        </div>
      }


      { getAllBlogs?.blogs && 
        <div className="px-2 mx-auto my-8 max-w-7xl">
          <div className="flex justify-center text-2xl font-bold md:text-3xl">
            Blogs
          </div>
          {/* <pre>{JSON.stringify(blogs, null, 2)}</pre> */}

          <ul className="grid gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:p-5">
            {getAllBlogs?.blogs?.slice(0, 9).map((blog: Blog, index: number) => (
              <BlogComponent key={index} blog={blog} />
            ))}
          </ul>

          <div className="max-w-xl mx-auto overflow-hidden rounded-lg shadow-xs">
            <div className="flex justify-center max-w-xl ">
              <a
                href="/topics"
                className="block w-full px-4 py-3 text-center transition ease-in-out delay-75 rounded-lg cursor-pointer bg-slate-100 hover:bg-slate-200"
              >
                Show more topics
              </a>
            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default Master;  