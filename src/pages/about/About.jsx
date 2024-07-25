import bg from "../../assets/about/istockphoto-1137054887-2048x2048.jpg";

const About = () => {
  return (
    <div className="">
      <div className="">
        <div>
          <img className="" src={bg} alt="About Us" />
        </div>
        <div className="-mt-[75px] md:-mt-40">
          <h2 className="text-xl md:text-4xl text-center">About Us</h2>
          <h3 className="text-xl md:text-3xl font-semibold text-center text-primary font-serif">
            I am Gaurav Kumar
          </h3>
          <p className="uppercase text-center md:text-2xl">
            Show booking Manager
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
