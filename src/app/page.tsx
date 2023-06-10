"use client";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { VT323 } from "next/font/google";

const vt = VT323({
   subsets: ["latin"],
   weight: ["400"],
});

export default function Home() {
   const router = useRouter();
   const [showButton, setShowButton] = useState(true);
   const [showTextRunning, setShowTextRunning] = useState(false);

   const terminalContainer = useRef<HTMLDivElement | null>(null);
   const terminalDiv = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (showTextRunning) {
         const onEnter = (ev: KeyboardEvent) => {
            if (ev.key === "Enter") {
               router.push("/spaceport");
            }
         };
         window.addEventListener("keyup", onEnter, false);
         return () => {
            window.addEventListener("keyup", onEnter, false);
         };
      }
   }, [router, showTextRunning]);

   function runResize() {
      if (showButton) {
         setShowButton(false);
      }

      setTimeout(() => {
         if (terminalContainer.current) {
            terminalContainer.current.style.display = "flex";
            console.log("...set display visibility of container");
         }
         setTimeout(() => {
            if (terminalDiv.current) {
               terminalDiv.current.style.height = "500px";
               setTimeout(() => {
                  setShowTextRunning(true);
               }, 500);
            }
         }, 500);
      }, 500);
   }

   return (
      <div className="w-full h-[100vh] flex content-center justify-center items-center">
         <div
            ref={terminalContainer}
            className="hidden w-full justify-center items-center -mt-64"
         >
            <div className={vt.className}>
               <div
                  ref={terminalDiv}
                  className="w-[550px] h-[25px] transition-all duration-150 ease-in-out border-2 rounded-xl border-cyan-800 px-6 py-2 leading-8 bg-slate-950 text-2xl text-green-600"
               >
                  {showTextRunning && <TypingComponent />}
               </div>
            </div>
         </div>
         {showButton && (
            <div className="group relative">
               <div className="absolute group-hover:scale-125 transition-all duration-150 group-hover:-top-32 group-hover:-left-32 -top-16 -left-16 border-t-2 border-l-2 rounded-tl-xl border-cyan-800 w-32 h-32" />
               <div className="absolute group-hover:scale-125 transition-all duration-150 group-hover:-bottom-32 group-hover:-right-32 -bottom-16 -right-16 border-b-2 border-r-2 rounded-br-xl border-cyan-800 w-32 h-32" />

               <button
                  type="button"
                  className="text-4xl font-normal group-hover:font-bold group-hover:scale-110 transition-all duration-150 ease-in-out border-2 rounded-xl border-cyan-800 px-6 py-2"
                  onClick={() => runResize()}
               >
                  Start Ignition Sequence...
               </button>
            </div>
         )}
      </div>
   );
}

const TypingComponent = () => {
   const textLines = [
      `... Set course for Callisto
      \n ... Load fuel cells
      \n ... Load coffee beans, start brewing
      \n ... Configure interstellar radar array
      \n ... Heavy Metal Galaxy frequency found
      \n ... Press enter to begin \n`,
   ];

   return (
      <div className="pt-2">
         <TypeAnimation
            sequence={textLines}
            wrapper="span"
            cursor={true}
            speed={45}
            repeat={0}
            style={{
               whiteSpace: "pre-line",
               display: "inline-block",
            }}
         />
      </div>
   );
};
