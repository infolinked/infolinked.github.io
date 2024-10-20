import Container from "@/components/container";
import TopicDetail from "./TopicDetail";

export default function Page({ params }: { params: { topic: string } }) {
  return (
      <Container>
          <div className="flex justify-center mb-10">
              <h1 className="text-4xl font-extrabold text-center">{params?.topic.toUpperCase()}</h1>
          </div>
          <TopicDetail params={params}/>
      </Container>
  )
}

export async function generateStaticParams() {
  // Static topics
  const staticTopics = ['javascript', 'react', 'nextjs', 'mindmap', 'git'];
  return staticTopics.map((topic) => ({
    topic, // Maps to the `[topic]` dynamic route parameter
  }));


  // Fetch additional dynamic topics from an API
  const res = await fetch('https://your-api.com/topics');
  const dynamicTopics = await res.json();

  // Combine static and dynamic topics
  const allTopics = [...staticTopics, ...dynamicTopics];

  return allTopics.map((topic: string) => ({
    topic,
  }));
}
