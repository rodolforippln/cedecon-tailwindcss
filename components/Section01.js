
export default function Section01() {
    const styling = {
        backgroundImage: "url('/home/abstract-shapes-19.svg')",
        backgroundRepeat: 'no-repeat', 
        height:"100%",
        height: '100%',
        backgroundPosition: 'center center', 
      }
  return (
    <section className='flex flex-col justify-center items-center py-8 sm:py-24  px-8 sm:mx-36 md:24' style={styling}>

        <div className='md:w-3/4 lg:w-3/5'>
            <h2 className='text-3xl font-bold mb-6 text-center'>Estude na Cruzeiro do Sul Virtual desde sua casa</h2>
            <p className='text-center'>Graduação, Segunda Graduação 2.0, Formação Pedagógica, MBA, Especialização, Cursos Livres, Técnicos, de Idiomas e Preparatórios em diversas áreas do conhecimento.</p>

        </div>      
    </section>


  )
}

