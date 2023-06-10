import Link from "next/link";
import React from "react";

export default function MainLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const headerTextStyle =
      "text-xl cursor-pointer hover-animation px-3 py-2 rounded transition duration-150 ease-out hover:ease-in hover:font-bold ";

   return (
      <div>
         <div className="w-full flex justify-center items-center bg-slate-900 relative">
            <div className="absolute left-0 w-[300px] bg-cyan-300">
               TODO ship goes here
            </div>
            <div className="flex flex-col max-w-[1000px] grow">
               <nav className="w-full p-12">
                  <ul className="w-full flex flex-wrap justify-between">
                     <li>
                        <Link className={headerTextStyle} href="/spaceport">
                           SpacePort
                        </Link>
                     </li>
                     <li>
                        <Link className={headerTextStyle} href="/missions">
                           Completed Missions
                        </Link>
                     </li>
                     <li>
                        <Link className={headerTextStyle} href="/skills">
                           Training & Skills
                        </Link>
                     </li>
                     <li>
                        <Link className={headerTextStyle} href="/about">
                           About Me
                        </Link>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
         {children}
      </div>
   );
}
