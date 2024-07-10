import { useIntl } from 'react-intl';
import messages, { experience } from '../../messages';

import jobs from './jobs';

const Experience = () => {
  const { formatMessage, formatDate } = useIntl();

  return (
    <div className="resume-section py-8 md:p-8 bg-white rounded-2xl lg:p-10 2xl:p-13 ">
      <div className="mb-8 mt-7">
        <h2 className="title text-[32px] md:text-2xl lg:text-4xl font-extralight text-black  leading-1.27">
          {formatMessage(messages.workExperience, {
            bold: (chunks) => {
              return (
                <span className="font-semibold text-theme">{chunks}</span>
              ) as unknown as string;
            },
          })}
        </h2>
        <p className="max-w-xl mt-4 md:mt-6 subtitle italic line-clamp-3 text-sm leading-6 font-light text-gray-600">
          {formatMessage(messages.quote)}
        </p>
      </div>
      <ul>
        {Object.keys(jobs).map((job) => {
          const position = jobs[job as keyof typeof jobs];
          return (
            <li key={job} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4 relative">
                <div className="absolute flex w-12 top-0 left-0 -bottom-10 justify-center flex-1">
                  <div className="w-[1px] bg-gray-200"></div>
                </div>
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50 relative ring-1 ring-gray-900/10"
                  src={`https://raw.githubusercontent.com/emnloc/resume/main/public/companies/${job}.jpeg`}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{position.title}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {formatMessage(experience[job as keyof typeof experience])}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900 capitalize">{job}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500 space-x-1">
                  <time dateTime={position.from}>
                    {formatDate(position.from, {
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </time>
                  <span>-</span>
                  <time dateTime={position.to}>
                    {formatDate(position.to, {
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </time>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
