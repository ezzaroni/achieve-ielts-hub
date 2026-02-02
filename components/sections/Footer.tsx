import React, { useRef } from 'react';
import { MaxWidthWrapper } from '../../layout/MaxWidthWrapper';
import { ArrowUp } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Avatar = ({ src, color, className }: { src: string, color: string, className?: string }) => (
    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${color} p-1 shadow-xl transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300 cursor-pointer ${className}`}>
        <img src={src} className="w-full h-full rounded-full object-cover border-2 border-white" alt="Student" />
    </div>
);

const Globe3D = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Using standard earth texture but heavily tinted
  const texture = useTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');

  useFrame((state) => {
    if (groupRef.current) {
        groupRef.current.rotation.y += 0.0015; // Smooth slow rotation
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Sphere - Light Blue Theme */}
      <Sphere ref={globeRef} args={[2.5, 64, 64]}>
        <meshStandardMaterial 
            map={texture}
            color="#60a5fa" // Blue-400
            emissive="#2563eb" // Blue-600
            emissiveIntensity={0.1}
            roughness={0.5} 
            metalness={0.1}
        />
      </Sphere>
      
      {/* Atmosphere Halo Effect */}
      <Sphere args={[2.55, 64, 64]}>
        <meshBasicMaterial
            color="#bfdbfe" // Blue-200
            transparent
            opacity={0.15}
            side={THREE.BackSide}
        />
      </Sphere>

      {/* --- Floating Avatars in an Arc --- */}
      
      {/* Far Left (Lower) */}
      <Html position={[-2.2, 0.2, 0.5]} zIndexRange={[100, 0]}>
        <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80" color="bg-yellow-400" />
      </Html>

       {/* Mid Left (Higher) */}
      <Html position={[-1.2, 1.4, 1.2]} zIndexRange={[100, 0]}>
        <Avatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80" color="bg-sky-200" />
      </Html>

      {/* Center (Top) */}
      <Html position={[0, 1.9, 1.6]} zIndexRange={[100, 0]}>
         <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80" color="bg-sky-200" />
      </Html>

      {/* Mid Right (Higher) */}
      <Html position={[1.2, 1.4, 1.2]} zIndexRange={[100, 0]}>
         <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" color="bg-sky-200" />
      </Html>

      {/* Far Right (Lower) */}
      <Html position={[2.2, 0.2, 0.5]} zIndexRange={[100, 0]}>
         <Avatar src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&q=80" color="bg-yellow-400" />
      </Html>
    </group>
  );
};

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <footer className="bg-gray-50 pt-24 pb-0 relative overflow-hidden">
      <MaxWidthWrapper className="relative z-10 flex flex-col items-center text-center">
         
         {/* Top Text */}
         <div className="mb-0 md:mb-10 w-full relative z-20">
             <h2 className="text-gray-400 text-3xl md:text-5xl font-bold mb-2 tracking-tight">Boost your brain</h2>
             <h2 className="text-black text-4xl md:text-6xl font-bold mb-8 tracking-tight">Boost your score</h2>
         </div>

         {/* 3D Globe Container */}
         <div className="w-full h-[500px] md:h-[650px] relative -mt-16 md:-mt-24">
            <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
                <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#93c5fd" />
                
                <Globe3D />
                
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                    minPolarAngle={Math.PI / 2.5}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
            
            {/* Gradient Fade Overlay at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark via-dark/10 to-transparent pointer-events-none z-10"></div>
         </div>
      </MaxWidthWrapper>

      {/* Bottom Dark Bar */}
      <div className="bg-dark text-white py-12 px-6 md:px-12 rounded-t-[3rem] -mt-32 relative z-20 shadow-2xl border-t border-white/5">
         <MaxWidthWrapper className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-tr-xl rounded-bl-xl flex items-center justify-center">
                    <div className="w-5 h-5 bg-black rounded-full" />
                </div>
                <span className="font-bold text-xl">achieved</span>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-full p-1 pl-6 flex items-center w-full max-w-md shadow-lg">
                <input 
                    type="email" 
                    placeholder="Subscribe now" 
                    className="flex-grow bg-transparent text-black text-sm outline-none placeholder-gray-500"
                />
                <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition shadow-md">
                    Subscribe
                </button>
            </div>

            {/* Scroll Top */}
            <button 
                onClick={scrollToTop}
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-blue-600 transition shadow-lg shadow-blue-500/30 md:absolute md:right-12 md:-top-6 transform hover:-translate-y-1"
            >
                <ArrowUp className="w-6 h-6 text-white" />
            </button>
         </MaxWidthWrapper>
         
         <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs mt-12 border-t border-gray-800 pt-8 gap-4">
            <p>© 2024 Achieved.test. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
         </div>
      </div>
    </footer>
  );
};