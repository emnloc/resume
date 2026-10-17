import React from 'react';
import ProfileCard from './ProfileCard';
import TelemetryMetrics from './TelemetryMetrics';
import Accreditation from './Accreditation';

const Sidebar: React.FC = () => {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
      <ProfileCard />
      <TelemetryMetrics />
      <Accreditation />
    </aside>
  );
};

export default Sidebar;
