import Image from "next/image";
export default function News() {
  return (
    <section className=" ">
      <div className="container mx-auto bg-body pt-20 pb-10 min-h-screen lg:pt-22">
        <h1 className="font-bold text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl">
          Malawi’s top community <br className="lg:block hidden" />{" "}
          <span>for tech enthusiasts</span>.
        </h1>
        <div className="lg:flex">
          <div className=" mt-8 md:mt-16 space-y-16 text-center lg:text-left lg:mr-auto lg:w-7/12">
            <p className="text-grayParagraphText text-3xl font-medium lg:w-11/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              reprehenderit in animi repellat. Expedita fugit nemo architecto,
              ratione eius numquam?
            </p>

            <div className="grid grid-cols-2 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
              <a className="border border-primary px-4 py-1 rounded-full font-medium text-lg text-primary">
                Join Now
              </a>
              <a className="border border-primary px-3 py-1 rounded-full font-medium text-lg text-primary">
                Learn More
              </a>
            </div>

            <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
              <img
                src="/tnm-logo.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt="brand"
              />
              <img
                src="/nbm-logo.png"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt="brand"
              />
              <img
                src="/ictam-logo.png"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt="brand"
              />
              <img
                src="/angle-dimentions.png"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt="brand"
              />
            </div>
          </div>
          <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
            <div className="relative w-full">
              <div
                aria-hidden="true"
                className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
              ></div>
              <Image
                className="transform -scale-x-100"
                src="/hero-img.png"
                width={2500}
                height={2500}
                alt="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
