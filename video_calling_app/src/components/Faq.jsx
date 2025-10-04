import React from 'react'

function Faq() {
  return (
    <section id="faq" className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">You Have Questions, We Have Answers!</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Have a question in mind? Check out the most common ones below.</p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <span className="flex text-lg font-semibold text-black"> How to boost productivity at work? </span>

                    <svg className="w-6 h-6 text-gray-400 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>Making your workday more productive can lead to better results. Here are some tips: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <span className="flex text-lg font-semibold text-black"> What are the best books to read for personal growth? </span>

                    <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>Reading books can be a great way to enhance personal growth. Some recommended titles include: "The Power of Now" by Eckhart Tolle and "Atomic Habits" by James Clear.</p>
                </div>
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                <div className="">
                    <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                        <span className="flex text-lg font-semibold text-black"> How to maintain a healthy work-life balance? </span>

                        <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                        <p>Having a balance between work and personal life is crucial for overall well-being. Find time for hobbies, exercise, and relaxation to maintain this balance.</p>
                    </div>
                </div>
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <span className="flex text-lg font-semibold text-black"> How to stay motivated on a challenging project? </span>

                    <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>Break down the project into smaller tasks, celebrate small victories, and seek support from colleagues to stay motivated and overcome challenges.</p>
                </div>
            </div>
        </div>

        <p className="text-center text-gray-600 textbase mt-9">Still have questions on your mind? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Reach out to us</a> for personalized assistance.</p>
    </div>
</section>
  )
}

export default Faq