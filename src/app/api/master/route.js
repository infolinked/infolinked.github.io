import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Make multiple API calls concurrently
    const [response1, response2] = await Promise.all([
      fetch('https://raw.githubusercontent.com/aungthuoo/apis/main/products/index.json'),
      fetch('https://raw.githubusercontent.com/aungthuoo/apis/main/blogs/index.json'),
    ]);

    // Check if responses are ok before proceeding
    if (!response1.ok || !response2.ok) {
      throw new Error("Failed to fetch one or more APIs");
    }

    // Explicitly type the expected data structure (adjust types based on actual response)
    const data1 = await response1.json();
    const data2 = await response2.json();

    // Return both datasets in a single response
    const result = { 
      "products" : data1, 
      "blogs" : data2 
    };

    // If both data1 and result are valid, return the response
    if (result && data1.length) {
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