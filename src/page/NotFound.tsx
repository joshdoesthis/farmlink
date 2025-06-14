import { Link } from "react-router-dom"

const Component = () => {
  return (
    <main>
      <div className="mr-[env(safe-area-inset-right)] ml-[env(safe-area-inset-left)] flex-1">
        <div className="w-full max-w-sm items-center space-y-6 place-self-center p-6 text-center md:py-18">
          <span className="material-symbol text-4xl">unknown_document</span>
          <p>The page you&apos;re looking for doesn&apos;t exist.</p>
          <p>
            <Link className="inline-flex items-center gap-x-1" to="/">
              <span className="material-symbol">arrow_back</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Component
