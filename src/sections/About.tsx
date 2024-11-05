'use client';

import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import GithubIcon from '@/assets/icons/github.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import ReactIcon from '@/assets/icons/react.svg';
import { TechIcon } from '@/components/TechIcon';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const toolBoxItems = [
    {
        title: 'JavaScript',
        iconType: JavascriptIcon,
    },
    {
        title: 'HTML5',
        iconType: HTMLIcon,
    },
    {
        title: 'CSS3',
        iconType: CSSIcon,
    },
    {
        title: 'React',
        iconType: ReactIcon,
    },
    {
        title: 'Chrome',
        iconType: ChromeIcon,
    },
    {
        title: 'Github',
        iconType: GithubIcon,
    },
];

const hobbies = [
    {
        title: 'Painting',
        emoji: '🖌️',
        left: '5%',
        top: '5%',
    },
    {
        title: 'Photography',
        emoji: '📷',
        left: '50%',
        top: '5%',
    },
    {
        title: 'Gaming',
        emoji: '🖱️',
        left: '10%',
        top: '35%',
    },
    {
        title: 'Hiking',
        emoji: '🩻',
        left: '35%',
        top: '40%',
    },
    {
        title: 'Music',
        emoji: '🎧',
        left: '5%',
        top: '65%',
    },
    {
        title: 'Fitness',
        emoji: '🗿',
        left: '70%',
        top: '45%',
    },
    {
        title: 'Reading',
        emoji: '📚',
        left: '45%',
        top: '70%',
    },
];

export const AboutSection = () => {
    const constantRef = useRef(null);
    return (
        <div className="py-20 lg:py-28">
            <div className={'container'}>
                <SectionHeader
                    eyebrow={'About Me'}
                    title={'A Glimpse Into My World'}
                    description={
                        'Learn more about who I am, what I do, and what inspires me.'
                    }
                />
                <div className={'mt-20 flex flex-col gap-8'}>
                    <div
                        className={
                            'grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'
                        }
                    >
                        <Card
                            className={'h-[320px] md:col-span-2 lg:col-span-1'}
                        >
                            <CardHeader
                                title={'My Reads'}
                                description={
                                    'Explore books shaping my perspectives'
                                }
                            />
                            <div className={'w-40 mx-auto mt-2'}>
                                <Image src={bookImage} alt="book" />
                            </div>
                        </Card>
                        <Card
                            className={'h-[320px]  md:col-span-3 lg:col-span-2'}
                        >
                            <CardHeader
                                title={'My Toolbox'}
                                className={''}
                                description={
                                    'Explore the technologies and tools i use to build this digital exp.'
                                }
                            />
                            <ToolboxItems
                                items={toolBoxItems}
                                className={''}
                                itemsWrapperClassName={
                                    'animate-move-left [animation-duration:30s]'
                                }
                            />
                            <ToolboxItems
                                items={toolBoxItems}
                                className={'mt-6'}
                                itemsWrapperClassName={
                                    'animate-move-right [animation-duration:50s]'
                                }
                            />
                        </Card>
                    </div>
                    <div
                        className={
                            'grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'
                        }
                    >
                        <Card
                            className={
                                'h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'
                            }
                        >
                            <CardHeader
                                title={'Beyond the code'}
                                description={'Explore my hobbies'}
                                className={'px-6 py-6'}
                            />
                            <div
                                className={'relative flex-1'}
                                ref={constantRef}
                            >
                                {hobbies.map((item) => (
                                    <motion.div
                                        key={item.title}
                                        className={
                                            'inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 items-center absolute'
                                        }
                                        style={{
                                            left: item.left,
                                            top: item.top,
                                        }}
                                        drag
                                        dragConstraints={constantRef}
                                    >
                                        <span
                                            className={
                                                'font-medium text-gray-950'
                                            }
                                        >
                                            {item.title}
                                        </span>
                                        <span>{item.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                        <Card
                            className={
                                'h-[320px] p-0 relative md:col-span-2 lg:col-span-1'
                            }
                        >
                            <Image
                                src={mapImage}
                                alt={'maplock'}
                                className={'h-full w-full object-cover'}
                            />
                            <div
                                className={
                                    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 '
                                }
                            >
                                <Image
                                    src={smileMemoji}
                                    alt={'smile memoji'}
                                    className={'size-20'}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
