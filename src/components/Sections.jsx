import useIntersectionObserver from '../hooks/useSectionAnimate'

// eslint-disable-next-line react/prop-types
const Section = ({ children, animationClass }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${isIntersecting ? animationClass : 'opacity-0'}`}
    >
      {children}
    </div>
  )
}

export default Section
