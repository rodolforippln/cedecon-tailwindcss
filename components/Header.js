
import Image from 'next/image'

function Header() {
  return (

<div className='flex bg-blue-50 justify-between'>
    
    <div className='lg:flex lg:items-center px-4 xl:px-8'>
        <Image

            width={200}
            height={75}
            alt='Rostro de um homem'                    
            src="/logo.svg"
            className=''
        /> 
        

    </div>

    <div className='lg:flex lg:justify-center items-center my-auto px-8 md:px-16'>

        <h2 className='text-2xl font-bold'>Menu</h2> TailwindCSS       

    </div>
</div>


  )
}

export default Header