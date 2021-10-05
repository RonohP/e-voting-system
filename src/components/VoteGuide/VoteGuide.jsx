import React from 'react';
import EligibleVote from './EligibleVote';
import DenyVote from './DenyVote';
import VoteConduct from './VoteConduct';

export default function VoteGuide() {
  return (
    <section className='h-full w-full'>
      <h1 className='text-3xl font-bold my-12 mt-20 mb-10 mx-6 text-center lg:text-4xl xl:text-5xl'>
        Voters Guideline
      </h1>
      <div className='md:text-justify xl:mx-16 my-16'>
        <ul className='list-disc mx-6 my-10'>
          <p className='text-base mx-4 my-6 font-medium md:text-lg xl:text-xl 2xl:text-2xl'>
            You’re only eligible to register as a voter:
          </p>
          <EligibleVote/>
          <p className='text-base mx-4 my-6 font-medium md:text-lg xl:text-xl 2xl:text-2xl'>
            When you can be denied registration:
          </p>
          <DenyVote/>
        </ul>

        <ul className='mx-6 my-10'>
          <p className='text-lg mx-4 my-6 font-semibold md:text-xl xl:text-2xl 2xl:text-3xl'>
            Conduct During Election
          </p>
          <VoteConduct/>
        </ul>
      </div>
    </section>
  );
}