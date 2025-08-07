'use client';

import React from 'react'
import { FaDownload } from 'react-icons/fa6'
import { Button } from './button'
import { toast } from 'sonner';

export default function DownloadCVButton() {
    return (
        <Button onClick={() => { toast.error("Unknown Error Occured.")}} size={"lg"} className='w-full cursor-pointer p-2 flex-1 flex items-center justify-center gap-2 text-md'>
            <FaDownload className='size-4' /> Download CV
        </Button>
    )
}
