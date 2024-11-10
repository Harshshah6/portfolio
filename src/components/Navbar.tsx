'use client'
import React, { Key, useState } from 'react'
import { ThemeToggler } from './ui/theme-toggler'
import { Tab, Tabs } from '@nextui-org/tabs'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

function Navbar() {

  let tabs = [
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
  ];

  const [selected, setSelected] = useState("home");
  const setActiveTab = (key: Key) => {
    setSelected(key.toString());
  }
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  console.log(selected);
  

  return (
    <nav className="absolute top-0 left-0 right-0 w-screen flex items-center justify-around border border-red h-12 py-6">
      <div className='flex-1 flex items-center pl-4 md:pl-0 md:justify-center'>
        <h1 className='font-bold text-2xl cursor-pointer'>Harsh Shah</h1>
      </div>
      <div className="hidden flex-1 md:flex flex-col items-center justify-center">
        <div className='rounded-md'>
          <Tabs aria-label="Dynamic tabs"
            selectedKey={selected}
            onSelectionChange={setActiveTab}
            items={tabs}
            className='bg-secondary rounded-md overflow-hidden'>
            {(item) => (
              <Tab className='rounded-md overflow-hidden' key={item.id} title={item.label} />
            )}
          </Tabs>
        </div>
      </div>
      <div className='flex-1 hidden md:flex justify-end'>
        <ThemeToggler />
      </div>
      <div className='block md:hidden pr-4'>
        <MenuRoundedIcon className='cursor-pointer' onClick={() => { setIsDrawerOpen(!isDrawerOpen) }} />
      </div>
      {
        isDrawerOpen &&
        (
          <div className='transistion duration-300 animate-in slide-in-from-right-[80%] absolute right-0 top-0 h-screen bg-secondary/95 w-[70%] flex flex-col'>
            <ClearRoundedIcon className='cursor-pointer place-self-end m-4' onClick={() => { setIsDrawerOpen(!isDrawerOpen) }} />
            <div className="flex-1 flex justify-center">
              <Tabs aria-label="Dynamic tabs"
                selectedKey={selected}
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
          </div>
        )
      }
    </nav>
  )
}

export default Navbar
