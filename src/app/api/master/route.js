import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Make multiple API calls concurrently
    const [productResponse, blogResponse, mindmapResponse] = await Promise.all([
      fetch('https://raw.githubusercontent.com/aungthuoo/apis/main/products/index.json'),
      fetch('https://raw.githubusercontent.com/aungthuoo/apis/main/blogs/index.json'),
      fetch('https://raw.githubusercontent.com/aungthuoo/apis/main/mindmaps/index.json'),
    ]);

    // Check if responses are ok before proceeding
    if (!productResponse.ok || !blogResponse.ok || !mindmapResponse.ok) {
      throw new Error("Failed to fetch one or more APIs");
    }

    // Explicitly type the expected data structure (adjust types based on actual response)
    const productData = await productResponse.json();
    const blogData = await blogResponse.json();
    const mindmapData = await mindmapResponse.json();

    // Return both datasets in a single response
    const result = { 
      "products" : productData, 
      "blogs" : blogData,
      "mindmaps" : mindmapData
    };
    // If both data1 and result are valid, return the response
    if (result && productData.length) {
      return NextResponse.json({
        success: true,
        data: result,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (e) {
    console.error(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}