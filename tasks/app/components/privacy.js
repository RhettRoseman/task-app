import React from "react";
import Navbar from "./Navbar";

export default function Privacy(){
    return(
        <div className="m-10">
        <h1 className="text-center text-4xl text-bold sm:text-2xl ">
            Privacy Policy – Task Manager App

            Effective Date: [10-21-2025]   
        </h1>
        <p className="text-white flex-col flex justify text-xl">
<h2 className =" text-2xl font-semibold mt-4 mb-2">1. Introduction</h2>

<p  className=" mb-4 text-white text-xl" >Task Manager (“we,” “our,” or “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our Task Manager app.
</p>

<h2 className =" text-2xl font-semibold mt-4 mb-2">2. Information We Collect</h2>

<p  className=" mb-4 text-white text-xl" >
    Local Data: Your tasks, titles, and statuses are stored in your browser's localStorage. We do not collect this data on a server.
</p>

<p  className=" mb-4 text-white text-xl" >
    Optional Information: If you voluntarily provide an email or contact info (e.g., for support), we may store it to respond to your inquiries.

</p>

<h2 className =" text-2xl font-semibold mt-4 mb-2"> 3. How We Use Your Information </h2>

<p  className=" mb-4 text-white text-xl" >
To allow you to create, edit, and manage tasks in the app.

To respond to support requests if you provide contact information.

To improve the app experience.
</p>

<h2 className =" text-2xl font-semibold mt-4 mb-2">4. Sharing Your Information</h2>

<p  className=" mb-4 text-white text-xl" >
    We do not sell, trade, or rent your data
Your tasks remain on your device unless you choose to export or share them.
</p>

<h2 className =" text-2xl font-semibold mt-4 mb-2"> 5. Cookies & Tracking </h2>

<p  className=" mb-4 text-white text-xl" >
    Our app does not use cookies or third-party tracking.

    All task data is stored locally on your device.
</p>

<h2 className =" text-2xl font-semibold mt-4 mb-2"> 6. Security </h2>

<p  className=" mb-4 text-white text-xl" >
    We use best practices for local storage but cannot guarantee complete security.
    You are responsible for securing your device and browser.
</p>



<h2 className =" text-2xl font-semibold mt-4 mb-2">7. Changes to This Policy </h2>

<p  className=" mb-4 text-white text-xl" >
    We may update this Privacy Policy from time to time. Updates will be reflected in the app.
</p>



        </p>
        </div>
    )
}