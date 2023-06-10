import React from "react";
import data from "../../content/content.json";

function About() {
   return (
      <div className="w-full flex justify-center items-center">
         <div className="w-full flex p-12">
            <div className="flex flex-col w-1/2 justify-center items-center space-y-12">
               <div>
                  <h1 className="heading1">INTRODUCTION</h1>
               </div>
               <div className="max-w-[450px] border border-cyan-500 rounded-xl px-6 py-3 bg-slate-200">
                  <p className="text-justify text-slate-950">
                     {data.introduction}
                  </p>
               </div>
            </div>
            <div className="flex w-1/2"></div>
         </div>
      </div>
   );
}

export default About;

function NeedToAddThisLater() {
   return (
      <div>
         <a href="https://www.freepik.com/free-photo/3d-render-abstract-background-with-flowing-digital-particles-design_22134616.htm#page=3&query=scifi%20splash%20future%20banner&position=0&from_view=keyword&track=ais">
            Image by kjpargeter
         </a>{" "}
         on Freepik
      </div>
   );
}
