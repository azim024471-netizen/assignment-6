
import userImg from "../../assets/user.png";
import boxImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";
import StepsPath from "./StepsPath";


const Steps = () => {

    const steps = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    img: userImg,
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    img: boxImg,
  },
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    img: rocketImg,
  },
];


    return (
       

         <div className="px-50 py-30 mx-auto ">

        <div className='text-center mb-10 space-y-4'>
             <h3 className='font-extrabold text-5xl'>Get Started in 3 Steps</h3>
            <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
        </div> 

        <div className="flex gap-4">
            {steps.map((step) => <StepsPath key={step.id} step={step}></StepsPath>)}
        </div>
      
    </div>

    );
};

export default Steps;