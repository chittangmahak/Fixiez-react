export default function Footer() {
  return (
    <footer className='bg-[#0F172A] text-white py-10 px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div>
          <h2 className='text-2xl font-semibold'>YourBrand</h2>
          <p className='text-sm mt-3 text-gray-300'>
            Building reliable, user-friendly and scalable web solutions.
          </p>
        </div>
        <div>
          <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
          <ul className='space-y-2 text-gray-300'>
            <li className='hover:text-white cursor-pointer'>Home</li>
            <li className='hover:text-white cursor-pointer'>About Us</li>
            <li className='hover:text-white cursor-pointer'>Services</li>
            <li className='hover:text-white cursor-pointer'>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-3'>Services</h3>
          <ul className='space-y-2 text-gray-300'>
            <li className='hover:text-white cursor-pointer'>Web Development</li>
            <li className='hover:text-white cursor-pointer'>UI/UX Design</li>
            <li className='hover:text-white cursor-pointer'>API Integration</li>
            <li className='hover:text-white cursor-pointer'>Cloud Hosting</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-3'>Contact</h3>
          <p className='text-gray-300'>Email: support@yourbrand.com</p>
          <p className='text-gray-300 mt-1'>Phone: +91 98765 43210</p>

          <div className='flex gap-4 mt-4'>
            <button className='p-2 bg-white/10 rounded-xl hover:bg-white/20'>
              <i className='fa-brands fa-facebook-f'></i>
            </button>
            <button className='p-2 bg-white/10 rounded-xl hover:bg-white/20'>
              <i className='fa-brands fa-instagram'></i>
            </button>
            <button className='p-2 bg-white/10 rounded-xl hover:bg-white/20'>
              <i className='fa-brands fa-linkedin-in'></i>
            </button>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm'>
        © {new Date().getFullYear()} Fixiez — All Rights Reserved.
      </div>
    </footer>
  );
}
