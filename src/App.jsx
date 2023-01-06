import './App.css'

export default function App() {
  return (
    <main>
      <section className='min-h-screen'>
        <section className='flex justify-center'>
          <div className="bg-fuchsia-600 w-1/3 h-96 p-6 m-36 ">
          </div>
          <div className="bg-red-600 w-2/3 h-96 p-6 m-36 ">
          </div>
        </section>
        <section className='flex flex-col justify-center items-center'>
          <h1 className='text-6xl text-center'>lorem ipsum</h1>
          <h2 className='text-3xl text-center'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
          <h2 className='text-3xl text-center'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
        </section>
        <section className='flex p-6 m-36'>
          <div className='min-w-full'>
            <h1 className='text-9xl text-left my-36'>lorem ipsum</h1>
            <div class="grid grid-rows-2 grid-cols-2 gap-4">
              <div className='bg-gray-600 h-96'>01</div>
              <div className='bg-gray-600 h-96'>02</div>
              <div className='bg-gray-600 h-96'>03</div>
              <div className='bg-gray-600 h-96'>04</div>
            </div>
            <h1 className='text-6xl text-right my-36'>Ut enim ad </h1>
          </div>
        </section>
        <section className='flex p-6 m-36'>
          <div className='min-w-full'>
            <h1 className='text-9xl text-left my-36'>quis nostrud exercitation</h1>
            <div class="grid grid-rows-2 grid-cols-2 gap-4">
              <div className='bg-gray-600 h-96'>01</div>
              <div className='bg-gray-600 h-96'>02</div>
              <div className='bg-gray-600 h-96'>03</div>
              <div className='bg-gray-600 h-96'>04</div>
            </div>
            <h1 className='text-6xl text-right my-36'>Ut enim ad </h1>
          </div>
        </section>
        <section className='flex p-6 m-36'>
          <div className='min-w-full flex flex-col'>
            <h1 className='text-6xl text-left mb-32'>aliquip ex ea commodo</h1>
            <h1 className='text-6xl text-left mb-32'>aliquip ex ea commodo</h1>
            <h1 className='text-6xl text-left mb-32'>aliquip ex ea commodo</h1>
            <h1 className='text-6xl text-left mb-32'>aliquip ex ea commodo</h1>
          </div>
        </section>
        <section className='flex p-6 m-36'>
          <div className='min-w-full flex flex-row'>
            <div className='flex min-w-full justify-between'>
              <div className="bg-red-600 w-4/5 h-12 mt-3" />
              <h1 className='text-6xl text-left mb-32'>aliquip ex</h1>
            </div>
          </div>
        </section>
        <section className='flex p-6 m-36'>
          <div className='min-w-full flex justify-between'>
            <h1 className='text-6xl text-center mb-32'>sed do eiusmod tempor</h1>
            <h1 className='text-6xl text-center mb-32'>sed do eiusmod tempor</h1>
            <h1 className='text-6xl text-center mb-32'>aliquip ex ea commodo</h1>
          </div>
        </section>
      </section>
    </main>
  )
}
