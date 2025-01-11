import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[18px] sm:gap-6 py-[150px]">
      <div className="text-center font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
        Easiest way to <br /> Find Your Dream Car.
      </div>
      <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        repellat et natus. Quis, laboriosam excepturi!
      </p>
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
        <Link
          href="/vehicles"
          aria-current="page"
          className="h-10 px-[16px] py-[10px] text-small font-medium leading-5 text-background bg-default-foreground rounded-full"
        >
          Want to drive a super car?
        </Link>
      </div>
    </div>
  );
};

export default Hero;
