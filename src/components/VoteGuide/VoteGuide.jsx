import React from 'react'

export default function VoteGuide() {
    return (
        <div>
            <section className='relative h-full w-full'>
                <h1 className='text-5xl font-bold mt-20 mb-10
                mx-6'>
                 Voters Guideline
                </h1>
                <div >
                    <p className='head font-small mx-6 mb-6'>You’re only eligible to register as a voter if:</p>
                        <ul>
                            <li className=' mx-6 mb-6'> You are a student in this school, undertaking a course of your choice in your academic years</li>
                        </ul>
                </div>
                <div>
                    <p className='head font-small mx-6 mb-6'> When you can be denied registration</p>
                        <ul>
                            <li className=' mx-6 mb-6' > You are not a student of this school</li>
                            <li className=' mx-6 mb-6'>If the school declares you to have violated the voters requirements ,
                            This may include general misconduct</li>
                         </ul>
                </div>
                <div>
                    <p className='head font-small mx-6 mb-6'>Conduct During Election </p>

                        <ul>
                            <li className=' mx-6 mb-6'> All Voters are expected to familiarize with the candidate of their choice and read their campaign promise</li>
                            <li className=' mx-6 mb-6'>All Voters are expected to vote for just one candidate</li>
                            <li className=' mx-6 mb-6'>All Voters are expected to to conduct themselves properly offline and Online during the election</li>
                        </ul>
                </div>
                <footer>
                    <p className=' mx-6 mb-6'>Note no Winner is declared until after the voting session and would be announced by the WTSC Electoral board</p>
                    <p className=' mx-6 mb-6'>Report any problem and Ask questions if needed </p>
                </footer>
            </section>
        </div>
    )
}
