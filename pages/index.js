import { useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link'; //パラメーター渡すように追加
import { adjustGallery } from '../utils/galleryUtils';
export default function Home() {
    useEffect(() => {
        adjustGallery();
        window.addEventListener('load', adjustGallery);
        window.addEventListener('resize', adjustGallery);

        // クリーンアップ
        return () => {
            window.removeEventListener('load', adjustGallery);
            window.removeEventListener('resize', adjustGallery);
        };


    }, []);



    // 画像のタイトルとリンクを定義
    const pages = [
        {
            title: '日本における生産性と従業員エンゲージメントの課題',
            link: '/article/productivity',
            imgSrc: './img/1.png',
            extraData: 'productivity-data',
            description: '日本の生産性と従業員エンゲージメントの現状と課題を探る',
            Update: '2025/5/1'
        },
        {
            title: '中学生に向けた2050年の未来を生き抜く仕事とスキルレポート',
            link: '/article/grow-in-2050',
            imgSrc: './img/2.png',
            extraData: 'grow-in-2050-data',
            description: '2050年の未来を見据えた中学生向けの仕事とスキルレポート',
            Update: '2025/5/1'
        },
        {
            title: '30代40代に向けた2050年の経済社会を勝ち抜くスキル獲得戦略',
            link: '/article/skill-strategy',
            imgSrc: './img/3.png',
            extraData: 'skill-strategy-data',
            description: '30代40代に向けた2050年の経済社会を勝ち抜くスキル獲得戦略',
            Update: '2025/5/1'
        },
        {
            title: '2030から2050年にかけてAI革命が切り拓く未来地図',
            link: '/article/ai-future-2030-2050',
            imgSrc: './img/4.png',
            extraData: 'ai-future-data',
            description: '2030から2050年にかけてAI革命が切り拓く未来地図',
            Update: '2025/5/1'
        },
        {
            title: 'WEBデザインのAI時代の30年先の未来予測',
            link: '/article/web-design-2050',
            imgSrc: './img/5.png',
            extraData: 'web-design-data',
            description: 'WEBデザインのAI時代の30年先の未来予測',
            Update: '2025/5/1'
        },
        {
            title: 'AI学習ガイドと変化への備え',
            link: '/article/learn-ai-future',
            imgSrc: './img/6.png',
            extraData: 'learn-ai-data',
            description: 'AI学習ガイドと変化への備え',
            Update: '2025/5/1'
        },
        {
            title: '日本企業の新卒採用の真実',
            link: '/article/japan-recruit-fact',
            imgSrc: './img/7.png',
            extraData: 'recruit-fact-data',
            description: '日本企業の新卒採用の真実',
            Update: '2025/5/1'
        },
        {
            title: '個人ホームページのこれからの未来予測',
            link: '/article/personal-site-future',
            imgSrc: './img/8.png',
            extraData: 'personal-site-data',
            description: '個人ホームページのこれからの未来予測',
            Update: '2025/5/1'
        },
    ];

    return (
        <Layout meta={{ title: 'Celestium Analytics-AI | ホーム' }}>
            <div className="gallery-container">
                <div className="gallery">
                    {pages.map((page) => (
                        <h2 key={page.link}>
                            <Link
                                href={{
                                    pathname: page.link,
                                    query: { pageData: JSON.stringify(page) },
                                }}
                                className="linkStyle"
                            >
                                <img className="imageStyle" src={page.imgSrc} alt={page.title} />
                                {page.title}
                            </Link>
                        </h2>
                    ))}
                </div>
            </div>
        </Layout>
    );


}