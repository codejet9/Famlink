import Link from "next/link"


export default function SignIn() {
  return (
    <section className="bg-white dark:bg-gray-900 h-[100vh] flex justify-center items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          FamLink <br></br>
          Let's redefine our social interactions
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
        FamLink is an innovative social media platform that redefines the way we connect and interact online. Unlike traditional social networks, FamLink focuses on building and strengthening relationships through family connections and meaningful bonds.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link href="/api/auth/signin" className="inline-flex w-1/2 justify-center items-center py-2 px-3 text-lg font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            <button type="submit" className="w-full text-white font-medium text-center">Sign in</button>
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  )
}