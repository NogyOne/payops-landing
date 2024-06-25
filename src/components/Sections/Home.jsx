import homeImage from '../../assets/home-image.png'
import loginImage from '../../assets/login-image.png'

export default function Home() {
  return (
    <>
      <section className='bg-[#27314b] h-[65vh] w-full px-20 flex items-center justify-center pt-48'>
        <div className='relative z-40'>
          <img src={homeImage} alt='home' className='animate-fade-up ' />
          <img
            src={loginImage}
            alt='login'
            className='absolute top-20 animate-fade-up animate-delay-1000 '
          />
        </div>
        <div className='w-full text-white animate-fade-down'>
          <h1 className='w-3/4 text-5xl font-bold text-wrap '>
            Take control of the subscriptions of your business
          </h1>
          <p className='mt-4'>
            Easily track and manage your customers subscriptions with our
            all-in-one solution.
          </p>
        </div>
      </section>
      <div className='overflow-hidden'>
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            fill: '#27314b',
            width: '124%',
            height: 305,
            transform: 'scaleX(-1)',
          }}
        >
          <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
        </svg>
      </div>
    </>
  )
}
