import Section from '../Sections'

export default function Download() {
  return (
    <Section animationClass={'animate-fade-up animate-delay-[200ms]'}>
      <section className='mt-28 max-w-[1400px] mx-auto' id='download'>
        <div className='text-center'>
          <h3 className='w-full text-4xl font-bold'>Download Today</h3>
          <h2 className='mt-4 font-bold'>
            ...and take control of the subscriptions of your clients!
          </h2>
        </div>
        <article className='mx-auto mt-24 text-center '>
          <p>Clone the repository...</p>
          <div className='flex items-center justify-center gap-4 mt-6'>
            <a
              href='https://github.com/NogyOne/payops-front'
              className='flex items-center gap-2 bg-[#27314b] px-5 py-3 rounded-lg hover:drop-shadow-3xl transform duration-200 hover:bg-[#2b3f70]'
            >
              <img src='/github-icon.png' alt='github-icon' className='w-6' />{' '}
              Front repo
            </a>
            <a
              href='https://github.com/NogyOne/payops-back'
              className='flex items-center gap-2 bg-[#27314b] px-5 py-3 rounded-lg hover:drop-shadow-3xl transform duration-200 hover:bg-[#2b3f70]'
            >
              <img src='/github-icon.png' alt='github-icon' className='w-6' />{' '}
              Back repo
            </a>
          </div>
        </article>
      </section>
    </Section>
  )
}
