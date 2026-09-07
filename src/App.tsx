/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import Scene from './components/Scene';
import Overlay from './components/Overlay';

export default function App() {
  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ScrollControls pages={7} damping={0.1}>
          <Scene />
          <Overlay />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
