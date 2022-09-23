import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContent, getContent, getLink } from "../../utils";
import { isMobile } from "react-device-detect";
import HomeMenu from "../../components/HomeMenu";
import HomeMenuMobile from "../../components/HomeMenuMobile";
import HeaderMobile from "../../components/HeaderMobile";

export default function Home() {
  const router = useRouter();
  const { lang } = router.query;
  const content = useContent();
  const [active, setActive] = useState(null);
  const [course, setCourse] = useState(null);
  const [menuOpen, setMenuopen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setCourse(lang === "it" ? "aci" : "bei");
  }, [lang]);

  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);

  return (
    <div>
      <main className="w-full md:h-screen overflow-hidden">
        {mobile && <HeaderMobile setMenuopen={setMenuopen} />}
        <div className="w-full flex flex-col md:flex-row">
          {!mobile && (
            <div className="relative md:w-[40vw] md:h-screen">
              <Link href={"/"}>
                <div className="w-[60vw] h-[60vw] text-[20vw] font-bold cursor-pointer hover:bg-blue hover:text-gray text-blue border-blue border-[40px] rounded-full flex justify-center items-center md:absolute -left-[50%] -top-[20%]">
                  {lang === "it" ? "ACI" : "BEI"}
                </div>
              </Link>
              <div className="absolute bottom-0 p-4 text-lg font-bold text-blue">
                <Link href={`/${lang}/privacy`}>
                  <div className="cursor-pointer hover:underline">Privacy</div>
                </Link>
              </div>
            </div>
          )}
          {mobile && (
            <div className="relative w-full flex justify-center items-center p-8">
              <Link href={"/"}>
                <div className="w-[60vw] h-[60vw] text-[20vw] font-bold cursor-pointer hover:bg-blue hover:text-gray text-blue border-blue border-[10px] md:border-[20px] rounded-full flex justify-center items-center">
                  {lang === "it" ? "ACI" : "BEI"}
                </div>
              </Link>
            </div>
          )}
          <div className="relative pl-4 md:pl-16 pr-4 md:pr-0 pt-4 md:pt-8 md:w-[60vw] md:h-screen md:overflow-y-scroll">
            <div className="flex flex-col">
              {!mobile && (
                <HomeMenu
                  active={active}
                  setActive={setActive}
                  course={course}
                  lang={lang}
                />
              )}
              {mobile && menuOpen && (
                <HomeMenuMobile
                  course={course}
                  lang={lang}
                  setMenuopen={setMenuopen}
                />
              )}
            </div>
            <div className="">
              <p
                className="text-blue text-xl md:text-2xl pr-0 md:pr-16 md:pt-16 pb-8 md:pb-16"
                style={{
                  lineHeight: 1.2,
                  fontSize: isMobile ? "20px" : "1.5vw",
                }}
              >
                {getContent(content, `${course}_intro`)}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
