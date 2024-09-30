'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import { AppBar, Toolbar } from '@mui/material';
import theme from './theme';
import { FaBars } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className="tw-justify-center">
          <div className="tw-flex-1">
            <FaBars />
          </div>
          <div className="logo-box">
            <a href="/" className="tw-font-bold">
            로고
          </a>
          </div>
          <div className="tw-flex-1 tw-flex tw-justify-end">글쓰기</div>
        </Toolbar>
      </AppBar>
      <section className='tw-h-screen tw-flex tw-items-center tw-justify-center tw-text-[2rem]'>
          section
      </section>
    </>
  );
}
