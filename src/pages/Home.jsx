import StaticSlider from '../components/StaticSlider';
import FeaturedMovies from '../components/FeaturedMovies';
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
        <FeaturedMovies loadedTopMovies={loadedTopMovies}></FeaturedMovies>
      </section>
    </div>
  );
};

export default Home;
