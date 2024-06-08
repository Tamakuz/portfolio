"use client";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Particles = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create star particles
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const starMaterial = new THREE.PointsMaterial({ color: 0x888888 });
    const starParticles = new THREE.Points(starGeometry, starMaterial);
    scene.add(starParticles);

    // Create meteor particles
    const meteorGeometry = new THREE.BufferGeometry();
    const meteorVertices = [];
    const meteorSpeeds: number[] = [];
    for (let i = 0; i < 100; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      meteorVertices.push(x, y, z);
      meteorSpeeds.push(0.02 + Math.random() * 0.05);
    }
    meteorGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(meteorVertices, 3)
    );
    const meteorMaterial = new THREE.PointsMaterial({ color: 0xff8800 });
    const meteorParticles = new THREE.Points(meteorGeometry, meteorMaterial);
    scene.add(meteorParticles);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      starParticles.rotation.x += 0.001;
      starParticles.rotation.y += 0.001;

      const positions = meteorGeometry.attributes.position.array;
      for (let i = 0; i < meteorVertices.length; i += 3) {
        positions[i + 1] -= meteorSpeeds[i / 3]; // Move y position downward
        if (positions[i + 1] < -1000) {
          // Reset position if it goes below a certain point
          positions[i] = THREE.MathUtils.randFloatSpread(2000);
          positions[i + 1] = 1000;
          positions[i + 2] = THREE.MathUtils.randFloatSpread(2000);
        }
      }
      meteorGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={cn(
        "fixed top-0 left-0 w-full h-full z-[-1]",
        isMounted && theme === "dark" ? "block" : "hidden"
      )}
    />
  );
};

export default Particles;
