import React from "react";
import Link from "next/link";


export default function Footer(){
    return(
        <div className="mt-20 text-center justify-center items-center flex-row">
            <Link href="/privacy-policy" className="mr-2"> Privacy Policy </Link> |
            <Link href="/terms" className="ml-2" >Terms & Conditions</Link>
        </div>

    )
}