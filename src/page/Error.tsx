import { Link } from "react-router-dom"

const Component = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="w-full max-w-sm items-center space-y-6 place-self-center p-6 text-center md:py-18">
        <span className="material-symbol text-4xl">bug_report</span>
        <p>The application has encountered an error.</p>
        <p>
          <Link className="inline-flex items-center gap-x-1" to="/">
            <span className="material-symbol">arrow_back</span>
          </Link>
        </p>
      </div>
    </main>
  )
}

export default Component
