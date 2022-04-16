import React from "react";
import Link from "next/link";

export default function FourOFourPage() {
    return (
        <div className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center flex-col bg-slate-50 dark:bg-zinc-900">
            <h1 className="text-2xl">404</h1>
            <p>It seems like this page does not exist</p>
            <Link href="/" passHref={true}>Go back</Link>
        </div>
    )
}