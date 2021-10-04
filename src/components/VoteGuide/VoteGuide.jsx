import React from 'react';
import EligibleVote from './EligibleVote';
import DenyVote from './DenyVote';
import VoteConduct from './VoteConduct';

export default function VoteGuide() {
    return (
        <div>
            <section className='relative h-full w-full'>
                <h1 className='text-5xl font-bold mt-20 mb-10
                mx-6'>
                 Voters Guideline
                </h1>
                    <p className='head font-small mx-6 mb-6'>You’re only eligible to register as a voter if:</p>
                        <EligibleVote/>
                    <p className='head font-small mx-6 mb-6'> When you can be denied registration</p>
                        <DenyVote/>
                    <p className='head font-small mx-6 mb-6'>Conduct During Election </p>
                        <VoteConduct/>
                <footer>
                    <p className=' mx-6 mb-6'>Note no Winner is declared until after the voting session and would be announced by the WTSC Electoral board</p>
                    <p className=' mx-6 mb-6'>Report any problem and Ask questions if needed </p>
                </footer>
            </section>
        </div>
    )
}
