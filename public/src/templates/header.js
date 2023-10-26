import React from 'react';
import Link from 'next/link';

const Header = ({ title }) => {
    return (
        <>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
            </head>
            <body className="font-sans bg-gray-100">
                <header className="bg-dark-blue text-white p-6">
                    <nav className="container mx-auto flex justify-between items-center">
                        <h1 className="text-xl font-bold">Patricio R. Patané</h1>
                        <div className="flex space-x-4">
                            <Link href="/"><a className="hover:text-gray-300">Inicio</a></Link>
                            <Link href="/about"><a className="hover:text-gray-300">Acerca de</a></Link>
                            <Link href="/portfolio"><a className="hover:text-gray-300">Proyectos</a></Link>
                        </div>
                    </nav>
                </header>
            </body>
        </>
    );
};

export default Header;