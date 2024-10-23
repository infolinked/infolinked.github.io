import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Extract the search term from the query string
    // const { searchParams } = new URL(request.url);
    // const searchTerm = searchParams.get("of") || ""; 

    const response = await fetch('https://raw.githubusercontent.com/aungthuoo/apis/main/mindmaps/index.json'); 
    
    // Check if responses are ok before proceeding
    if (!response.ok ) {
      throw new Error("Failed to fetch one or more APIs");
    }

    // Explicitly type the expected data structure (adjust types based on actual response)
    const result = await response.json();

    // If both data1 and result are valid, return the response
    if (result && result.length) {
      // const filteredMindmaps = result.filter((mindmap) =>
      //   mindmap.title.toLowerCase().includes(searchTerm.toLowerCase())
      // );

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