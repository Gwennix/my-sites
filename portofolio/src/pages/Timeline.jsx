import TimelineData from "../TimelineData";

const Timeline = () => {
  return (
    <div className="min-h-screen text-white m-5 flex flex-col">
      <main className="timeline-container py-16 max-w-6xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white -translate-x-1/2"></div>

        {TimelineData.map(({ year, imgSrc, imgId, alt, title, align }, idx) => (
          <div
            key={idx}
            className={`w-1/2 px-6 mb-12 relative ${
              align === "left" ? "left-0 text-right" : "left-1/2 text-left"
            }`}
          >
            <div className="bg-white text-black  rounded-lg p-6 relative inline-block max-w-sm">
              <div
                className={`absolute top-6 w-6 h-6 bg-white border-4 border-orange-400 rounded-full z-10 ${
                  align === "left" ? "right-[-2.2rem]" : "left-[-2.2rem]"
                }`}
              ></div>

              <h2 className=" text-2xl mb-2">{year}</h2>
              <img
                src={imgSrc}
                alt={alt}
                id={imgId || undefined}
                className="my-4 object-contain max-w-full h-auto"
              />
              <h3 className="font-sans">{title}</h3>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Timeline;


