
import Link from 'next/link'
import Image from 'next/image'

export default function Section08() {
  return (

    <div className='mx-8 md:mx-16'>

        <div className='grid grid-cols-1 md:grid-cols-10 bg-blue-50 rounded-md'>        
            <div className=' lg:flex lg:items-center p-4 lg:p-6 xl:p-8 md:col-span-4'>
                <div className='flex-grow p-8'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-6'>Graduação A Distância Na Cruzeiro Do Sul Virtual</h2>
                    
                    <div className='flex'>

                        <div className='mr-2'>
                            <Link href='#'>
                                <a className='text-2xl flex justify-center items-center rounded-md bg-blue-500 text-gray-100 px-6 py-2 hover:bg-blue-800 hover:text-gray-50'>
                                <p className='text-sm font-bold text-gray-50'>Começe sua graduação hoje</p> 
                                </a>
                            </Link>
                        </div>

                    </div> 
                    
                </div>
            </div>

            <div className='lg:flex md:col-span-6'>
                <div className='flex flex-col md:pt-16 pt-2 justify-items-end md:mx-auto'>
                    <Image
                        width={800}
                        height={411}
                        alt='Imagem Hero'                    
                        src="/home/home-cruzeiro.jpg"
                        className='rounded-br-md md:rounded-bl-none rounded-bl-md'
                    />        
                
                </div>
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between mt-16 mb-16'>

    
            <div className='lg:flex lg:items-center px-4 xl:px-8'>

                <h2 className='text-2xl'>Começe a estudar hoje mesmo e tenha bolsa até 60%</h2>

                

            </div>

            <div className='lg:flex lg:justify-center items-center my-auto px-8 md:px-16 mt-8'>

                <div className='mr-2'>
                    <Link href='#'>
                        <a className='text-2xl flex justify-center items-center rounded-md bg-blue-500 text-gray-100 px-6 py-2 hover:bg-blue-800 hover:text-gray-50'>
                        <p className='text-sm font-bold text-gray-50'>Matricule-se</p> 
                        </a>
                    </Link>
                </div>

            </div>


    </div>

    </div>
  )
}