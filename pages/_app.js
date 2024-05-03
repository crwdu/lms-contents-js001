import "../styles/globals.css";
import { useState, useEffect } from "react";
import { MDXProvider } from "nextra/mdx";
import { Callout } from "nextra-theme-docs";

import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import CustomSandpack from "../components/CustomSandpack";

import useUser from "../hooks/useUser";
import useGlobalEvents from "../hooks/useGlobalEvents";
import { isDeployed } from "../utils/config";

export default function Nextra({ Component, pageProps }) {
  if (isDeployed()) {
    useGlobalEvents();
  }

  const { isLoggedIn } = useUser();

  const [hasVisitedContentPage, setHasVisitedContentPage] = useState(true);

  const shortcodes = { Callout, CustomSandpack };

  useEffect(() => {
    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: process.env.CHANNEL_TALK_PLUGIN_KEY,
    });
  }, []);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedContentPage");

    if (!hasVisited) {
      setHasVisitedContentPage(false);
    }
  }, [hasVisitedContentPage]);

  if (!isLoggedIn && process.env.NODE_ENV === "production") {
    return <></>;
  }

  return (
    <>
      <MDXProvider components={shortcodes}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}
