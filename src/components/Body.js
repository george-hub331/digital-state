import banner from '../Desert.jpg';

const Body = () => {
  return (
    <div className="clear-space">

      <section style={{'backgroundImage': `url(${banner})`}} className="3sm:pt-[95px] md:h-[240px] md:pt-[9
        0px] 3xl:h-[340px] 3xl:pt-[145px] before:absolute before:content-[''] before:w-full before:h-full before:left-0 before:top-0 before:z-[1] before:bg-[rgba(10,124,0,81%)] h-[400px] align-center bg-cover content-banner bg-center border-box pt-[160px] relative">
        
        <p className="px-[10px] text-[400] mt-0 tracking-0 relative z-[2] banner-des text-[18px] text-white leading-[150%] text-center">Boost your Employability, Empower Yourself with skills of the future</p>
  </section>



    <section className="2xl:max-w-[1300px] 2xl:mx-auto 2xl:mt-[30px] 2xl:mb-[60px] 2xl:w-[90%] 2xl:overflow-hidden 2xl:border-box xl:mt-[40px] sm:w-[82%] w-[90%] overflow-hidden max-w-[1300px] my-auto border-box content-container content-detail-container">

    <div className="my-[20px]">
    <h2 className="mb-10 text-[20px] text-xl text-[500]">About</h2>
    <span>Whether you’re looking for a new job or want to start your own business, digital skills are the key to success and are a growing priority for employers and are becoming a near compulsory requirement for different kinds of jobs.</span>
    </div>

    <div className="my-[20px]">
    <span>Regardless of what you do, the demand for digital skills has grown within the job market. If you can prove to potential employers that you possess these skills, then your chances of being employed increase considerably.</span>
    </div>

    <div className="my-[20px]">
    <span>Digital States is an initiative created to prepare Nigerian youths for the future of work. Our approach to re-skilling the workforce is the curated digital skills training according to the demand-driven ICT skills that can connect workers and job seekers to the opportunities in the technology ecosystem and imbibe the ability to use digital tools to promote entrepreneurship. </span>
    </div>

    <div className="my-[20px]">
    <span>Face the future with confidence and with the skills and tools to thrive. Access free training, tools, and resources to help you grow your skills, career, or business.
    </span>
    </div>

    </section>

</div>

  );
}

export default Body;
