

const GptToggle = ({handleGptToggle}) => {
  
  return (
    <button onClick={handleGptToggle} className='font-stretch-125% hidden sm:block  font-extralight cursor-pointer hover:bg-gradient-to-r hover:from-fuchsia-600/70 hover:to-blue-600/60 text-center p-2 rounded-lg bg-gradient-to-l from-fuchsia-600 to-blue-600'>
        Gpt Search
    </button>
  )
}

export default GptToggle
