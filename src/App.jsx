import './App.css'

export default function App() {
  return (
    <main>
      <section className='min-h-screen'>
        <section className='flex justify-center sm:flex-col md:flex-col lg:flex-row'>
          <div className="w-1/3 p-6 md:w-2/3 sm:w-auto bg-fuchsia-600 h-96 m-36">
          </div>
          <div className="w-1/3 p-6 bg-red-600 md:w-2/3 sm:w-auto h-96 m-36">
          </div>
        </section>
        <section className='flex flex-col justify-center md:p-3 sm:m-16 lg:items-center'>
          <h1 className='py-6 text-6xl md:text-left lg:text-center'>lorem ipsum</h1>
          <h2 className='py-6 text-3xl md:text-left lg:text-center'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
          <h2 className='py-6 text-3xl md:text-left lg:text-center'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
        </section>
        <section className='flex lg:p-6 md:p-3 lg:m-36 md:m-18'>
          <div className='min-w-full'>
            <h1 className='text-left text-9xl my-36'>lorem ipsum</h1>
            <div class="grid grid-rows-2 grid-cols-2 gap-4">
              <div className='bg-gray-600 h-96'>01</div>
              <div className='bg-gray-600 h-96'>02</div>
              <div className='bg-gray-600 h-96'>03</div>
              <div className='bg-gray-600 h-96'>04</div>
            </div>
            <h1 className='text-6xl text-right my-36'>Ut enim ad </h1>
          </div>
        </section>
        <section className='flex lg:p-6 md:p-3 lg:m-36 md:m-18'>
          <div className='min-w-full'>
            <h1 className='text-left text-9xl my-36'>lorem ipsum</h1>
            <div class="grid grid-rows-2 grid-cols-2 gap-4">
              <div className='bg-gray-600 h-96'>01</div>
              <div className='bg-gray-600 h-96'>02</div>
              <div className='bg-gray-600 h-96'>03</div>
              <div className='bg-gray-600 h-96'>04</div>
            </div>
            <h1 className='text-6xl text-right my-36'>Ut enim ad </h1>
          </div>
        </section>
        <section className='flex md:p-3 lg:p-6 lg:m-36'>
          <div className='flex flex-col min-w-full'>
            <h1 className='mb-32 text-left sm:text-3xl lg:text-6xl'>aliquip ex ea commodo</h1>
            <h1 className='mb-32 text-left sm:text-3xl lg:text-6xl'>aliquip ex ea commodo</h1>
            <h1 className='mb-32 text-left sm:text-3xl lg:text-6xl'>aliquip ex ea commodo</h1>
            <h1 className='mb-32 text-left sm:text-3xl lg:text-6xl'>aliquip ex ea commodo</h1>
          </div>
        </section>
        <section className='flex md:p-3 md:m-18 lg:p-6 lg:m-36'>
          <div className='flex min-w-full'>
            <div className='flex min-w-full sm:flex-col lg:flex-row lg:justify-between'>
              <div className="w-4/5 h-12 mt-3 bg-red-600 lg:mx-6" />
              <h1 className='mb-32 text-left lg:text-6xl sm:text-3xl'>aliquip ex</h1>
            </div>
          </div>
        </section>
        <section className='flex md:p-3 lg:m-18 lg:p-6 lg:m-36'>
          <div className='flex min-w-full lg:flex-row sm:flex-col'>
            <h1 className='mb-32 sm:text-4xl lg:text-6xl sm:text-left lg:text-center'>sed do eiusmod tempor</h1>
            <h1 className='mb-32 sm:text-4xl lg:text-6xl sm:text-left lg:text-center'>sed do eiusmod tempor</h1>
            <h1 className='mb-32 sm:text-4xl lg:text-6xl sm:text-left lg:text-center'>aliquip ex ea commodo</h1>
          </div>
        </section>
      </section>
    </main>
  )
}
