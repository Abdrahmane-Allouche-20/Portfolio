import React from 'react'

function Expreience({ experience }) {
    return (
        experience ? (
            <article
                        className='group relative overflow-hidden rounded-3xl p-[1px] shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.16)]'
                        style={{
                            background: `linear-gradient(135deg, ${experience.iconBg} 0%, ${experience.border} 100%)`
                        }}
                    >
                        <div className='relative flex h-full flex-col rounded-[calc(1.5rem-1px)] border border-white/70 bg-white/80 p-6 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/90'>
                            <div
                                className='pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-30 blur-2xl transition-opacity duration-300 group-hover:opacity-50'
                                style={{ backgroundColor: experience.border }}
                            />

                            <div className='relative z-10 flex items-start gap-4'>
                                <div
                                    className='flex h-12 w-12 sm:h-14 sm:w-14 min-w-[3rem] sm:min-w-[3.5rem] items-center justify-center rounded-2xl border border-white/70 bg-white/85 shadow-[0_10px_20px_rgba(15,23,42,0.12)]'
                                    style={{ boxShadow: `0 10px 24px ${experience.border}55` }}
                                >
                                    <img
                                        src={experience.icon}
                                        alt={experience.alt}
                                        className='h-6 w-6 sm:h-8 sm:w-8 object-contain max-w-full max-h-full block'
                                        loading='lazy'
                                    />
                                </div>

                                <div className='flex-1 min-w-0'>
                                    <div className='mb-2 flex items-center justify-between gap-3 flex-wrap'>
                                        <h4 className='text-base font-bold text-slate-800 sm:text-lg min-w-0 truncate'>
                                            {experience.title}
                                        </h4>
                                        <span
                                            className='rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-600 flex-shrink-0'
                                            style={{ borderColor: experience.border, backgroundColor: `${experience.border}18` }}
                                        >
                                            {experience.badge || 'Certificate'}
                                        </span>
                                    </div>

                                    <p className='text-xs font-medium uppercase tracking-[0.08em] text-slate-500'>
                                        {experience.date}
                                    </p>
                                </div>
                            </div>

                            <p className='relative z-10 mt-5 text-sm leading-relaxed text-slate-700'>
                                {experience.description}
                            </p>
                        </div>
                    </article>
                ) : null
    )
}

export default Expreience