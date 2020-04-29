function Home() {
  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-4xl text-purple-600 text-center font-semibold mt-20 mb-4">
        Welcome to your app
      </h1>
      <p className="text-center text-gray-600 max-w-2xl">
        This starter exists to give provide an easy way to bootstrap a Nextjs project with the
        following technologies configured out of the box
      </p>
      <div className="md:flex flex-col md:flex-row md:justify-center -mx-3 mt-16 w-fdivl">
        <a
          href="https://www.tailwindcss.com"
          className="p-4 mb-6 md:mb-0 border-2 border-solid border-gray-600 mx-auto md:mx-3 w-11/12 md:w-64"
        >
          <h3 className="text-xl text-gray-900 mb-2">TailwindCSS</h3>
          <p className="text-sm text-gray-600">A utility-first CSS framework</p>
        </a>
        <a
          href="https://www.typescriptlang.org/"
          className="p-4 mb-6 md:mb-0 border-2 border-solid border-gray-600 mx-auto md:mx-3 w-11/12 md:w-64"
        >
          <h3 className="text-xl text-gray-900 mb-2">TypeScript</h3>
          <p className="text-sm text-gray-600">JavaScript that scales</p>
        </a>
        <a
          href="https://www.nextjs.org"
          className="p-4 border-2 border-solid border-gray-600 mx-auto md:mx-3 w-11/12 md:w-64"
        >
          <h3 className="text-xl text-gray-900 mb-2">Nextjs</h3>
          <p className="text-sm text-gray-600">React framework for production</p>
        </a>
      </div>
    </div>
  );
}

export default Home;
