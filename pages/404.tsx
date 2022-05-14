import React from "react";
import Link from "next/link";

export default function FourOFourPage() {
    return (
        <main>
            <div className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center gap-3">
                <h1 className="text-2xl text-black dark:text-white">404</h1>
                <p className="text-base text-black dark:text-white">
                    This page does not exist.
                </p>
                <Link href="/" passHref={true}>
                    <a className="text-black underline dark:text-white">
                        Go back
                    </a>
                </Link>
            </div>
        </main>
    );
}
