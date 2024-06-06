import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { AnimationMixer } from "three";
import { useFrame, MeshProps } from "@react-three/fiber";

type SharkProps = MeshProps & {
    rotationX: number;
    rotationY: number;
};

const Shark = ({ rotationX, rotationY, ...props }: SharkProps) => {
    const { scene, animations } = useGLTF("/models/shark.glb");
    const mixer = new AnimationMixer(scene);

    useEffect(() => {
        const action = mixer.clipAction(animations[0]);
        action.play();
        action.setEffectiveTimeScale(1.5);

        return () => {
            action.stop();
            mixer.stopAllAction();
        };
    }, [animations, mixer]);

    useFrame((_state, delta) => {
        mixer.update(delta);
    });

    return (
        <mesh {...props} rotation={[rotationX, rotationY, 0]}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Shark;
