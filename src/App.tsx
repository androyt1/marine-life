import Shark from "./models/Shark";
import { Canvas } from "@react-three/fiber";
import { useProgress, Html } from "@react-three/drei";
import { Suspense } from "react";

const App = () => {
    const { loaded } = useProgress();
    return (
        <div className='overflow-x-hidden min-h-screen max-w-[1000px] mx-auto flex flex-col items-center bg-gradient-to-b from-blue-900 to-blue-950 p-5'>
            <div className='h-[150px] w-full md:w-[380px] mx-auto mb-5 fish-animation'>
                <Canvas className='h-full w-full'>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-5, 5, 0]} intensity={3} />
                    <Suspense
                        fallback={
                            <Html className='flex justify-center items-start h-[100px] w-full md:w-[300px] text-slate-50 font-semibold text-xl'>
                                {loaded} %
                            </Html>
                        }>
                        <Shark
                            position-y={-0.9}
                            position-x={5}
                            scale={0.6}
                            rotation-x={Math.PI * 2.1}
                            rotation-y={Math.PI * 2.4}
                        />
                    </Suspense>
                </Canvas>
            </div>
            <div className='w-full flex flex-col justify-start items-center text-center'>
                <h1 className='text-4xl md:text-8xl font-bold uppercase text-white'>Hi There</h1>
                <h2 className='text-2xl md:text-5xl font-bold gradient-text mt-4'>
                    Lorem, ipsum dolor.
                </h2>
                <p className='text-slate-300 max-w-3xl text-center mt-4 px-2 md:px-0'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum vitae ullam
                    autem delectus hic minus omnis cupiditate laborum unde repellendus consectetur
                    fugit, similique et praesentium voluptatibus consequuntur? A, placeat
                    reprehenderit?
                </p>
            </div>
            <section className='grid grid-cols-1 md:grid-cols-3 gap-10 text-white mt-10 w-full'>
                <div className='border-2 rounded-xl p-5 bg-blue-800 bg-opacity-75 shadow-lg animated-border hover:transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatem
                        facere quod exercitationem cupiditate est, atque maiores ducimus nesciunt
                        cumque!
                    </p>
                </div>
                <div className='border-2 rounded-xl p-5 bg-blue-800 bg-opacity-75 shadow-lg animated-border hover:transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatem
                        facere quod exercitationem cupiditate est, atque maiores ducimus nesciunt
                        cumque!
                    </p>
                </div>
                <div className='border-2 rounded-xl p-5 bg-blue-800 bg-opacity-75 shadow-lg animated-border hover:transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatem
                        facere quod exercitationem cupiditate est, atque maiores ducimus nesciunt
                        cumque!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default App;
