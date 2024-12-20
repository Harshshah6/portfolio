'use client'
import React, { Key, useState } from 'react'
import { ThemeToggler } from './ui/theme-toggler'
import { Tab, Tabs } from '@nextui-org/tabs'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useRouter } from 'next/navigation';
import useScrollSpy from '../../hooks/useScrollSpy';

const tabs = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export const sectionIdList: string[] = tabs.map((tab) => tab.id);

function Navbar() {

  const activeLink = useScrollSpy(sectionIdList);

  const router = useRouter()
  const [, setSelected] = useState(activeLink);
  const setActiveTab = (key: Key) => {
    setSelected(key.toString());
    //router.push("#"+key.toString())
    scrollToSection(key.toString())
  }
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="z-50 fixed top-0 left-0 right-0 w-screen flex items-center justify-around border border-red h-12 py-6 backdrop-blur-sm">
      <div className='flex-1 flex items-center pl-4 md:pl-0 md:justify-center'>
        <h1 className='font-bold text-2xl cursor-pointer' onClick={() => { setSelected("home"); router.push("") }}>Harsh Shah</h1>
      </div>
      <div className="hidden flex-1 md:flex flex-col items-center justify-center">
        <div className='rounded-md'>
          <Tabs aria-label="Dynamic tabs"
            selectedKey={activeLink}
            onSelectionChange={setActiveTab}
            items={tabs}
            className='w-fit bg-secondary rounded-md overflow-hidden border'>
            {(item) => (
              <Tab className='w-full rounded-md overflow-hidden' key={item.id} title={item.label} />
            )}
          </Tabs>
        </div>
      </div>
      <div className='flex-1 hidden md:flex justify-end mr-4'>
        <ThemeToggler />
      </div>
      <div className='block md:hidden pr-4'>
        <MenuRoundedIcon className='cursor-pointer' onClick={() => { setIsDrawerOpen(!isDrawerOpen) }} />
      </div>

      {
        // isDrawerOpen && (
        //   <div className={'mr-2 transistion duration-300 animate-in slide-in-from-right-[80%] absolute right-0 top-0 h-screen bg-secondary/95 w-[70%] flex flex-col'}>
        //     <ClearRoundedIcon className='cursor-pointer place-self-end m-4' onClick={() => { setIsDrawerOpen(!isDrawerOpen) }} />
        //     <div className="flex-1 flex justify-center">
        //       <Tabs aria-label="Dynamic tabs"
        //         selectedKey={activeLink}
        //         onSelectionChange={setActiveTab}
        //         items={tabs}
        //         isVertical
        //         color='secondary'
        //         className='rounded-md overflow-hidden h-fit'>
        //         {(item) => (
        //           <Tab className='rounded-md overflow-hidden' key={item.id} title={item.label} />
        //         )}
        //       </Tabs>
        //     </div>
        //     <div className="items-end flex justify-end z-10">
        //       <ThemeToggler />
        //     </div>
        //   </div>
        // )

        (
          <div className={`mr-2 transistion duration-300 ${isDrawerOpen ? 'animate-in slide-in-from-right-[80%] absolute right-0 top-0' :'animate-out slide-out-to-right-[80%] absolute top-0 -right-[80%]'}  h-screen bg-secondary/95 w-[70%] flex flex-col`}>
            <ClearRoundedIcon className='cursor-pointer place-self-end m-4' onClick={() => { setIsDrawerOpen(!isDrawerOpen) }} />
            <div className="flex-1 flex justify-center">
              <Tabs aria-label="Dynamic tabs"
                selectedKey={activeLink}
                onSelectionChange={setActiveTab}
                items={tabs}
                isVertical
                color='secondary'
                className='rounded-md overflow-hidden h-fit'>
                {(item) => (
                  <Tab className='rounded-md overflow-hidden' key={item.id} title={item.label} />
                )}
              </Tabs>
            </div>
            <div className="items-end flex justify-end z-10">
              <ThemeToggler />
            </div>
          </div>
        )

      }

    </nav>
  )
}

export default Navbar
