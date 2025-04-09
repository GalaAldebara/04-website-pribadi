import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({children}: LayoutProps) {
    return (
        <>
            <head>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}