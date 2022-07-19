import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContent, getContent, getLink } from "../utils";

export default function Home() {
  const router = useRouter();
  const { lang } = router.query;
  const content = useContent();
  const [active, setActive] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    setCourse(lang === "it" ? "aci" : "bei");
  }, [lang]);

  console.log({ content });

  return (
    <div>
      <main className="w-full h-screen">
        <div className="w-full grid grid-cols-2">
          <div className="relative ">
            <div className="w-[70vw] h-[70vw] text-[20vw] text-blue border-blue border-[40px] rounded-full flex justify-center items-center absolute -left-[50%] -top-[30%]">
              {lang === "it" ? "ACI" : "BEI"}
            </div>
          </div>
          <div className="relative pl-16 pt-16">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div
                  className="relative"
                  onMouseEnter={() => setActive("course")}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="border-4 border-blue py-2 px-4 w-fit text-lg font-bold text-blue my-2 cursor-pointer">
                    {getContent(content, `${course}_menu_1`)}
                  </div>
                  {active === "course" && (
                    <div className="border-4 flex-col z-50 flex border-blue border-dashed top-0 p-4 w-fit text-lg font-bold text-blue my-2 absolute left-80">
                      <Link passHref href={`/${lang}/course?active=1`}>
                        <div className="cursor-pointer">
                          {getContent(content, `${course}_menu_1_1`)}
                        </div>
                      </Link>
                      <Link passHref href={`/${lang}/course?active=2`}>
                        <div className="cursor-pointer">
                          {getContent(content, `${course}_menu_1_2`)}
                        </div>
                      </Link>
                      <Link
                        passHref
                        target="_blank"
                        rel="noreferrer"
                        href={getLink(content, `${course}_menu_1_3`)}
                      >
                        <div className="cursor-pointer">
                          {getContent(content, `${course}_menu_1_3`)}
                        </div>
                      </Link>
                      <Link
                        passHref
                        target="_blank"
                        rel="noreferrer"
                        href={getLink(content, `${course}_menu_1_4`)}
                      >
                        <div className="cursor-pointer">
                          {getContent(content, `${course}_menu_1_4`)}
                        </div>
                      </Link>
                      <Link
                        passHref
                        target="_blank"
                        rel="noreferrer"
                        href={getLink(content, `${course}_menu_1_5`)}
                      >
                        <div className="cursor-pointer">
                          {getContent(content, `${course}_menu_1_5`)}
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setActive("teachings")}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="border-4 border-blue  py-2 px-4 w-fit text-lg font-bold text-blue my-2 cursor-pointer">
                    {getContent(content, `${course}_menu_2`)}
                  </div>
                  {active === "teachings" && (
                    <div className="border-4 flex-col z-40 flex border-blue border-dashed top-0 p-4 w-fit text-lg font-bold text-blue my-2 absolute left-80">
                      <Link href={`/${lang}/teachings?active=1`}>
                        <div>{getContent(content, `${course}_menu_2_1`)}</div>
                      </Link>
                      <Link href={`/${lang}/teachings?active=2`}>
                        <div>{getContent(content, `${course}_menu_2_2`)}</div>
                      </Link>
                      <Link href={`/${lang}/teachings?active=3`}>
                        <div>{getContent(content, `${course}_menu_2_3`)}</div>
                      </Link>
                      <Link href={`/${lang}/teachings?active=4`}>
                        <div>{getContent(content, `${course}_menu_2_4`)}</div>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setActive("minds")}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="border-4 border-blue  py-2 px-4 w-fit text-lg font-bold text-blue my-2 cursor-pointer">
                    {getContent(content, `${course}_menu_3`)}
                  </div>
                  {active === "minds" && (
                    <div className="border-4 flex-col z-30 flex border-blue border-dashed top-0 p-4 w-fit text-lg font-bold text-blue my-2 absolute left-80">
                      <Link href={`/${lang}/minds?active=1`}>
                        <div>{getContent(content, `${course}_menu_3_1`)}</div>
                      </Link>
                      <Link href={`/${lang}/teachings?active=2`}>
                        <div>{getContent(content, `${course}_menu_3_2`)}</div>
                      </Link>
                      <Link href={`/${lang}/teachings?active=3`}>
                        <div>{getContent(content, `${course}_menu_3_3`)}</div>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setActive("opportunities")}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="border-4 border-blue  py-2 px-4 w-fit text-lg font-bold text-blue my-2 cursor-pointer">
                    {getContent(content, `${course}_menu_4`)}
                  </div>
                  {active === "opportunities" && (
                    <div className="border-4 flex-col z-20 flex border-blue border-dashed top-0 p-4 w-fit text-lg font-bold text-blue my-2 absolute left-80">
                      <Link href={`/${lang}/opportunities?active=1`}>
                        <div>{getContent(content, `${course}_menu_4_1`)}</div>
                      </Link>
                      <Link href={`/${lang}/opportunities?active=2`}>
                        <div>{getContent(content, `${course}_menu_4_2`)}</div>
                      </Link>
                      <Link href={`/${lang}/opportunities?active=3`}>
                        <div>{getContent(content, `${course}_menu_4_3`)}</div>
                      </Link>
                      <Link href={`/${lang}/opportunities?active=4`}>
                        <div>{getContent(content, `${course}_menu_4_4`)}</div>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setActive("thesis")}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="border-4 border-blue  py-2 px-4 w-fit text-lg font-bold text-blue my-2 cursor-pointer">
                    {getContent(content, `${course}_menu_5`)}
                  </div>
                  {active === "thesis" && (
                    <div className="border-4 flex-col z-10 flex border-blue border-dashed top-0 p-4 w-fit text-lg font-bold text-blue my-2 absolute left-80">
                      <Link href={`/${lang}/thesis?active=1`}>
                        <div>{getContent(content, `${course}_menu_5_1`)}</div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-blue text-xl pt-16 pr-16">
                {getContent(content, `${course}_intro`)}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
