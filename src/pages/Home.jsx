import StaticSlider from '../components/StaticSlider';
import TopRatedMovies from '../components/TopRatedMovies';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
  const loadedTopMovies = useLoaderData();
  // console.log(loadedTopMovies);
  return (
    <div>
      <section className="mb-6 lg:mb-12">
        <StaticSlider></StaticSlider>
      </section>
      <section>
        <TopRatedMovies loadedTopMovies={loadedTopMovies}></TopRatedMovies>
      </section>
    </div>
  );
};

export default Home;
