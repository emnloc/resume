import { useIntl } from 'react-intl';
import Avatar from '../../assets/myAvatar.svg';

import messages from '../../messages';

const skills = ['JavaScript', 'React', 'Node.js', 'ExpressJS', 'PHP', 'SQL', 'Git', 'RoR'];

function Sidebar() {
  const { formatMessage } = useIntl();

  return (
    <div>
      <div className="p-3 max-xl:mb-3 overflow-hidden bg-white rounded-2xl">
        <div className="mx-4 mt-12 text-center user-info lg:mx-6">
          <img
            className="w-36 h-36 mb-2.5 block mx-auto border-4 border-platinum overflow-hidden rounded-full *:w-full *:h-full *:rounded-full"
            src={Avatar}
            alt="Emmanuel Ortiz Cruz"
          />
          <h6 className="mb-1 text-lg font-semibold text-black">Emmanuel Ortiz Cruz</h6>
          <div className="mt-1 flex items-center justify-center gap-2 text-xs">
            <p>Full Stack / Web UI Developer</p>
            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="lb">
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <p>México</p>
          </div>
        </div>
        <div className="mt-4 space-y-7 p-4 rounded-2xl bg-gray-50 py-5 ring-1 ring-inset ring-gray-900/5 lg:py-10 text-gray-600">
          <p className="ac">{formatMessage(messages.description)}</p>

          <div className="flex flex-wrap gap-1">
            {skills.map((skill) => (
              <span
                className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-indigo-700/10"
                key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <a
            href="./resume/public/Resume.pdf"
            rel="noreferrer noopener nofollow"
            target="_blank"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            {formatMessage(messages.downloadCV)}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ml-3 w-4">
              <path
                fill="currentColor"
                d="M13 10h5l-6 6l-6-6h5V3h2zm-9 9h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-3 max-xl:mb-3 overflow-hidden bg-white rounded-2xl mt-4">
        <h2 className="ml-2 title text-lg font-extralight leading-1.27">
          {formatMessage(messages.aboutTitle, {
            bold: (chunks) => {
              return (<span className="font-bold">{chunks}</span>) as unknown as string;
            },
          })}
        </h2>
        <div className="rounded-2xl mt-4 bg-gray-50 p-4 py-10 ring-1 ring-inset ring-gray-900/5 text-gray-600">
          <p className="max-w-2xl subtitle">
            {formatMessage(messages.aboutDescription, {
              bold: (chunks) => {
                return (<span className="font-bold">{chunks}</span>) as unknown as string;
              },
            })}
          </p>
          <ul className="grid mt-4 mb-10 text-xs lg:mt-6 gap-x-8 gap-y-3 *:flex *:items-center">
            <li>
              <span className="flex-[0_0_4rem] max-w-f">Email</span>
              <span className="flex-[0_0_1rem]">:</span>
              <span className="text-black">
                &#101;&#109;&#109;&#097;&#110;&#117;&#101;&#108;&#046;&#111;&#114;&#116;&#105;&#122;&#046;&#100;&#101;&#118;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
              </span>
            </li>
            <li>
              <span className="flex-[0_0_4rem]">Github</span>
              <span className="flex-[0_0_1rem]">:</span>
              <span className="text-black">
                <a href="https://github.com/emnloc" target="_blank">
                  https://github.com/emnloc
                </a>
              </span>
            </li>
            <li className='max-w-full truncate'>
              <span className="flex-[0_0_4rem]">LinkedIn</span>
              <span className="flex-[0_0_1rem]">:</span>
              <span className="text-black">
                <a href="https://www.linkedin.com/in/emmanuel-ortiz-cruz/" target="_blank">
                https://www.linkedin.com/in/emmanuel-ortiz-cruz/
                </a>
              </span>
            </li>
            <li>
              <span className="flex-[0_0_4rem]">{formatMessage(messages.languageTitle)}</span>
              <span className="flex-[0_0_1rem]">:</span>
              <span className="text-black">{formatMessage(messages.languageDescription)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
