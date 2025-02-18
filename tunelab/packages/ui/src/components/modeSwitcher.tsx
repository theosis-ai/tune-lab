"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { META_THEME_COLORS, useMetaColor } from "@workspace/ui/hooks/use-meta-color"
import { Button } from "@workspace/ui/components/button"

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()
  const { setMetaColor } = useMetaColor()

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
    setMetaColor(
      resolvedTheme === "dark"
        ? META_THEME_COLORS.light
        : META_THEME_COLORS.dark
    )
  }, [resolvedTheme, setTheme, setMetaColor])

  return (
    <Button
      variant="ghost"
      className="group/toggle h-8 w-8 px-0"
      onClick={toggleTheme}
    >
      {resolvedTheme !== "dark" ? (
        <MoonIcon className="block [html.light_&]:hidden h-4 w-4" />
      ) : (
        <SunIcon className="block [html.dark_&]:hidden h-4 w-4" />
      )}
    </Button>
  )
}