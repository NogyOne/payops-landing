export default function Footer() {
  return (
    <>
      <div className='overflow-hidden'>
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            fill: '#27314b',
            width: '124%',
            height: 172,
            transform: 'rotate(180deg) scaleX(-1)',
          }}
        >
          <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
        </svg>
      </div>
      <section className='bg-[#27314b] h-[15vh] w-full px-20 flex items-end justify-center'>
        <p className='pb-4'>Developed by German G.</p>
      </section>
    </>
  )
}
