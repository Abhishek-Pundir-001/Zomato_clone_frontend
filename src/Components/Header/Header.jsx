import './Header.css'
function Header() {
  return (
    <div className={`h-[34vw] header`}>
      <div className='flex flex-col items-start  gap-[1vw]  absolute bottom-[10%] left-[6vw] max-w-[51%]  header-contents'>
        <h2 className='font-medium text-white text-[4vw]'>Order your favourite food here.</h2>
        <hr className='h-0 w-full border text-white' />
        <p className='text-white text-[1vw]'>Choose from a diverse menu featuring a delectable array of dishes crafted with finest ingeidents and culinatry expertise .our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time</p>
        <button className='animate-bounce cursor-pointer border-none text-[#747474] font-medium bg-white text-lg rounded-[3rem] px-6 py-2 mt-1.5'>View Menu</button>
      </div>
    </div>
  )
}

export default Header