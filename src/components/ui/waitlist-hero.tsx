"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
  const minContrastRatio = theme === "dark" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  })
}

const slugs = [
  "typescript",
  "javascript",
  "nodedotjs",
  "react",
  "github",
  "nextdotjs",
  "git",
  "tailwindcss",
  "linux",
  "amazonaws",
  "html5",
  "graphql",
  "postgresql",
  "python",
  "rust",
  "ethereum",
  "java",
  "docker",
  "firebase",
  "mongodb",
  "prisma",
  "redis",
  "vercel",
  "cplusplus",
  "googlecloud",
  "redux",
]

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export const WaitlistHero = () => {
  const [data, setData] = useState<IconData | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setData)
  }, [])

  const renderedIcons = useMemo(() => {
  if (!data) return []

  return Object.values(data.simpleIcons).map((icon) =>
    renderCustomIcon(icon, theme || "dark")
  )
}, [data, theme])

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="relative flex max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8">
        {data ? (
          <Cloud {...cloudProps}>
            {renderedIcons}
          </Cloud>
        ) : (
          <div className="animate-pulse text-white/50">Loading Tech Stack...</div>
        )}
      </div>
    </div>
  )
}
