import Link from "next/link";
import { useEffect, useState } from "react";
import { useContent, getContent, getLink } from "../utils";

const HomeMenuMobile = ({ course, lang, setMenuopen }) => {
  const content = useContent();

  return (
    <div className="flex flex-col fixed top-0 left-0 z-10 bg-blue p-4 overflow-y-auto h-screen">
      <div className="relative">
        <div className="border-4 border-gray py-2 px-4 w-fit text-lg font-bold text-gray my-2 cursor-pointer">
          {getContent(content, `${course}_menu_1`)}
        </div>
        <div
          className="absolute right-0 top-0 text-5xl font-bold text-gray"
          onClick={() => setMenuopen(false)}
        >
          <img
            src={"/close.svg"}
            width={50}
            onClick={() => setMenuopen(true)}
          />
        </div>
        <div className="border-0 flex-col z-50 flex py-4 w-fit text-lg font-bold text-gray my-2 ">
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
      </div>
      <div className="relative ">
        <div className="border-4 border-gray  py-2 px-4 w-fit text-lg font-bold text-gray my-2 cursor-pointer">
          {getContent(content, `${course}_menu_2`)}
        </div>
        <div className="border-0 flex-col z-40 flex py-4 w-fit text-lg font-bold text-gray my-2 ">
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
        </div>
      </div>
      <div className="relative">
        <div className="border-4 border-gray  py-2 px-4 w-fit text-lg font-bold text-gray my-2 cursor-pointer">
          {getContent(content, `${course}_menu_3`)}
        </div>
        <div className="border-0 flex-col z-30 flex py-4 w-fit text-lg font-bold text-gray my-2 ">
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
      </div>
      <div className="relative">
        <div className="border-4 border-gray  py-2 px-4 w-fit text-lg font-bold text-gray my-2 cursor-pointer">
          {getContent(content, `${course}_menu_4`)}
        </div>
        <div className="border-0 flex-col z-20 flex py-4 w-fit text-lg font-bold text-gray my-2 ">
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
      </div>
      <div className="relative">
        <div className="border-4 border-gray  py-2 px-4 w-fit text-lg font-bold text-gray my-2 cursor-pointer">
          {getContent(content, `${course}_menu_5`)}
        </div>
        <div className="border-0 flex-col z-10 flex py-4 w-fit text-lg font-bold text-gray my-2 ">
          <Link href={`/${lang}/thesis?active=1`}>
            <div className="cursor-pointer hover:underline">
              {getContent(content, `${course}_menu_5_1`)}
            </div>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="border-0 flex-col z-10 flex py-4 w-fit text-lg font-bold text-gray my-2 ">
          <Link href={`/${lang}/privacy`}>
            <div className="cursor-pointer hover:underline">Privacy</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeMenuMobile;
