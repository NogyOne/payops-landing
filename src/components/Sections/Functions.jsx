import { Icons } from '../Icons'
import FunctionCard from '../FunctionCard'
import Section from '../Sections'

export default function Functions() {
  const cardsInfo = [
    {
      title: 'Customers',
      icon: <Icons.UsersRound />,
      text: 'Our subscription system allows you to easily manage your customers. You can add new customers, update their information, view details about each customer, and delete customers who are no longer active. This ensures that you have a complete and up-to-date database of all your subscribers.',
    },
    {
      title: 'Emails',
      icon: <Icons.Mail />,
      text: 'Stay connected with your customers through our email notification feature. The system automatically sends out emails for new subscriptions, renewals, and cancellations. This keeps your customers informed about their subscription status without any extra effort on your part.',
    },
    {
      title: 'Advertisement',
      icon: <Icons.Megaphone />,
      text: 'Promote your business directly to your customers with our advertisement feature. You can create and send advertisements about special offers, new products, or any important updates. This helps you keep your customers engaged and informed about everything happening in your business.',
    },
  ]

  return (
    <Section animationClass={'animate-fade-down animate-delay-[200ms]'}>
      <section
        className='mt-28 max-w-[1400px] mx-auto h-[70vh] overflow-hidden'
        id='functions'
      >
        <div className='text-center'>
          <h3 className='font-bold'>Functions</h3>
          <h2 className='w-full mt-2 text-4xl font-bold'>
            What can PayOps do?
          </h2>
        </div>
        <article className='flex items-center justify-center gap-10 mt-24'>
          {cardsInfo.map((card, index) => (
            <FunctionCard key={index} {...card} />
          ))}
        </article>
      </section>
    </Section>
  )
}
