"use client"
import React from 'react'
import Typewriter from "typewriter-effect"; 

const Typer = () => {
  return (
    <div className="text-2xl font-semibold flex gap-2">
      <h1>Hi, I`am</h1>
      <Typewriter       
        onInit={(typewriter) => {
          typewriter
            .typeString("Jovan Panji Pratama")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Full Stack Developer")
            .pauseFor(1000)
            .deleteAll()
            .start()
        }}
        options={
          {
            loop: true,
            autoStart: true
          }
        }
      />
    </div>
  );
}

export default Typer