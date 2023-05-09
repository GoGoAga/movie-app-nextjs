import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import requests from "@/utils/requests";

export default function Home({results}) {
  return (
   <div>
    <Header />
    <Navbar />
    <Results results={results}/>
   </div>
  )
}

export async function getServerSideProps(contex) {
  const genre = contex.query.genre || "fetchTrending";
  const request = await fetch(`
  https://api.themoviedb.org/3${requests[genre].url}
  `).then(response => response.json());

  return {
    props: {
      results: request.results,
    },
  };
}