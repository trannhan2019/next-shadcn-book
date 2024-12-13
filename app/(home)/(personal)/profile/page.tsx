export default function Profile() {
  return (
    <div className="w-full max-w-4xl rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-800">
      <div className="flex flex-col md:flex-row">
        <div className="mb-8 text-center md:mb-0 md:w-1/3">
          <img
            src="https://i.pravatar.cc/300"
            alt="Profile Picture"
            className="mx-auto mb-4 h-48 w-48 rounded-full border-4 border-indigo-800 transition-transform duration-300 hover:scale-105 dark:border-blue-900"
          />
          <h1 className="mb-2 text-2xl font-bold text-indigo-800 dark:text-white">
            John Doe
          </h1>
          <p className="text-gray-600 dark:text-gray-300">Software Developer</p>
          <button className="mt-4 rounded-lg bg-indigo-800 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-900">
            Edit Profile
          </button>
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="mb-4 text-xl font-semibold text-indigo-800 dark:text-white">
            About Me
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Passionate software developer with 5 years of experience in web
            technologies.
          </p>
          <h2 className="mb-4 text-xl font-semibold text-indigo-800 dark:text-white">
            Skills
          </h2>
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
              JavaScript
            </span>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
              React
            </span>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
              Node.js
            </span>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
              Python
            </span>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
              SQL
            </span>
          </div>
          <h2 className="mb-4 text-xl font-semibold text-indigo-800 dark:text-white">
            Contact Information
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5 text-indigo-800 dark:text-blue-900"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              john.doe@example.com
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5 text-indigo-800 dark:text-blue-900"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +1 (555) 123-4567
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5 text-indigo-800 dark:text-blue-900"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              San Francisco, CA
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
