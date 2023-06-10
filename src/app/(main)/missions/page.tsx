import React from "react";

export default function Missions() {
   return (
      <div className="w-full flex flex-col justify-center items-center">
         <div>
            <h1>MISSIONS</h1>
         </div>
         <JobExperienceLayout title="abcd" />
      </div>
   );
}

function JobExperienceLayout({ title }: { title: string }) {
   return (
      <div>
         <h2>Title: {title}</h2>
      </div>
   );
}
