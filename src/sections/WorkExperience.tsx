export default function WorkExperience() {
  return (
    <section className="py-16" aria-labelledby="work-exp-heading">
      <div className="mx-auto max-w-4xl px-6">
        <h2 id="work-exp-heading" className="text-3xl font-bold tracking-tight text-gray-900">
          Work Experience
        </h2>

        <ol className="relative mt-10 border-s border-gray-200">
          <li className="mb-12 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand ring-8 ring-white">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                6sense Technologies – ICT Project Manager
              </h3>
              <p className="mt-1 text-sm text-gray-500">Sep 2025 – Present • Dhaka</p>
              <ul className="mt-4 list-disc space-y-2 ps-5 text-gray-700">
                <li>Managed internal projects including company website upgrades and DepShield portal.</li>
                <li>Facilitated agile project planning using Jira, Trello, Linear.</li>
                <li>Coordinated cross-functional teams and improved delivery predictability.</li>
              </ul>
            </div>
          </li>

          <li className="mb-12 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand ring-8 ring-white">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                EBL Asset Management Ltd – Technical Communicator
              </h3>
              <p className="mt-1 text-sm text-gray-500">May 2025 – Aug 2025 • Dhaka</p>
              <ul className="mt-4 list-disc space-y-2 ps-5 text-gray-700">
                <li>Processed 100+ share transfer requests ensuring 100% compliance.</li>
                <li>Automated NAV & portfolio updates using Google Apps Script & Sheets (80% time saved).</li>
                <li>Built a Google Form–Sheets pipeline to sort 750+ CVs, reducing manual effort.</li>
                <li>Resolved network downtime issues and optimized IT operations.</li>
              </ul>
            </div>
          </li>

          <li className="ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand ring-8 ring-white">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Systech Digital Ltd – Software Developer
              </h3>
              <p className="mt-1 text-sm text-gray-500">Feb 2024 – May 2024 • Dhaka</p>
              <ul className="mt-4 list-disc space-y-2 ps-5 text-gray-700">
                <li>Developed employee management system with Laravel & Blade.</li>
                <li>Built e-commerce platform with payment gateway, coupon system, and admin panel.</li>
                <li>Improved DB performance with optimized queries & indexing.</li>
                <li>Introduced clean code practices and reusable components.</li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
