type Top = {
  title: string
  description: string
}

export default function Top(props: Top) {
  const { title, description } = props
  return (
    <div className=' bg-pink-500'>
      <div className=' text-white py-24'>
        <h2 className=' text-4xl'>{title}</h2>
        <h3 className=' text-base'>{description}</h3>
      </div>
    </div>
  )
}
