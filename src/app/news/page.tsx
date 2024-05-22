import NewsList from '@/components/news-list';
import news from '@/consts/news';

const newsPage: React.FC = () => {

  return (
    <section className='flex flex-col items-center'>
      <div className='w-9/12 max-w-screen-xl mt-10 mb-20'>
        <h4 className='text-center mt-10 mb-8'>Welcome to our News Page!</h4>
        <p className='font-light text-xl text-center'>Discover the latest and most compelling stories in the world of travel, adventure, and exploration. From eco-friendly trends to adrenaline-pumping adventures, our curated selection of news articles will keep you informed and inspired.</p>
        <div className='grid gap-10 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between mt-10'>
          <NewsList news={news} />
        </div>
      </div>
    </section>
  );
};

export default newsPage;