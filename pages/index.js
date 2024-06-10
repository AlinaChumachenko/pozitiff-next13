import React, { useState, useEffect } from "react";

import Block from "../components/Block/Block.js";
import { ModalBlock } from "../components/Block/ModalBlock.js";
import { projects } from "../data/projects.js";
import Spinner from "../components/Spiner.js";

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/projects`);
    const data = await response.json();
    if (!data) {
      return { notFound: true };
    }

    return { props: { projects: data } };
  } catch {
    return { props: { projects: null } };
  }
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API_HOST}/projects`);
        const data = await response.json();
        if (!data) {
          throw new Error("No data received");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <div className="container mx-auto mt-32" style={{ width: "fit-content" }}>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid-cols-1 lg:grid lg:grid-cols-2">
            {projects.map((project, index) => (
              <Block
                key={index}
                title={project.title}
                link={project.path}
                imagePath={project.imagePath}
                width={project.width}
                height={project.height}
                background={project.background}
                padding={project.padding}
                description={project.description}
                service={project.service}
              />
            ))}
          </div>
        )}
        <ModalBlock />
      </div>
    </main>
  );
}
