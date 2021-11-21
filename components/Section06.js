import Link from 'next/link'
import Image from 'next/image'

export default function Section06() {
  return (
    
    <>
    <div className='flex flex-col mx-auto mt-8 mb-8'>

        <div className='mx-8 mt-6 mb-8 text-center'>
            <p>UNIVERSIDADE CRUZEIRO DO SUL VIRTUAL</p>
            <h2 className='text-2xl font-bold'>Graduação a Distância</h2>            
        </div>

        <div className='grid grid-cols-1 md:grid-cols-10 mx-8 md:mx-16 mt-6 gap-8'>
            
            <div className='flex flex-col rounded-md shadow-lg justify-between md:col-span-4 transform hover:scale-100 duration-200 hover:-translate-y-1 cursor-pointer'>
                <Image
                    width={600}
                    height={337.3}
                    alt='Imagem Hero'                    
                    src="/home/abstract-shapes-13.svg"
                    className='rounded-t-md '
                /> 
                <h2 className='text-xl font-semibold mt-6 mb-3 px-5'>Administração</h2>
                <p className='px-5 text-gray-500'>Ter senso de liderança, manter o seu espaço pessoal sempre organizado e ser acionado pelos amigos para planejar um trabalho ou uma festa são fortes indícios de que você pode ser um bom administrador e o curso Administração EAD é o você procura.</p>



                <div className='mt-6 pb-5 ml-6'>
                    <Link href='#'>
                        <a className='hover:text-blue-600 font-medium flex items-center py-2 '>
                                Conheça o curso
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5" 
                                viewBox="0 0 20 20" 
                                fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </Link>

                </div>



            </div>

            <div className='flex flex-col rounded-md shadow-lg justify-between md:col-span-3 transform hover:scale-100 duration-200 hover:-translate-y-1 cursor-pointer'>
                <Image
                    width={600}
                    height={337.5}
                    alt='Imagem Hero'                    
                    src="/home/abstract-shapes-14.svg"
                    className='rounded-t-md'
                /> 
                <h2 className='text-xl font-semibold mt-6 mb-3 px-5'>Ciência da Computação</h2>
                <p className='px-5 text-gray-500'>As pessoas, em sua maioria, só se veem como consumidoras da tecnologia. Sabem utilizar as redes sociais com desenvoltura, compram e vendem pela internet e têm o smartphone como extensão de suas mãos e mentes.</p>
                
                
                
                
                <div className='mt-6 pb-5 ml-6'>
                    <Link href='#'>
                        <a className='hover:text-blue-600 font-medium flex items-center py-2 '>
                                Conheça o curso
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5" 
                                viewBox="0 0 20 20" 
                                fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </Link>

                </div>



            </div>
            
            <div className='flex flex-col rounded-md shadow-lg justify-between md:col-span-3 transform hover:scale-100 duration-200 hover:-translate-y-1 cursor-pointer'>
                <div>
                <Image
                    width={600}
                    height={337.5}
                    alt='Imagem Hero'                    
                    src="/home/abstract-shapes-15.svg"
                    className='rounded-t-md'
                /> 
                <h2 className='text-xl font-semibold mt-6 mb-3 px-5'>Ciências Biológicas</h2>
                <p className='px-5 text-gray-500'>Na sua infância, você observava o trabalho de formigas, assustava a lagartixa para vê-la perder a cauda, aluno de biologia, vai estudar a vida existente no planeta, da mais simples à mais complexa, só que sob rigor do olhar científico</p>
                </div>




                <div className='mt-6 pb-5 ml-6'>
                    <Link href='#'>
                        <a className='hover:text-blue-600 font-medium flex items-center py-2 '>
                                Conheça o curso
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5" 
                                viewBox="0 0 20 20" 
                                fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </Link>

                </div>



            </div>

        </div>

    </div>
    <div className='flex flex-col mx-auto mt-12 mb-8 w-full'>

        <div className='flex md:w-64 mx-auto transform hover:scale-100 duration-200 hover:-translate-y-1 cursor-pointer'>
            <Link href='#'>
                <a className='text-2xl flex justify-center items-center rounded-full border border-solid border-gray-100 text-gray-900 px-4 py-2 hover:text-blue-600'>
                <p className='text-sm font-bold hover:text-blue-600'>Conheça todos os cursos</p>
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6" fill="none" viewBox="0 0 24 24"    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
                </a>
            </Link>
        </div>

    </div>

    </>
  )
}