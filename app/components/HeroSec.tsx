import Image from "next/image"
import Link from "next/link"
import ClaudeImg from '@/public/CluadeImg.png'

const HeroSec = () => {
    return (
        <div className='relative w-full min-h-screen'>
            <div className="absolute inset-0  h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:6rem_4rem] z-50"></div>

            <section className='relative w-full py-24 px-4 z-50'>
                <div className='max-w-3xl mx-auto text-center space-y-6'>
                    <div className='inline-flex items-center gap-2 text-sm text-second-text tracking-wide bg-button/25 p-2 px-4 rounded-full'>
                        <span className='inline-block w-1.5 h-1.5 rounded-full bg-button'></span>
                        Cluade can automate 70% of your Workflow
                    </div>
                    <h1 className='text-5xl md:text-7xl font-bold tracking-tighter text-heading leading-[1.1] text-balance'>
                        Stop treating Claude{' '}
                        <span className='relative inline-block'>
                            <span className='relative z-10'>like Google.</span>
                            <span className='absolute bottom-1 left-0 w-full h-3 md:h-4 bg-button/25 rounded-sm z-0'></span>
                        </span>
                    </h1>

                    <p className='text-lg md:text-xl text-second-text max-w-xl mx-auto leading-relaxed'>
                        Experience AI that reasons deeply, provides thoughtful analysis,
                        and helps you understand complex problems — not just retrieve answers.
                    </p>
                    <div className='flex flex-col sm:flex-row items-center gap-4 mx-auto max-w-md justify-center align-center mt-8'>
                        <Link href={`https://claude.ai/`}>
                            <button className='w-full sm:w-auto px-6 py-3 text-md bg-button text-white text-sm font-medium rounded-lg whitespace-nowrap cursor-pointer'>
                                Get Started
                            </button>
                        </Link>
                        <button className='w-full sm:w-auto px-6 py-3 text-md bg-heading text-white text-sm font-medium rounded-lg whitespace-nowrap'>
                            Read Docs
                        </button>
                    </div>


                </div>

                <div className='hidden lg:block absolute top-20 right-20 xl:right-32 opacity-80 hover:opacity-100 transition-opacity duration-300'>
                    <Image src={ClaudeImg} height={100} width={100} alt="Claude Logo" className='drop-shadow-lg' />
                </div>

                <div className='hidden lg:block absolute top-32 left-10 xl:left-20 opacity-70 hover:opacity-100 transition-opacity duration-300'>
                    <Image src={ClaudeImg} height={80} width={80} alt="Claude Logo" className='drop-shadow-lg' />
                </div>

                <div className='hidden xl:block absolute bottom-20 top-3/4 right-1/6 -translate-x-1/2 opacity-60 hover:opacity-80 transition-opacity duration-300'>
                    <Image src={ClaudeImg} height={90} width={90} alt="Claude Logo" className='drop-shadow-lg' />
                </div>

                <div className='hidden lg:block absolute left-6  xl:left-16 top-3/4   -translate-y-1/2'>
                    <div className='bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)] border border-gray-100 p-5 w-52 space-y-4'>
                        <div className='flex items-center justify-between text-xs text-second-text'>
                            <span className='font-medium text-heading text-sm'>Usage & Growth</span>
                            <span className='text-[10px] tracking-wide uppercase text-second-text/60'>Weekly</span>
                        </div>
                        <svg viewBox='0 0 160 48' className='w-full h-12' fill='none'>
                            <polyline
                                points='0,40 20,36 40,30 60,32 80,20 100,18 120,12 140,14 160,6'
                                stroke='#D97757'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                fill='none'
                            />
                            <polyline
                                points='0,40 20,36 40,30 60,32 80,20 100,18 120,12 140,14 160,6 160,48 0,48'
                                fill='url(#chartGradient)'
                                opacity='0.15'
                            />
                            <defs>
                                <linearGradient id='chartGradient' x1='0' y1='0' x2='0' y2='1'>
                                    <stop offset='0%' stopColor='#D97757' />
                                    <stop offset='100%' stopColor='#D97757' stopOpacity='0' />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className='flex items-end justify-between'>
                            <div>
                                <div className='text-2xl font-bold text-heading'>78%</div>
                                <div className='text-xs text-second-text'>Adoption rate</div>
                            </div>
                            <span className='text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full'>+12%</span>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block absolute right-6 xl:right-16 top-1/2 -translate-y-1/2'>
                    <div className='bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)] border border-gray-100 p-5 w-52 space-y-4'>
                        <div className='flex items-center justify-between'>
                            <span className='font-medium text-heading text-sm'>Total Queries</span>
                            <span className='text-xs text-second-text/60 bg-gray-50 px-2 py-0.5 rounded-full'>Live</span>
                        </div>
                        <div className='flex items-baseline gap-2'>
                            <span className='text-3xl font-bold text-heading tracking-tight'>24.8k</span>
                        </div>

                        <div className='w-full h-px bg-gray-100'></div>

                        <div className='space-y-3'>
                            <div className='flex items-center justify-between text-sm'>
                                <span className='text-second-text'>Saved hours</span>
                                <span className='font-medium text-heading'>1,240h</span>
                            </div>
                            <div className='w-full bg-gray-100 rounded-full h-1.5'>
                                <div className='bg-button h-1.5 rounded-full' style={{ width: '72%' }}></div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='w-2 h-2 rounded-full bg-button'></span>
                                <span className='text-xs text-second-text'>Active workflows</span>
                                <span className='ml-auto text-xs font-medium text-heading'>86</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSec