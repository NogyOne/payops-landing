import SubsImage from '../../assets/subscriptions-image.png'
import Section from '../Sections'

export default function About() {
  return (
    <Section animationClass={'animate-fade-left animate-delay-[200ms]'}>
      <section className='mt-10 max-w-[1400px] mx-auto h-[70vh]' id='about'>
        <div className='flex items-center justify-center'>
          <div>
            <h2 className='w-full text-4xl font-bold'>What is PayOps?...</h2>
            <p className='mt-4 text-xl text-pretty'>
              PayOps is an incredible app for the subscriptions management.{' '}
              <br />
              <br />
              Forget about check-in. You will not get worried about your clients
              do the famous check-in. With PayOps you can easily manage
              subscriptions of your clients on your business, is just simple
              like register your client.
            </p>
          </div>
          <img
            src={SubsImage}
            alt='subs-image'
            className='w-2/4 animate-fade-left'
          />
        </div>
      </section>
    </Section>
  )
}
