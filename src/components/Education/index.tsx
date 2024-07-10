import { useIntl } from 'react-intl';
import messages, { education } from '../../messages';

import UNAMLogo from '../../assets/unam.svg';


const Education = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="education-section px-5 py-8 md:p-8 bg-white rounded-2xl lg:p-10 2xl:p-13 mt-5">
      <div className="mb-8 mt-7">
        <h2 className="title text-[32px] md:text-2xl lg:text-4xl font-extralight text-black  leading-1.27">
          {formatMessage(education.title, {
            bold: (chunks) => {
              return (
                <span className="font-semibold text-theme">{chunks}</span>
              ) as unknown as string;
            },
          })}
        </h2>
      </div>
      <ul>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4 relative">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50 relative ring-1 ring-gray-900/10"
                  src={UNAMLogo}
                  alt="UNAM"
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{formatMessage(education.degree)}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {formatMessage(education.fes)}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900 capitalize">{formatMessage(education.unam)}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500 space-x-1">
                  <time dateTime="2004-08-01T00:00Z">2004</time>
                  <span>-</span>
                  <time dateTime="2008-11-01T00:00Z">2008</time>
                </p>
              </div>
            </li>

      </ul>
    </div>
  );
};

export default Education;
