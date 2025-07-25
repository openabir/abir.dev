import { Doock } from "@/components/Doock";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen dark:bg-gray-900">
        <div className="text-center">
          <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-9xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">Hello World</h1>
          <div>
            
            <br />
            <br />
            <br />
          </div>
          <h2 className="text-4xl font-semibold mb-2">I&apos;m <span className="text-transparent text-stroke">ABIR BISWAS.</span></h2>
          <p className="text-2xl mb-4">a Web Developer</p>
          <p className="text-lg text-gray-600 mb-6">about me.</p>
          {/* <div className="flex justify-center space-x-4">
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Download Resume</a>
            <a href="#" className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300">Jump to Projects</a>
          </div> */}
          <br />
          <br />
          <br />
          <div className="flex justify-center fixed bottom-10 left-0 right-0">
            <Doock />
          </div>
        </div>
      </div>
    </>
  );
}
