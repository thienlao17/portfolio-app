import StarIcon from '@/assets/icons/star.svg';

const words = [
    'Лучший',
    'Безопасный',
    'Адаптирующийся',
    'Удобный',
    'User Friendly',
    'Search Optimized',
    'Realible',
    'Something EXALTED',
    'CANT CHANGE',
    'WOWOWOW!',
    'REALLY COOL',
    'MORE THAN JUST A DESIGN',
];

export const TapeSection = () => {
    return (
        <div>
            <div className="py-16 lg:py-24 overflow-x-clip">
                <div
                    className={
                        'bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1'
                    }
                >
                    <div
                        className={
                            'flex [mask-image:linear-gradient(ro_right,transparent,black_10%,black_90%,transparent)]'
                        }
                    >
                        <div
                            className={
                                'flex gap-4 flex-none py-3 pr-4 animate-move-left [animation-duration:30s]'
                            }
                        >
                            {[...new Array(2)].fill(0).map((_, i) => (
                                <>
                                    {words.map((word) => (
                                        <div
                                            key={word}
                                            className={
                                                'inline-flex gap-4 items-center'
                                            }
                                        >
                                            <span
                                                className={
                                                    'text-gray-900 uppercase font-extrabold text-sm'
                                                }
                                            >
                                                {word}
                                            </span>
                                            <StarIcon
                                                className={
                                                    'size-6 text-gray-900 -rotate-12'
                                                }
                                            />
                                        </div>
                                    ))}
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
