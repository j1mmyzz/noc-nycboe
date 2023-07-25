import { NextPage } from "next";
import Layout from "./components/layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Home">
        {/* Banner */}
        <div className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-[150px] text-center text-white font-bold">
          <div className="flex justify-center items-center px-5 text-[30px] md:text-5xl ">
            Welcome to the DIIT NOC Home Page
          </div>
        </div>
        {/* To tools page */}
        <div className="flex flex-col justify-center text-center text-3xl p-16 font-light">
          <p className="w-[225px] md:w-[500px] mx-auto">
            View all the tools that we use to manage our networks and to keep
            the schools running!
          </p>
          <Link href="/tools" className="mt-6">
            <button className="relative bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl py-1 px-2 rounded-md border-4 border-gray-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:underline">
              See Tools
            </button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row">
          {/*  Main content is */}
          <div className="bg-black text-white p-16 md:px-28">
            {/* Mision */}
            <div className="flex flex-col space-y-4 text-xl md:text-2xl">
              <p className="text-[30px]">Mission</p>
              <p>
                The mission of the DOE NOC is to implement a centralized and
                proactive strategy for network management. This strategy will
                benefit student achievement by providing a more robust and
                reliable network experience.
              </p>
              <p>
                The centralization of the technical reources and initiation of
                proactive procedures will allow the NOC to function from a more
                service oriented perspective when responding to the needs of the
                students.
              </p>
            </div>
            {/* Cards */}
          </div>
        </div>
        <div className="grid grid-cols-1 px-16 py-12 md:px-28 bg-slate-100 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Accountability</h3>
            <p className="text-gray-600">
              If we commit to do something, we do it. We are accountable and
              responsible to our schools.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Communication</h3>
            <p className="text-gray-600">
              We are open, trusting, and authentic with each other and our
              partners. We share information and best practices.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Diversity & Inclusion</h3>
            <p className="text-gray-600">
              Our people are our best assets. We collaborate accross all levels
              and respect diverse contributions.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Learning & Innovation</h3>
            <p className="text-gray-600">
              We are continuous learners. We review processes and research
              information to improve our practice.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Quality</h3>
            <p className="text-gray-600">
              We set clear expectations and goals with everything we do. We are
              positive, strategic, and focused on achieving excellence.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
