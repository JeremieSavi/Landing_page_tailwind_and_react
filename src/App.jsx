import './App.css'

function App() {

  return (
    <>
    {/* Vidéo */}
    <video src="./public/welcome.mp4" autoPlay loop muted className='absolute -z-10 object-cover w-full h-screen'></video>
    {/* Header */}
    <main className='mx-auto flex flex-col'>

      <header className='flex justify-between items-center px-20 py-5'>
        {/* Menu */}
        <nav className=''>
          <ul className='flex gap-6'>
            <li href="">BUSY Bar</li>
            <li className='underline'><a href="">Boutique</a></li>
            <li className='underline'><a href="">Téléchargements</a></li>
            <li className='underline'><a href="">Blog</a></li>
          </ul>
        </nav> 

        <div>
          {/* <h1 className='font-bold text-xl border px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white duration-300'>BUSY APP</h1> */}
          <a href="#">
            <img src="./public/badge.svg" className='w-48 grayscale-100 hover:grayscale-0 dura
          tion-500 hover:-translate-y-1 ' alt="" />
          </a>
        </div>
        
      </header>
    
      <section className='flex flex-col justify-center mx-auto items-center max-w-[400px] text-lg mt-40 mb-10'>
          <p className=''>
            <span class
            Name='font-bold'> BUSY BAR</span> est un dispositif multi-outil de product avec un écran LED pixelé .Miniteur de concentration avec fonction de blocage des distrations sur votre téléphone et PC .Entièrement personnalisable, open-source et prêt pour la maison connectée.
          </p>
          <button className='text-xl bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-black duration-500 cursor-pointer mt-10 '>Acheter</button>
      </section>
      {/* Section Fonctionnalités */}
      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-20 pb-10 w-[100vw] bg-[#F3F3F4] opacity-70'>
        {/* Fonctionnalité numéro un */}
        <div className='flex items-start gap-2'> 
          <img src="feature-one.svg" alt="icone" className='w-14' />
          <div>
            <h4 className='text-xl mb-2'>Outil de productivité</h4>
            <p className='text-sm'>Blocage des distractions ,message BUSY personnalisé,minuteur de concentration,syncronisation multiplateforme</p>
          </div>
        </div>
        {/* Fonctionnalité numéro deux */}
        <div className='flex items-start gap-2 '> 
          <img src="feature-two.svg" alt="icone" className='w-14'/>
          <div>
            <h4 className='text-xl mb-2'>Applications et intégration</h4>
            <p className='text-sm'>Bibliothèque d'applications, connexion à des logiciels tiers, intégrations avec les évènements de calendrier et les appels</p>
          </div>
        </div>
        {/* Fonctionnalité numéro trois*/}
        <div className='flex items-start gap-2 '> 
          <img src="feature-three.svg" alt="icone" className='w-14' />
          <div>
            <h4 className='text-xl mb-2'>Support maison connectée</h4>
            <p className='text-sm'>Connectez-vous à Google Home et Aplle Home via le protocole Matter</p>
          </div>
        </div>
        {/* Fonctionnalité numéro quatre */}
        <div className='flex items-start gap-2 '> 
          <img src="feature-four.svg" alt="icone" className='w-14'/>
          <div>
            <h4 className='text-xl mb-2'>Outil de productivité</h4>
            <p className='text-sm'>Blocage des distractions ,message BUSY personnalisé,minuteur de concentration,syncronisation multiplateforme</p>
          </div>
        </div>
        

      </section>
      <section className='grid justify-between gap-10 grid-cols-1 lg:grid-cols-2 w-full '>
        {/* Partie 1 */}
        
        <div className=' order-2 md:order-1 my-auto p-10 relative -top-25'>
          <div className='mb-10'>
            <h1 className='text-2xl'>Montrez que vous êtes occupé</h1>
            <p>Empêchez les autres d'interrompre votre concentration profonde .L'écran affiche que vous êtes occupé et quand vous serez à nouveau disponible .</p>
          </div>
          <div className='flex gap-10 mb-10'>
            <img className='w-30 object-contain ' src="demo-one.png" alt="" />
            <div>
              <h2 className='text-xl mb-4'>Activation instantanée</h2>
              <p className='text-sm'>Activez et désactivez le statut BUSY manuellement avec un large bouton .Fonctionne entièrement hors ligne , sans logiciel supplémentaire requis</p>
            </div>
          </div>
          <div className='flex gap-10 mb-10'>
            <img className='w-30 object-contain' src="demo-two.png" alt="" />
            <div>
              <h2 className='text-xl mb-4'>Activation instantanée</h2>
              <p className='text-sm'>Activez et désactivez le statut BUSY manuellement avec un large bouton .</p>
            </div>
          </div>
          
          {/* <span className='icon-[tabler--home] text-2xl text-black'></span> */}
        </div>
        <div className='order-1'>
          <video src="busy.mp4" className='w-full' autoPlay loop muted/>
        </div>
      </section>
    </main>
    </>
  );
}

export default App;
