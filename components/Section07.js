import Link from 'next/link'
import Image from 'next/image'

export default function Section07() {
  return (
    
    <>
    <div className='flex flex-col mx-auto mt-8 mb-8'>

        <div className='mx-8 mt-6 mb-8 text-center'>
            
            <h2 className='text-2xl font-bold'>Formação de professores R2</h2>    
            <p>Curso de formação para não Licenciados.</p>        
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 mx-8 md:mx-16 mt-6 gap-4'>
            
            <div className='flex flex-col rounded-md shadow-lg justify-between'>
                <Image
                    width={580}
                    height={330}
                    alt='Imagem Hero'                    
                    src="/home/curso-de-biologia.jpg"
                    className='rounded-t-md '
                /> 
                <h2 className='text-md text-gray-400 font-semibold mt-5 mb-3 px-5'>BIOLOGIA A DISTÂNCIA</h2>
                <p className='px-5 text-gray-900 font-bold pb-5'>Form. Ped. Grad. Não<br/>Licenciados – Biologia</p>

            </div>
            
            <div className='flex flex-col rounded-md shadow-lg justify-between'>
                <Image
                    width={580}
                    height={330}
                    alt='Imagem Hero'                    
                    src="/home/fisica-distancia.jpg"
                    className='rounded-t-md '
                /> 
                <h2 className='text-md text-gray-400 font-semibold mt-5 mb-3 px-5'>FÍSICA A DISTÂNCIA</h2>
                <p className='px-5 text-gray-900 font-bold pb-5'>Form. Ped. Grad. Não<br/>Licenciados – Física</p>

            </div>
            
            <div className='flex flex-col rounded-md shadow-lg justify-between'>
                <Image
                    width={580}
                    height={330}
                    alt='Imagem Hero'                    
                    src="/home/curso-de-portugues.jpg"
                    className='rounded-t-md '
                /> 
                <h2 className='text-md text-gray-400 font-semibold mt-5 mb-3 px-5'>PORTUGUÊS A DISTÂNCIA</h2>
                <p className='px-5 text-gray-900 font-bold pb-5'>Form. Ped. Grad. Não<br/>Licenciados – Português</p>

            </div>
            
            <div className='flex flex-col rounded-md shadow-lg justify-between'>
                <Image
                    width={580}
                    height={330}
                    alt='Imagem Hero'                    
                    src="/home/curso-de-geografia.jpg"
                    className='rounded-t-md '
                /> 
                <h2 className='text-md text-gray-400 font-semibold mt-5 mb-3 px-5'>GEOGRAFIA</h2>
                <p className='px-5 text-gray-900 font-bold pb-5'>Form. Ped. Grad. Não<br/>Licenciados - Geografia</p>

            </div>

        </div>

    </div>
    <div className='flex flex-col mx-auto mt-12 mb-8 w-full'>

        <div className='flex md:w-64 mx-auto'>
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