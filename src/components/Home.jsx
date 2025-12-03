import NotifyMe from './NotifyMe';
import Location from '../assets/locationImage.avif';

//  bg-[#41303E]

const Home = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center '>
      <div className='w-[80%] py-10'>
        <NotifyMe />
      </div>

      <div className='bg-[#F3F5F7] w-full flex justify-center items-center'>
        <div className='flex justify-center items-center w-1/2'>
          <img src={Location} alt='location image' />
        </div>

        <div className='w-1/2 flex flex-col justify-center items-center'>
          <p className='text-2xl font-medium font-inter text-gray-700 '>
            More Destinations. More Ease. More Affordable.
          </p>

          <div className='flex justify-center items-center gap-x-10'>
            <div className='flex flex-col justify-center items-center'>
              <span className='text-xl font-bold font-roboto'>50 +</span>
              <span>outlet</span>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <span className='text-xl font-bold font-roboto'>12+</span>
              <span className='text-lg font-semibold font-inter'>city</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
