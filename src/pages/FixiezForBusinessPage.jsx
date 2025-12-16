import React from 'react';
import {
  CurrencyRupeeIcon,
  ChartBarIcon,
  TrophyIcon,
  ArrowRightIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router';

export default function FixiezForBusinessPage() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: UsersIcon,
      title: 'Tap into 500+ Verified Customers',
      description:
        'Join a network that trusts us. Gain immediate access to a massive, verified user base needing mobile repairs.',
    },
    {
      icon: ChartBarIcon,
      title: 'Consistent Revenue Growth',
      description:
        'Our smart algorithm matches high-value jobs directly to your shop, ensuring a predictable stream of income.',
    },
    {
      icon: TrophyIcon,
      title: 'Trusted Partner Status',
      description:
        'Get featured as a top-rated partner. Build your brand equity and stand out from local competition.',
    },
    {
      icon: CurrencyRupeeIcon,
      title: 'Lowest Partner Fees',
      description:
        'We focus on your profit. Benefit from highly competitive rates and maximize your margin on every repair.',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* 1. Hero Section: Partnership Focus */}
      <section className='bg-gradient-to-r from-teal-600 to-cyan-700 py-24 text-white font-albert'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <h1 className='text-6xl font-extrabold tracking-tight mb-4'>
            Scale Your Shop.{' '}
            <span className='text-yellow-300 block sm:inline'>
              Become a Fixiez Partner.
            </span>
          </h1>
          <p className='text-xl font-light mb-8 max-w-3xl mx-auto opacity-90 font-inter'>
            Fixiez for Business is designed for established repair shops looking
            to expand capacity and dominate their local market.
          </p>

          <button
            onClick={() => navigate('/auth/register-vendor')}
            className='bg-white text-teal-600 font-bold text-lg py-3 px-10 rounded-full shadow-lg 
                       hover:bg-gray-100 transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto font-inter cursor-pointer'
          >
            Join Our Business Network
            <ArrowRightIcon className='w-5 h-5 ml-2' />
          </button>
        </div>
        {/*  */}
      </section>

      {/* 2. Key Partnership Benefits */}
      <section className='py-20 bg-white font-inter'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-4xl font-bold text-gray-900 mb-12 text-center font-albert'>
            Why Successful Shops Choose Fixiez
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className='flex flex-col items-start p-6 bg-gray-50 rounded-xl shadow-md border-t-4 border-teal-500 hover:shadow-xl transition duration-300'
              >
                <benefit.icon className='w-10 h-10 text-teal-600 mb-4' />
                <h3 className='text-xl font-semibold text-gray-900 mb-2 font-albert'>
                  {benefit.title}
                </h3>
                <p className='text-gray-600 text-sm'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Social Proof/Testimonial Placeholder */}
      <section className='py-16 bg-gray-100 font-inter'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h3 className='text-2xl font-semibold text-gray-800 mb-6 font-albert'>
            Trusted by 500+ Shop Vendors and Technicians
          </h3>
          <blockquote className='italic text-lg text-gray-600 border-l-4 border-teal-500 pl-4 mx-auto'>
            "Since joining Fixiez, our monthly job volume has doubled. The
            quality of leads is excellent, and the platform is easy to use."
          </blockquote>
          <p className='mt-4 font-semibold text-gray-700'>
            - Ramesh K., Owner, QuickFix Mobiles, Pune
          </p>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className='py-20 font-albert'>
        <div className='max-w-4xl mx-auto px-6 bg-teal-50 border-2 border-teal-200 rounded-xl p-10 text-center shadow-lg'>
          <h3 className='text-3xl font-bold text-teal-800 mb-4'>
            Ready to Take Your Business to the Next Level?
          </h3>
          <p className='text-lg text-teal-700 mb-8 font-inter'>
            Partner with Fixiez and leverage our technology to handle customer
            acquisition while you focus on what you do best: repairs.
          </p>
          <button
            onClick={() => navigate('/auth/register-vendor')}
            className='bg-teal-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-xl 
                       hover:bg-teal-700 transition duration-300 transform hover:scale-105 font-inter cursor-pointer'
          >
            Apply for Partnership Now
          </button>
        </div>
      </section>
    </div>
  );
}
