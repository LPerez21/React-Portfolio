import React from 'react';

export default function Resume() {
  const workExperience = [
    {
      title: 'Lead Generator / Sales Coordinator',
      company: 'Cool Today',
      location: 'Orlando, FL',
      dates: 'Aug 2022 – Feb 2025',
      bullets: [
        'Customer Engagement: Initiated interactions in the Home Depot store by advising customers on available services and efficiently booking appointments.',
        'Sales Operations: Transitioned to a sales role involving proactive outbound calls, appointment scheduling, addressing inquiries, and resolving complaints.',
        'Team Development: Trained and mentored new hires, ensuring high-quality service and consistent performance across the team.',
        'Process Optimization: Collaborated with cross-functional teams to refine appointment scheduling, resulting in improved customer satisfaction and streamlined operations.',
      ],
    },
    {
      title: 'Property Inspector',
      company: 'Mueller Reports',
      location: 'Orlando, FL',
      dates: 'Mar 2022 – Aug 2022',
      bullets: [
        'Performed comprehensive inspections on residential and commercial projects, generating detailed reports for major insurance companies and lenders.',
        'Worked closely with adjusters and underwriters to ensure accurate damage assessments and timely documentation.',
        'Ensured strict adherence to safety and quality standards, contributing to effective risk management.',
      ],
    },
    {
      title: 'Property Inspector',
      company: 'Marin Eljaiek Lopez & Martinez',
      location: 'Orlando, FL',
      dates: 'Mar 2020 – Nov 2020',
      bullets: [
        'Executed thorough on-site evaluations, capturing high-quality photographs and producing comprehensive damage assessment reports.',
        'Provided clear guidance to clients throughout the inspection process, enhancing understanding and satisfaction.',
        'Improved documentation accuracy through meticulous reporting and prompt follow-up actions.',
      ],
    },
    {
      title: 'Fleet Manager/Dispatcher',
      company: 'Big Dog Delivery (Amazon DSP)',
      location: 'Orlando, FL',
      dates: 'Oct 2019 – Mar 2020',
      bullets: [
        'Directed daily fleet operations, managing route assignments, vehicle maintenance, and driver performance.',
        'Implemented safety and organizational training initiatives that enhanced driver efficiency and overall fleet utilization.',
        'Prepared detailed operational reports and coordinated driver schedules to optimize delivery performance.',
      ],
    },
    {
      title: 'Manager / Supervisor – Construction & Plumbing',
      company: 'LP Enterprise Services LLC',
      location: 'Dorado, Puerto Rico',
      dates: 'Aug 2016 – May 2018',
      bullets: [
        'Oversaw day-to-day operations across property management, construction, and plumbing services, ensuring seamless coordination among diverse teams.',
        'Successfully managed restoration and plumbing projects, consistently meeting deadlines and budgetary targets.',
        'Developed and implemented training programs that significantly improved team productivity and service quality.',
      ],
    },
    {
      title: 'Property Manager / Maintenance Technician',
      company: 'IN Servicio',
      location: 'Guaynabo, Puerto Rico',
      dates: 'Oct 2013 – Aug 2016',
      bullets: [
        'Managed condominium operations and maintenance while ensuring regulatory compliance and high service standards.',
        'Utilized QuickBooks and Peach Tree systems to oversee financial processes, enhancing billing accuracy and financial reporting.',
        'Supervised maintenance teams to perform routine upkeep and handle emergency repairs promptly.',
      ],
    },
    {
      title: 'Staff Supervisor',
      company: 'Auto Expreso',
      location: 'Guaynabo, Puerto Rico',
      dates: 'Apr 2011 – May 2014',
      bullets: [
        'Delivered exceptional customer service by promptly addressing inquiries and resolving account issues.',
        'Facilitated training and development for new employees, boosting team efficiency and service consistency.',
        'Monitored and verified financial reports to ensure accurate account charges and adherence to billing practices.',
      ],
    },
    {
      title: 'Store Manager',
      company: 'My Verizone Wireless',
      location: 'Boca Raton, FL',
      dates: 'Sep 2004 – Dec 2005',
      bullets: [
        'Directed overall store operations, including recruitment, training, scheduling, and inventory management.',
        'Maintained superior customer service standards that fostered loyalty and supported store growth.',
        'Implemented operational procedures that streamlined processes and enhanced daily efficiency.',
      ],
    },
    {
      title: 'Field Sales Manager',
      company: 'Vector Marketing Corp',
      location: '',
      dates: 'Jun 2003 – May 2007',
      bullets: [
        'Generated and nurtured sales leads independently, consistently exceeding targets and earning top performer recognition.',
        'Conducted training sessions to enhance team presentation skills and effective communication.',
        'Played an integral role in district-level strategy and management initiatives to drive overall success.',
      ],
    },
  ];

  return (
    <section className="p-8 max-w-5xl mx-auto">
      {/* Top Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Luis Pérez</h1>
        <p className="mt-2 text-gray-700">
          <span className="font-bold">Operations, Sales &amp; Safety Leader</span>
          <br />
          Davenport, FL 33896 • luisperez.lp@gmail.com • +1 561‑420‑5396
          <br />
          Willing to Relocate • Authorized to Work in the US
        </p>
      </header>

      {/* Content Grid */}
      <div className="md:grid md:grid-cols-3 md:gap-12">
        {/* Left Sidebar */}
        <aside className="mb-8 md:mb-0">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg mb-6 hover:bg-blue-700 transition"
          >
            ⬇️ Download PDF
          </a>

          <div className="space-y-6">
            {/* Objective */}
            <div>
              <h2 className="text-2xl font-semibold border-b-2 pb-1">Objective</h2>
              <p className="mt-2 text-gray-700">
                Dynamic and results-oriented professional seeking a challenging role that leverages over 15 years of experience in operations, client relations, and team leadership to drive business growth and operational excellence.
              </p>
            </div>

            {/* Skills & Certifications */}
            <div>
              <h2 className="text-2xl font-semibold border-b-2 pb-1">
                Skills & Certifications
              </h2>
              <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                <li>Leadership & Team Management: Training, supervision, and process improvement</li>
                <li>Client Relations & Service: Appointment scheduling, complaint resolution, and customer engagement</li>
                <li>Operations & Reporting: Property inspection, fleet management, scheduling, and analytical reporting</li>
                <li>Administrative & Financial: Office management, QuickBooks, Microsoft Office Suite</li>
                <li>Safety & Compliance: OSHA 10-Hour General Industry Safety & Health Training</li>
                <li>Additional Expertise: Legal research, time management, and regulatory compliance</li>
                <li>Valid Driver’s License</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-10">
          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-semibold border-b-2 pb-1">Professional Summary</h2>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              <li>Extensive Experience: Over 15 years in diverse roles including property inspection, fleet and operations management, and client services.</li>
              <li>Leadership & Training: Proven ability to mentor teams and implement process improvements to boost efficiency and service quality.</li>
              <li>Client-Focused: Adept at resolving customer issues, managing complex schedules, and ensuring a seamless service experience.</li>
              <li>Safety & Compliance: Committed to maintaining high safety standards, backed by OSHA 10-hour General Industry Safety and Health training.</li>
              <li>Analytical & Organized: Strong background in reporting, financial oversight, and the use of technology to streamline operations.</li>
            </ul>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="text-2xl font-semibold border-b-2 pb-1">Work Experience</h2>
            {workExperience.map((job, idx) => (
              <div key={idx} className="mt-6">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600 italic">
                  {job.company}
                  {job.location && ` • ${job.location}`} | {job.dates}
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                  {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold border-b-2 pb-1">Education</h2>
            <ul className="mt-4 list-none text-gray-700 space-y-3">
              <li>
                <strong>Bachelor of Business Administration in Administration and Accounting</strong>
                <br />
                University of Phoenix – Guaynabo, Puerto Rico
              </li>
              <li>
                <strong>Associate of Arts</strong>
                <br />
                Palm Beach Community College – Boca Raton, Florida
              </li>
              <li>
                <strong>Certificate in Legal Assistant / Paralegal</strong>
                <br />
                Blackstone Career Institute – Allentown, Pennsylvania
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
