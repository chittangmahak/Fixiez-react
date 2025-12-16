import React from 'react';
import {
  ClockIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router';

export default function ListYourPropertyPage() {
  const navigate = useNavigate();

  const processSteps = [
    {
      icon: ClockIcon,
      title: 'Sign Up (3 Mins)',
      description:
        'Quickly register your shop location and basic service details. No lengthy verification forms required.',
    },
    {
      icon: BoltIcon,
      title: 'Get Verified (20 Mins)',
      description:
        'Our automated system verifies your mobile/shop details to ensure trust for customers.',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Receive First Lead',
      description:
        'Your profile goes live. Start getting notified about repair jobs in your locality immediately.',
    },
    {
      icon: MapPinIcon,
      title: 'Grow Your Locality',
      description:
        'We prioritize vendors near the customer, guaranteeing local business growth right in your neighborhood.',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* 1. Hero Section: Speed and Ease */}
      <section className='bg-gradient-to-r from-red-500 to-orange-500 py-24 text-white font-albert'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <h1 className='text-6xl font-extrabold tracking-tight mb-4'>
            Start Earning in{' '}
            <span className='text-yellow-300 block sm:inline'>30 Minutes.</span>
          </h1>
          <p className='text-xl font-light mb-8 max-w-3xl mx-auto opacity-90 font-inter'>
            List your mobile repair shop on Fixiez today. It’s the fastest,
            easiest way to fill your repair schedule and boost income.
          </p>

          <button
            onClick={() => navigate('/auth/register-vendor')}
            className='bg-white text-red-600 font-bold text-lg py-3 px-10 rounded-full shadow-lg 
                       hover:bg-gray-100 transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto font-inter cursor-pointer'
          >
            List My Shop Now
            <ArrowRightIcon className='w-5 h-5 ml-2' />
          </button>
        </div>
        {/*  */}
      </section>

      {/* 2. Simple Process Steps */}
      <section className='py-20 bg-white font-inter'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-4xl font-bold text-gray-900 mb-12 text-center font-albert'>
            The 4-Step Process to Getting Paid
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {processSteps.map((step, index) => (
              <div
                key={index}
                className='flex flex-col items-start p-6 bg-gray-50 rounded-xl shadow-md border-t-4 border-orange-500 hover:shadow-xl transition duration-300'
              >
                <step.icon className='w-10 h-10 text-orange-600 mb-4' />
                <h3 className='text-xl font-semibold text-gray-900 mb-2 font-albert'>
                  {step.title}
                </h3>
                <p className='text-gray-600 text-sm'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Focus on Zero-Hassle */}
      <section className='py-20 bg-gray-100 font-inter'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <h3 className='text-3xl font-bold text-gray-800 mb-4 font-albert'>
            Stop Waiting. Start Doing.
          </h3>
          <p className='text-lg text-gray-700 mb-8'>
            Fixiez handles all the marketing and customer validation. Your only
            job is to provide quality service.
          </p>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className='py-20 font-albert'>
        <div className='max-w-4xl mx-auto px-6 bg-orange-50 border-2 border-orange-200 rounded-xl p-10 text-center shadow-lg'>
          <h3 className='text-3xl font-bold text-orange-800 mb-4'>
            Ready for Instant Business?
          </h3>
          <p className='text-lg text-orange-700 mb-8 font-inter'>
            List your repair shop today and connect with customers in your
            locality within minutes.
          </p>
          <button
            onClick={() => navigate('/auth/register-vendor')}
            className='bg-orange-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-xl 
                       hover:bg-orange-700 transition duration-300 transform hover:scale-105 font-inter cursor-pointer'
          >
            Register and Go Live!
          </button>
        </div>
      </section>
    </div>
  );
}
