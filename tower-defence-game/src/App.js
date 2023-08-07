import { Canvas } from "@react-three/fiber";
import Level1 from "./scenes/Level1";
import Tower from "./components/Tower";
import Grass from "./components/Grass";

function App() {
  return (
    // <div style={{ width: "100vw", height: "100vh" }}></div>
    <div style={{ height: "100vh" }}>
      {/* <Canvas>
        <mesh>
          <planeGeometry args={ [0.4, 0.4] } />
          <meshStandardMaterial color="hotpink"/>
        </mesh>
      </Canvas> */}

      <Canvas orthographic>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {/* <Tower position={[1, 1]} />
        <Tower position={[3, 1]} /> */}

        <Tower position={[0, 0]} />

        <Level1>
          
        </Level1>
      </Canvas>
    </div>
  );
}

export default App;
