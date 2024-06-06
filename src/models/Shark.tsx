import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { AnimationMixer } from "three";
import { useFrame } from "@react-three/fiber";

const Shark = (props: any) => {
    const { scene, animations } = useGLTF("/models/shark.glb");
    const mixer = new AnimationMixer(scene);

    useEffect(() => {
        const action = mixer.clipAction(animations[0]); // Assuming the first animation is "Attack"
        action.play();
        action.setEffectiveTimeScale(1.5);

        return () => {
            action.stop(); // Stop the specific action
            mixer.stopAllAction(); // Ensure all actions are stopped
        };
    }, [animations, mixer]);

    useFrame((state, delta) => {
        mixer.update(delta);
    });

    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Shark;
