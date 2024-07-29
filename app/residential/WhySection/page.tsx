import Image from "next/image";

const WhySection = () => {
  return (
    <div className="relative py-10 space-y-10 items-center justify-center flex flex-col bg-[#406150]">
      <div className="relative z-10 text-white">
        <div className="text-5xl text-center p-5">Why Choose Resco?</div>
        <div className="text-2xl text-center pt-5 pb-10">
        Based on client feedback, Resco consistently enhances home environments.
        </div>
        <div className="lg:flex space-y-10 md:space-y-0 md:space-x-20 text-xl">
        <div className="w-100 text-green-400 p-8 rounded-lg flex flex-col items-center justify-center">
                <Image
                  src="/images/icons/appointment.png"
                  width={100}
                  height={100}
                  alt="Satisfaction Icon"
                  className="h-20 w-20 white"/>         
            <div className="flex items-center space-x-2 pt-2">
              <div className="text-3xl">Efficiency</div>
            </div>
            <div className="pt-1 justify-center text-center text-1xl">at its Best</div>
          </div>
          <div className="w-100 text-green-400 sm: justify-center p-8 rounded-lg flex flex-col items-center justify-center">
                <Image
                  src="/images/icons/cosmetics.png"
                  width={100}
                  height={100}
                  alt="Satisfaction Icon"
                  className="h-20 w-20 white sm:"/>         
            <div className="flex items-center space-x-2 pt-2">
              <div className="text-3xl">Specialized Care</div>
            </div>
            <div className="pt-1 justify-center text-center text-1xl">for Delicate Items</div>
          </div>
          <div className="w-100 text-green-400 p-8 rounded-lg flex flex-col items-center justify-center">
                <Image
                  src="/images/icons/pet.png"
                  width={100}
                  height={100}
                  alt="Satisfaction Icon"
                  className="h-20 w-20 white"/>         
            <div className="flex items-center space-x-2 pt-2">
              <div className="text-3xl">Pet-Friendly</div>
            </div>
          </div>
          <div className="w-100 text-green-400  p-8 rounded-lg flex flex-col items-center justify-center">
                <Image
                  src="/images/icons/rating.png"
                  width={100}
                  height={100}
                  alt="Satisfaction Icon"
                  className="h-20 w-20 white"/>         
            <div className="flex items-center space-x-2 pt-2">
              <div className="text-4xl">150+</div>
            </div>
            <div className="pt-1 justify-center text-center text-1xl">Happy clients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
