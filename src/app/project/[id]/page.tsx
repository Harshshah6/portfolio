"use client";
import { ArrowLeft, Download, ExternalLink, Github, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
// import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Image } from "antd";
import { projectsData } from "@/lib/data";
import { useRouter } from "next/navigation";
import ReactMarkdown from 'react-markdown';

function Page({ params }: { params: Promise<{ id: number }> }) {
  const [projectId, setprojectId] = useState(-1);
  const [isLoading, setisLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function fetch() {
      const projectId = (await params).id;
      setprojectId(projectId);
      setisLoading(false);
    }
    fetch();
  });

  if (isLoading)
    return (
      <main className="w-screen h-screen flex items-center justify-center">
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      </main>
    );

  if (projectId < 0 || projectId >= projectsData.length) return notFound();

  const projectData = projectsData.at(projectId);
  if (projectData == null) return notFound();

  const imageData = projectData.screenShots;
  const chipsData = projectData.tags;

  return (
    <main className="w-screen min-h-screen font-sans container m-auto overflow-x-hidden">
      <div className="container m-auto p-4">
        <ArrowLeft
          className="cursor-pointer size-8"
          onClick={() => {
            router.back();
          }}
        />
        <div className="mt-4">
          {/* <Image src={nextImg.src} hidden className="hidden border m-auto w-full md:max-w-5xl md:max-h-[60%] object-contain aspect-video md:my-8 my-4 rounded-md" alt="" width={1040} height={1040} /> */}

          <div className="">
            <h1 className="text-4xl md:text-5xl md:place-self-start">
              {projectData.title}
            </h1>
            <p className="text-primary/70 text-lg md:text-xl mt-2">
              {projectData.description}
            </p>
          </div>
        </div>

        <div className="w-fit mt-4 gap-3 items-center justify-evenly flex flex-wrap">
          <Link href={projectData.liveUrl} target="_blank">
            <Button variant="default" className="border text-base">
              {projectData.liveUrl.includes("apk")?(<><Download /> Download APK</>):(<><ExternalLink/> View live</>)}
            </Button>
          </Link>
          <Link href={projectData.url} target="_blank">
            <Button variant="secondary" className="text-base">
              <Github /> View on Github
            </Button>
          </Link>
        </div>

        <h1 className="mt-8 text-3xl font-bold">Screenshots</h1>
        <div className="flex gap-4 items-center flex-wrap mt-2">
          {imageData.length == 0 ? (
            <>No Screenshots :(</>
          ) : (
            <Image.PreviewGroup>
              {imageData.map((item, index) => (
                <Image
                  key={index}
                  placeholder={
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  }
                  src={item}
                  className="border cursor-pointer flex-auto hover:scale-105 transition duration-300 w-min max-h-[45vh] object-contain aspect-auto rounded-md"
                  alt=""
                />
              ))}
            </Image.PreviewGroup>
          )}
        </div>

        <div className="mt-8">
          <h1 className="mt-8 text-3xl font-bold">About This Project</h1>
          {/* <p className="text-primary/70">
            {projectData.longDescription.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p> */}

          <ReactMarkdown className="text-primary/70"
            components={
              {
                h1:(props)=>(<h1 className="text-3xl font-bold mt-4" {...props}/>),
                h2:(props)=>(<h2 className="text-2xl font-bold mt-2 mb-1" {...props}/>),
                p:(props)=>(<p className="text-xl text-primary/70" {...props}/>),
                ul:(props)=>(<ul className="pl-8" {...props}/>),
                ol:(props)=>(<ul className="pl-8" {...props}/>),
                li:(props)=>(<li className="list-disc list-outside" {...props}/>),
                a:(props)=>(<a className="text-blue-500 underline cursor-pointer" {...props}/>),
              }
            }
          >
            {projectData.longDescription}
          </ReactMarkdown>

          <h1 className="text-3xl font-bold mt-8">Built with</h1>
          <div className="mt-4 flex flex-wrap gap-4">
            {chipsData.map((item, index) => (
              <motion.div
                key={index}
                variants={variants}
                initial={"initial"}
                whileInView={"animate"}
                custom={index}
                className="bg-secondary w-fit px-6 py-2 rounded-md"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    //use the custom value here
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, //add delay according to the index
    },
  }),
};

function notFound() {
  return (
    <main className="w-screen h-screen items-center p-4">
      <div className="container m-auto flex flex-col items-center justify-center w-full h-full gap-4">
        <p className="text-xl text-center">This project could not be found.</p>
        <Link href={"/"}>
          <Button>
            <ArrowLeft />
            Back to homepage
          </Button>
        </Link>
      </div>
    </main>
  );
}

export default Page;
