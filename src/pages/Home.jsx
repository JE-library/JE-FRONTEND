import React from 'react'
import PagesLayout from '../Layouts/PagesLayout' 


function Home () {
  return ( <PagesLayout>
    <section id='hero' className='bg-cover bg-center h-64 relative' >
  <div className='bg-violet-600 bg-opacity-50 h-full flex items-center justify-center text-white'>
    <h2 className='text-3xl font-semibold'>Discover delicious recipe books to inspire your next meal.</h2>
  </div>

</section>

<div className='text-center mt-6'>
  <a href='/books' className='bg-emerald-500 text-white px-6 py-2 rounded hover:bg-cyan-500 transition'>
    View Recipe Books
  </a>
</div>



    
  </PagesLayout>
  );
};

export default Home;