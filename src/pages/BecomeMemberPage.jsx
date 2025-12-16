import React from 'react';
import {
  SparklesIcon,
  UsersIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router';

export default function BecomeMemberPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: UsersIcon,
      title: 'Guaranteed Customer Flow',
      description:
        'Stop relying on walk-ins. Access a stream of qualified repair requests directly from customers in your area.',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Boost Visibility & Trust',
      description:
        'Feature your shop to thousands of users. Our verified badge builds trust and drives conversion.',
    },
    {
      icon: SparklesIcon,
      title: '10% Extra Booking Value',
      description:
        'Maximize your earnings. Our exclusive membership offers an extra 10% value on every booked service.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Zero Commission on Leads',
      description:
        'Keep more of what you earn. We focus on connecting you; you manage the transaction directly.',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* 1. Hero Section: Direct Appeal and CTA */}
      <section className='bg-gradient-to-r from-red-600 to-red-700 py-24 text-white font-primary'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <h1 className='text-6xl font-extrabold tracking-tight mb-4'>
            Grow Your Repair Business{' '}
            <span className='text-yellow-300 block sm:inline'>10X Faster.</span>
          </h1>
          <p className='text-xl font-light mb-8 max-w-3xl mx-auto opacity-90'>
            Join the Fixiez Vendor Network: Get exclusive leads, boost your
            revenue, and become the most trusted mobile repair shop in your
            city.
          </p>

          <button
            onClick={() => navigate('/auth/register-vendor')}
            className='bg-white text-red-600 font-bold text-lg py-3 px-10 rounded-full shadow-lg 
                       hover:bg-gray-100 transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto'
          >
            Register Your Business Today
            <ArrowRightIcon className='w-5 h-5 ml-2' />
          </button>
          <p className='mt-4 text-sm font-light opacity-80'>
            Registration takes less than 5 minutes.
          </p>
        </div>
        {/*  */}
      </section>

      {/* 2. Value Proposition (Why Join?) */}
      <section className='py-20 bg-white font-secondary'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-4xl font-bold text-gray-900 mb-12 text-center font-primary'>
            The Fixiez Advantage: More Customers, More Revenue
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='flex flex-col items-start p-6 bg-gray-50 rounded-xl shadow-md border-t-4 border-red-500 hover:shadow-xl transition duration-300'
              >
                <feature.icon className='w-10 h-10 text-red-600 mb-4' />
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 text-sm'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works Section (Simple Steps) */}
      <section className='py-20 bg-gray-100 font-secondary'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-4xl font-bold text-gray-900 mb-12 text-center font-primary'>
            Simple Steps to Start Growing
          </h2>

          <div className='flex flex-col md:flex-row justify-center gap-8'>
            <Step
              number='1'
              title='Register Your Shop'
              description='Fill out your business details and service catalogue.'
            />
            <ArrowRightIcon className='w-8 h-8 text-red-500 my-auto hidden md:block' />
            <Step
              number='2'
              title='Get Verified & Onboarded'
              description='Our team quickly verifies your details for trust.'
            />
            <ArrowRightIcon className='w-8 h-8 text-red-500 my-auto hidden md:block' />
            <Step
              number='3'
              title='Start Receiving Leads'
              description='Access customer requests and accept jobs immediately.'
            />
          </div>
        </div>
      </section>

      {/* 4. Final CTA Section (Growth Together) */}
      <section className='py-20 font-primary'>
        <div className='max-w-4xl mx-auto px-6 bg-red-50 border-2 border-red-200 rounded-xl p-10 text-center shadow-lg'>
          <h3 className='text-3xl font-bold text-red-800 mb-4'>
            Ready to Partner and Grow Together?
          </h3>
          <p className='text-lg text-red-700 mb-8'>
            Your next customer is waiting. Join hundreds of successful repair
            vendors expanding their reach with Fixiez.
          </p>
          <button
            onClick={() => navigate('/auth/register-vendor')}
            className='bg-red-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-xl 
                       hover:bg-red-700 transition duration-300 transform hover:scale-105'
          >
            Secure My Spot on Fixiez
          </button>
        </div>
      </section>
    </div>
  );
}

// Helper component for the "How It Works" steps
const Step = ({ number, title, description }) => (
  <div className='flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md'>
    <div className='w-12 h-12 flex items-center justify-center bg-red-600 rounded-full text-white font-extrabold text-2xl mb-4'>
      {number}
    </div>
    <h4 className='text-xl font-semibold text-gray-900 mb-2'>{title}</h4>
    <p className='text-gray-600 text-sm max-w-[200px]'>{description}</p>
  </div>
);
