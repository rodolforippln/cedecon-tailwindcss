
import Link from 'next/link'
import Image from 'next/image'

export default function BannerHero() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>        
        <div className=' lg:flex lg:items-center p-4 lg:p-6 xl:p-8'>
            <div className='flex-grow p-8'>
                <h1 className='text-3xl sm:text-4xl font-bold mb-3'>Sua formação a distância</h1>
                <p className='mb-4'>Graduação, Segunda Graduação 2.0, Formação Pedagógica, MBA, Especialização, Cursos Livres, Técnicos, de Idiomas e Preparatórios em diversas áreas do conhecimento.</p>

                <div className='flex'>

                    <div className='mr-2'>
                        <Link href='#'>
                            <a className='text-2xl flex justify-center items-center rounded-md bg-blue-500 text-gray-100 px-6 py-2 hover:bg-blue-800 hover:text-gray-50'>
                            <p className='text-sm font-bold text-gray-50'>Ver Cursos</p> 
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href='#'>
                            <a className='text-2xl flex justify-center items-center rounded-md border border-solid border-gray-100 text-gray-900 px-4 py-2 hover:bg-blue-50 hover:text-blue-600'>
                            <p className='text-sm font-bold hover:text-blue-600'>Formas de Ingreso</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6" fill="none" viewBox="0 0 24 24"    stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            </a>
                        </Link>
                    </div>
                </div>                


                
            </div>
        </div>

        <div className='lg:flex lg:items-center'>
            <div className='flex flex-col py-8 sm:pl-8 sm:pr-16 justify-center md:mx-auto'>
                <Image
                    width={510}
                    height={340}
                    alt='Imagem Hero'                    
                    src="/hiker-man.svg"
                />        
            
            </div>
        </div>
    </div>
  )
}