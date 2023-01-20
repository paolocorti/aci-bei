import Link from "next/link";
import { useEffect, useState } from "react";
import { useContent, getContent, getLink } from "../utils";

const HomeMenu = ({ active, setActive, course, lang }) => {
  const content = useContent();

  return (
    <div className="flex flex-col">
      <div
        className="relative"
        onMouseEnter={() => setActive("course")}
        onMouseLeave={() => setActive(null)}
      >
        <div className="border-4 border-blue py-1 px-4 w-fit text-md font-bold text-blue my-2 cursor-pointer">
          {getContent(content, `${course}_menu_1`)}
        </div>
        {active === "course" && (
          <div className="border-4 flex-col z-50 flex border-red border-dashed top-0 p-4 w-fit text-lg font-bold text-blue my-2 absolute left-[280px] max-w-[280px]">
            <Link passHref href={`/${lang}/course?active=1`}>
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_1_1`)}
              </div>
            </Link>
            <Link passHref href={`/${lang}/course?active=2`}>
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_1_2`)}
              </div>
            </Link>
            <Link
              passHref
              target="_blank"
              rel="noreferrer"
              href={getLink(content, `${course}_menu_1_3`)}
            >
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_1_3`)}
              </div>
            </Link>
            <Link
              passHref
              target="_blank"
              rel="noreferrer"
              href={getLink(content, `${course}_menu_1_4`)}
            >
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_1_4`)}
              </div>
            </Link>
            <Link
              passHref
              target="_blank"
              rel="noreferrer"
              href={getLink(content, `${course}_menu_1_5`)}
            >
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_1_5`)}
              </div>
            </Link>
          </div>
        )}
      </div>
      <div
        className="relative "
        onMouseEnter={() => setActive("teachings")}
        onMouseLeave={() => setActive(null)}
      >
        <div className="border-4 border-blue py-1 px-4 w-fit text-md font-bold text-blue my-2 cursor-pointer">
          {getContent(content, `${course}_menu_2`)}
        </div>
        {active === "teachings" && (
          <div className="border-4 flex-col z-40 flex border-red border-dashed top-0 p-4 w-fit text-lg font-bold text-blue my-2 absolute left-[280px] max-w-[280px]">
            <a
              target="_blank"
              rel="noreferrer"
              href={getLink(content, `${course}_menu_2_1`)}
            >
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_2_1`)}
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={getLink(content, `${course}_menu_2_2`)}
            >
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_2_2`)}
              </div>
            </a>
            <Link passHref href={`/${lang}/teachings?active=3`}>
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_2_3`)}
              </div>
            </Link>
            <Link passHref href={`/${lang}/teachings?active=4`}>
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_2_4`)}
              </div>
            </Link>
          </div>
        )}
      </div>
      <div
        className="relative"
        onMouseEnter={() => setActive("minds")}
        onMouseLeave={() => setActive(null)}
      >
        <div className="border-4 border-blue  py-1 px-4 w-fit text-md font-bold text-blue my-2 cursor-pointer">
          {getContent(content, `${course}_menu_3`)}
        </div>
        {active === "minds" && (
          <div className="border-4 flex-col z-30 flex border-red border-dashed top-0 p-4 w-fit text-lg font-bold text-blue my-2 absolute left-[280px] max-w-[280px]">
            <Link href={`/${lang}/minds?active=1`}>
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_3_1`)}
              </div>
            </Link>
            <Link href={`/${lang}/minds?active=2`}>
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_3_2`)}
              </div>
            </Link>
            <Link href={`/${lang}/minds?active=3`}>
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_3_3`)}
              </div>
            </Link>
          </div>
        )}
      </div>
      <div
        className="relative"
        onMouseEnter={() => setActive("opportunities")}
        onMouseLeave={() => setActive(null)}
      >
        <div className="border-4 border-blue  py-1 px-4 w-fit text-md font-bold text-blue my-2 cursor-pointer">
          {getContent(content, `${course}_menu_4`)}
        </div>
        {active === "opportunities" && (
          <div className="border-4 flex-col z-20 flex border-red border-dashed top-0 p-4 w-fit text-lg font-bold text-blue my-2 absolute left-[280px] max-w-[280px]">
            <a
              target="_blank"
              rel="noreferrer"
              href={getLink(content, `${course}_menu_4_1`)}
            >
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_4_1`)}
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={getLink(content, `${course}_menu_4_2`)}
            >
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_4_2`)}
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={getLink(content, `${course}_menu_4_3`)}
            >
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_4_3`)}
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={getLink(content, `${course}_menu_4_4`)}
            >
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_4_4`)}
              </div>
            </a>
          </div>
        )}
      </div>
      <div
        className="relative"
        onMouseEnter={() => setActive("thesis")}
        onMouseLeave={() => setActive(null)}
      >
        <div className="border-4 border-blue  py-1 px-4 w-fit text-md font-bold text-blue my-2 cursor-pointer">
          {getContent(content, `${course}_menu_5`)}
        </div>
        {active === "thesis" && (
          <div className="border-4 flex-col z-10 flex border-red border-dashed top-0 p-4 w-fit text-lg font-bold text-blue my-2 absolute left-[280px] max-w-[280px]">
            <Link href={`/${lang}/thesis?active=1`}>
              <div className="cursor-pointer hover:underline">
                {getContent(content, `${course}_menu_5_1`)}
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeMenu;
