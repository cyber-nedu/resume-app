import { ArrowLeft, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import Background from '../components/Background'

const NotFound = () => {
  return (

    
    <main className="not-found-page">
      <Background />
      <div className="not-found-container">
        <div className="not-found-card">
          <div className="not-found-number">
            <span>4</span>
            <div className="not-found-orb">0</div>
            <span>4</span>
          </div>

          <div className="not-found-content">
            <span className="not-found-label">PAGE NOT FOUND</span>

            <h1>
              Looks like you took
              <br />
              a wrong turn.
            </h1>

            <p>
              The page you're looking for doesn't exist or may have been
              moved. Let's get you back to somewhere useful.
            </p>

            <div className="not-found-actions">
              <Link to="/" className="not-found-primary">
                <Home size={18} />
                Back Home
              </Link>

              <button
                type="button"
                className="not-found-secondary"
                onClick={() => window.history.back()}
              >
                <ArrowLeft size={18} />
                Go Back
              </button>
            </div>
          </div>

          <div className="not-found-bottom">
            <span>ERROR_CODE</span>
            <strong>404</strong>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound