import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import robo from "../../public/robot.png"
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const page = () => {
  return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2>Get Interview-Ready with AI-Powered Pratice & Feedback</h2>
        <p className='text-lg'>
          practice on real interview questions & get instant feedback
        </p>
        <Button asChild className='btn-primary'>
          <Link href="/interview">Start an Interview</Link>
        </Button>
      </div>
      <Image src={robo} alt='robo-dude' width={400} height={400} className='max-sm:hidden' />

    </section>

    <section className='flex flex-col gap-6 mt-8'>

      <h2>Your Interview </h2>
<div className="interviews-section">
      {dummyInterviews.map((interview) =>(
        <InterviewCard {...interview} key={interview.id} />
      ))}

      {/* <p>You haven't taken any interview yet</p> */}
      
</div>

    </section>

    <section className='flex flex-col gap-6 mt-8'>

      <h2>Take an Interview </h2>
<div className="interviews-section">
       {dummyInterviews.map((interview) =>(
        <InterviewCard {...interview} key={interview.id} />
      ))}
      
</div>

    </section>
    
    </>
  )
}

export default page