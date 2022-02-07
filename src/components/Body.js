import banner from '../images/Desert.jpg';
import image1 from '../images/3.png';
import image2 from '../images/4.png';
import image3 from '../images/5.png';
import image4 from '../images/6.png';
import image5 from '../images/7.png';
import image6 from '../images/8.png';
import image7 from '../images/9.png';

const Body = () => {
  return (
    <div className="clear-space">
      <section style={{'backgroundImage': `url(${banner})`}} className="3sm:pt-[95px] md:h-[240px] md:pt-[9
        0px] 3xl:h-[340px] 3xl:pt-[145px] before:absolute before:content-[''] before:w-full before:h-full before:left-0 before:top-0 before:z-[1] before:bg-[rgba(10,124,0,81%)] h-[400px] align-center bg-cover content-banner bg-center border-box pt-[160px] relative">
        
        <p className="px-[10px] text-[400] mt-0 tracking-0 relative z-[2] banner-des text-[18px] text-white leading-[150%] text-center">Boost your Employability, Empower Yourself with skills of the future</p>
  </section>


      <section className="mx-auto 2xl:max-w-[1300px] py-[30px] mt-[30px] mb-[60px] 2xl:w-[90%] 2xl:overflow-hidden 2xl:border-box xl:mt-[40px] sm:w-[82%] w-[90%] overflow-hidden max-w-[1300px] my-auto border-box content-container content-detail-container">

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

    <h2 className="mb-10 text-[20px] text-xl text-[500]">Zones</h2>

    <div className="my-[20px] w-full flex overflow-x-scroll h-auto zones">
      

          <a className="flex w-[240px] h-fit rounded-[1rem]  flex-col hover:bg-[#ebebeb] transition-background delay-900 bg-[#f5f5f5] p-[10px] m-[10px] min-w-[240px] no-underline" target="_blank" rel="noreferrer" href="https://northcentral.digitalstates.ng/">
          <div className="w-full rounded-[1rem] overflow-hidden">
          <img src={image1} alt="North-Central"/></div>
          <p className="w-full text-center text-black font-bold mt-[10px]">North Central</p>
        </a>

          <a className="flex w-[240px] h-fit rounded-[1rem]  flex-col hover:bg-[#ebebeb] transition-background delay-900 bg-[#f5f5f5] p-[10px] m-[10px] min-w-[240px] no-underline" target="_blank" rel="noreferrer" href="https://northwest.digitalstates.ng/">
          <div className="w-full rounded-[1rem] overflow-hidden">
            <img src={image2} alt="North-West"/></div>
          <p className="w-full text-center text-black font-bold mt-[10px]">North West</p>
        </a>

          <a className="flex w-[240px] h-fit rounded-[1rem]  flex-col hover:bg-[#ebebeb] transition-background delay-900 bg-[#f5f5f5] p-[10px] m-[10px] min-w-[240px] no-underline" target="_blank" rel="noreferrer" href="https://east.digitalstates.ng/">
          <div className="w-full rounded-[1rem] overflow-hidden">
          <img src={image3} alt="East"/></div>
          <p className="w-full text-center text-black font-bold mt-[10px]">East</p>
        </a>

          <a className="flex w-[240px] h-fit rounded-[1rem]  flex-col hover:bg-[#ebebeb] transition-background delay-900 bg-[#f5f5f5] p-[10px] m-[10px] min-w-[240px] no-underline" target="_blank" rel="noreferrer" href="https://southwest.digitalstates.ng/">
            <div className="w-full rounded-[1rem] overflow-hidden">
              <img src={image4} alt="South West" /></div>
            <p className="w-full text-center text-black font-bold mt-[10px]">South West</p>
          </a>

          <a className="flex w-[240px] h-fit rounded-[1rem]  flex-col hover:bg-[#ebebeb] transition-background delay-900 bg-[#f5f5f5] p-[10px] m-[10px] min-w-[240px] no-underline" target="_blank" rel="noreferrer" href="https://northeast.digitalstates.ng/">
            <div className="w-full rounded-[1rem] overflow-hidden">
              <img src={image5} alt="North East" /></div>
            <p className="w-full text-center text-black font-bold mt-[10px]">North East</p>
          </a>

          <a className="flex w-[240px] h-fit rounded-[1rem]  flex-col hover:bg-[#ebebeb] transition-background delay-900 bg-[#f5f5f5] p-[10px] m-[10px] min-w-[240px] no-underline" target="_blank" rel="noreferrer" href="https://southsouth.digitalstates.ng/">
            <div className="w-full rounded-[1rem] overflow-hidden">
              <img src={image6} alt="South South" /></div>
            <p className="w-full text-center text-black font-bold mt-[10px]">South South</p>
          </a>

          <a className="flex w-[240px] h-fit rounded-[1rem]  flex-col hover:bg-[#ebebeb] transition-background delay-900 bg-[#f5f5f5] p-[10px] m-[10px] min-w-[240px] no-underline" target="_blank" rel="noreferrer" href="https://southeast.digitalstates.ng/">
            <div className="w-full rounded-[1rem] overflow-hidden">
              <img src={image7} alt="South East" /></div>
            <p className="w-full text-center text-black font-bold mt-[10px]">South East</p>
          </a>
    </div>
    </section>
</div>

  );
}

export default Body;
