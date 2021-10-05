import React from 'react';

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
          <li className=' text-xs mx-10 my-4 sm:text-sm md:text-base xl:text-lg 2xl:text-xl'>
            If you are a student in this school, undertaking a course of your
            choice in your academic years
          </li>
          <p className='text-base mx-4 my-6 font-medium md:text-lg xl:text-xl 2xl:text-2xl'>
            When you can be denied registration:
          </p>
          <li className='text-xs mx-10 my-4 sm:text-sm md:text-base xl:text-lg 2xl:text-xl'>
            {' '}
            If you are not a student of this school
          </li>
          <li className='text-xs mx-10 my-4 sm:text-sm md:text-base xl:text-lg 2xl:text-xl'>
            If the school declares you to have violated the voters requirements
            (This may include general misconduct)
          </li>
        </ul>

        <ul className='mx-6 my-10'>
          <p className='text-lg mx-4 my-6 font-semibold md:text-xl xl:text-2xl 2xl:text-3xl'>
            Conduct During Election
          </p>

          <li className='text-xs mx-4 my-4 sm:text-sm md:text-base xl:text-lg 2xl:text-xl'>
            All Voters are expected to familiarize with the candidate of their
            choice and read their campaign promise
          </li>
          <li className='text-xs mx-4 my-4 sm:text-sm md:text-base xl:text-lg 2xl:text-xl'>
            All Voters are expected to vote for just one candidate
          </li>
          <li className='text-xs mx-4 my-4 sm:text-sm md:text-base xl:text-lg 2xl:text-xl'>
            All Voters are expected to to conduct themselves properly offline
            and Online during the election
          </li>
          <li className='text-xs mx-4 my-4 sm:text-sm md:text-base xl:text-lg 2xl:text-xl'>
            Note no Winner is declared until after the voting session and would
            be announced by the WTSC Electoral board
          </li>
          <li className='text-sm mx-4 my-4 sm:text-sm md:text-base xl:text-lg 2xl:text-xl'>
            Report any problem and Ask questions if needed
          </li>
        </ul>
      </div>
    </section>
  );
}
