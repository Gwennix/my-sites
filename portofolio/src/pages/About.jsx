import images from "../ImagesData";

const VerticalText = ({ text }) => {
    return (
        <div className="flex flex-col items-start text-left">
            {text.split('').map((char, index) => (
                <span key={index} className="text-2xl font-bold">
                    {char}
                </span>
            ))}
        </div>
    );
};

const About = () => {
    return ( 
        <>
        <div className="flex justify-start mt-14 w-full px-10">

            <div className="flex flex-col items-start gap-8 p-10 w-1/4">
                <VerticalText text="PROFILE" />
            </div>

            <div className="flex flex-row items-center justify-start w-3/4 "> 

                <div className="profile_text w-1/2">
                <h2>Gwendolyn Hengstmengel</h2>
                <h2>Rotterdam</h2>
                <h2>Student</h2>
                <a rel="Github" href="https://github.com/Gwennix"></a>
                <h2>Github: https://github.com/Gwennix</h2>
                <h2>LinkedIn: https://www.linkedin.com/in/gwendolyn-h-7243862a5/</h2>
            </div>

                <div>
                    <img className="object-cover w-56 h-96" src={images.portret} alt="profile" />
                </div>
            </div>
        </div>

        <hr className="mt-10 mx-50 w-4/5 border-t-2 border-white" />

        <div className="flex justify-start mt-14 w-full px-10">

            <div className="flex flex-col items-start gap-8 p-10 w-1/4">
                <VerticalText text="QUALITIES" />
            </div>

            <div className="flex flex-col justify-start w-3/4 space-y-8">

                <div className="flex justify-evenly gap-10">
                    <img className="w-36 h-36" src={images.team} alt="team" />
                    <img className="w-36 h-36" src={images.focus} alt="focus" />
                    <img className="w-36 h-36" src={images.check} alt="check" />
                    <img className="w-36 h-36" src={images.creative} alt="creative" />
                </div>

                <div className="flex justify-evenly gap-12 mt-5">
                    <h2 className="text-lg font-bold">Teamwork</h2>
                    <h2 className="text-lg font-bold">Focused</h2>
                    <h2 className="text-lg font-bold">Detailed</h2>
                    <h2 className="text-lg font-bold">Resourceful</h2>
                </div>
            </div>
        </div>

        <div className="mt-10 mx-50 w-4/5 border-t-2 border-white"></div>

        <div className="flex justify-start mt-14 w-full px-10">

            <div className="flex flex-col items-start gap-8 p-10 w-1/4">
                <VerticalText text="MOTIVATIONS" />
            </div>

            <div className="flex flex-col justify-start w-2/4">
                <h1 className="text-2xl font-semibold mb-6">"Programming isn’t about what you know; it’s about what you can figure out."</h1>
                
                <div className="self-center  bg-white shadow-lg mt-14 p-8 text-left rounded-lg">
                <p>Hoi, mijn naam is Gwendolyn maar iedereen noemt me Gwen!
                Geboren en opgegroeid in Rotterdam. Ik ben bezig met een Software Development opleiding in Schiedam
                waarmee ik een goede developer mee hoopt te worden.
                Ik heb HTML & CSS al goed onder de knie en ben nu bezig met het leren van Javascript. Later ga ik
                het ook uitbreiden met React.
            </p>
            <p>Als kind was ik al veel bezig met computers.
                Ik werkte als 5-jarige al met Windows 3.1 en groeide mee met elke versie en de technologische
                veranderingen ervan.
                In mijn ogen was deze metalen wonderdoos vol met eindeloze mogelijkheden een uitweg van de chaos in
                de wereld naar de rust van een digitale landschap waar je orde kon brengen met een klik van de muis.
            </p>
            <p>Ik wil die magie delen door software en sites te ontwikkelen waardoor mensen deze mooie virtuele wereld
                ook voor zichzelf kunnen ervaren.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;


