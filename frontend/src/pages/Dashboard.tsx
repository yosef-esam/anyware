
import ExamsCard from "../components/dashboard/ExamsCard";
import AnnouncementsList from "../components/dashboard/AnnouncementsList";
import WhatsDue from "../components/dashboard/WhatsDue";

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto mt-6 px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <ExamsCard />
        <AnnouncementsList />
      </div>

      <div className="md:col-span-1">
        <WhatsDue />
      </div>
    </div>
  </div>
  );
}

export default Dashboard;
