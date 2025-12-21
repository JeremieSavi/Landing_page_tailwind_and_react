import './App.css'

function App() {

  return (
    <>

    {/* Header */}
    <main>

      <header className='flex justify-between items-center px-10 py-5 '>
        {/* Menu */}
        <nav>
          <ul className='flex gap-6'>
            <li href="">BUSY Bar</li>
            <li className='underline'><a href="">Boutique</a></li>
            <li className='underline'><a href="">Téléchargements</a></li>
            <li className='underline'><a href="">Blog</a></li>
          </ul>
        </nav> 

        <div>
          {/* <h1 className='font-bold text-xl border px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white duration-300'>BUSY APP</h1> */}
          <img src="./public/badge.svg" className='w-[250px]' alt="" />
        </div>
      </header>
    
      <section className='flex flex-col justify-center mx-auto items-center h-screen max-w-[550px]'>
          <p className='text-xl'>
            <span className='font-bold'> BUSY BAR</span> est un dispositif multi-outil de product avec un écran LED pixelé .Miniteur de concentration avec fonction de blocage des distrations sur votre téléphone et PC .Entièrement personnalisable, open-source et prêt pour la maison connectée.
          </p>
          <button className='text-xl bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-black duration-500 cursor-pointer mt-10 '>Acheter</button>
      </section>
    </main>
    </>
  )
}

export default App;
