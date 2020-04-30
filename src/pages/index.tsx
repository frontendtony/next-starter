import styled from 'styled-components';

function Home() {
  return (
    <StyledHomePage>
      <h1 className="text-4xl text-purple-600 text-center font-semibold mt-20 mb-4">
        Welcome to your app
      </h1>
      <p className="text-center text-gray-600 max-w-2xl">
        This starter exists to provide an easy way to bootstrap a Nextjs project with the following
        technologies configured out of the box
      </p>
      <div className="md:flex flex-col md:flex-row md:justify-center -mx-3 mt-16 w-full">
        <a
          href="https://www.tailwindcss.com"
          className="p-4 mb-6 md:mb-0 border-2 border-solid border-gray-600 mx-auto md:mx-3 w-11/12 md:w-64 block"
        >
          <h3 className="text-xl text-gray-900 mb-2">TailwindCSS</h3>
          <p className="text-sm text-gray-600">A utility-first CSS framework</p>
        </a>
        <a
          href="https://www.typescriptlang.org/"
          className="p-4 mb-6 md:mb-0 border-2 border-solid border-gray-600 mx-auto md:mx-3 w-11/12 md:w-64 block"
        >
          <h3 className="text-xl text-gray-900 mb-2">TypeScript</h3>
          <p className="text-sm text-gray-600">JavaScript that scales</p>
        </a>
        <a
          href="https://www.nextjs.org"
          className="p-4 border-2 border-solid border-gray-600 mx-auto md:mx-3 w-11/12 md:w-64 block"
        >
          <h3 className="text-xl text-gray-900 mb-2">Styled Components</h3>
          <p className="text-sm text-gray-600">CSS-in-JS library for React</p>
        </a>
      </div>
    </StyledHomePage>
  );
}

var StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export default Home;
