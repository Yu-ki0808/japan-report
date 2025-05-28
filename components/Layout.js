import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import '../app/reset.css';
import '../app/style.scss';

export default function Layout({ children, meta }) {
    const defaultMeta = {
        title: 'Celestium Analytics-AI',
        description: 'AI技術を駆使し、ビジネスに新たな地平を切り開く洞察を提供',
        canonical: '/',
        ogType: 'website',
        ogTImage: '/img/t-logo.png',
        ogUrl: 'https://celestium-analytics-ai.vercel.app/',
        ogTwittercard: 'summary_large_image',
        ogTwDescription: 'AI技術を駆使し、ビジネスに新たな地平を切り開く洞察を提供',
        ogTitle: 'Celestium Analytics-AI',
        ogDescription: 'AI技術を駆使し、ビジネスに新たな地平を切り開く洞察を提供',
    };

    const pageMeta = { ...defaultMeta, ...meta };

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
                <meta charSet="UTF-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:locale" content="ja_JP" />
                <meta name="twitter:site" content="@NobinLOG" />
                <meta property="og:site_name" content="Celestium Analytics-AI" />
                <title>{pageMeta.title}</title>
                <meta name="description" content={pageMeta.description} />
                <link rel="canonical" href={pageMeta.canonical} />
                <meta property="og:type" content={pageMeta.ogType} />
                <meta property="og:image" content={pageMeta.ogTImage} />
                <meta property="og:url" content={pageMeta.ogUrl} />
                <meta name="twitter:card" content={pageMeta.ogTwittercard} />
                <meta name="twitter:image" content={pageMeta.ogTImage} />
                <meta name="twitter:description" content={pageMeta.ogTwDescription} />
                <meta property="og:title" content={pageMeta.ogTitle} />
                <meta property="og:description" content={pageMeta.ogDescription} />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}