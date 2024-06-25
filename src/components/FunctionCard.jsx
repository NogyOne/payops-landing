// eslint-disable-next-line react/prop-types, no-unused-vars
export default function FunctionCard({ title, icon, text }) {
  return (
    <div className='w-1/3 h-auto p-9  bg-[#27314b] rounded-3xl flex flex-col items-center justify-center'>
      {icon}
      <h3 className='mb-6 text-lg font-semibold text-center'>{title}</h3>
      <p className='text-center'>{text}</p>
    </div>
  )
}
