"use client"
import Image from "next/image";
import Navbar from './components/Navbar';
// import Tasks from './components/tasks';
import TaskBE from "./components/Task";
export default function Home() {
  return (
    <div>
      <Navbar/>
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <Tasks/> */}
      <TaskBE/>
      </main>
     </div>
    </div>
  );
}
