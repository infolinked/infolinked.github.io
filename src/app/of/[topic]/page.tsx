import TopicDetail from "./TopicDetail";

export default function Page({ params }: { params: { topic: string } }) {
  return (
      <div>
          <div className="flex justify-center mb-10">
              <h1 className="text-4xl font-extrabold text-center">{params?.topic.toUpperCase()}</h1>
          </div>
          <TopicDetail />
      </div>
  )
}


// Step 2: Define generateStaticParams
export function generateStaticParams() {
  // Define your static topics here (replace with your actual topics)
  const topics = ['javascript', 'react', 'nextjs']; // Example topics

  return topics.map((topic) => ({
    topic, // Maps to the `[topic]` dynamic route parameter
  }));
}