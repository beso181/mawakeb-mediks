import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mawakeb Mediks — Home",
  description: "A student-led medical club fostering research, service, and health literacy at Al Mawakeb School.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-blue-900">The Mawakeb Mediks</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-blue-900 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-900">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-900">
                Research Hub
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-900">
                Events & Calendar
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-900">
                Blog
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-900">
                Medical Resources
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-900">
                Join Us
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Student-led • Science-driven
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Where curiosity meets care.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are The Mawakeb Mediks — a high school medical club advancing health literacy, research, and service
                across our community.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                  Join the club
                </button>
                <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Explore research
                </button>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">40+</div>
                  <div className="text-sm text-gray-600">Active members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">12</div>
                  <div className="text-sm text-gray-600">Research projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">8</div>
                  <div className="text-sm text-gray-600">Annual events</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">3</div>
                  <div className="text-sm text-gray-600">Community drives</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-900 rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-blue-900 font-semibold">The Mawakeb Mediks</div>
                  <div className="text-sm text-blue-700">Medical Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600">
                Cultivate future-ready healthcare leaders through research, outreach, and skill-building.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What we do</h3>
              <p className="text-gray-600">
                Run workshops, publish student articles, and lead health campaigns on campus and beyond.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get involved</h3>
              <p className="text-gray-600">
                No experience required. Curiosity, commitment, and teamwork are all you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 bg-blue-900 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">M</span>
                </div>
                <span className="font-bold text-gray-900">The Mawakeb Mediks</span>
              </div>
              <p className="text-gray-600">
                A student-led medical club fostering research, service, and health literacy.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-900">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-900">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">School</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-900">
                    Al Mawakeb School
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-900">
                    Counseling & Activities
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8">
            <p className="text-gray-500 text-center">
              © {new Date().getFullYear()} The Mawakeb Mediks • Al Mawakeb School
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
