import { Stack, StackInfo } from "../../config/stack"
import React, { useCallback } from "react"
import { Badge } from "../ui/badge"

interface StackListProps {
  stack: Stack[]
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  hex = hex.replace(/^#/, "")

  const isValidHex = /^[0-9A-Fa-f]{6}$/.test(hex)
  if (!isValidHex) {
    console.error("Invalid hex color code")
    return null
  }

  const bigint = parseInt(hex, 16)

  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return { r, g, b }
}

function StackList(props: StackListProps): React.ReactElement {
  const { stack } = props

  const renderList = useCallback((stack: any) => {
    const { value, color } = StackInfo[stack as keyof typeof StackInfo]
    const rgbColor = hexToRgb(color)

    const backgroundColor = rgbColor
      ? `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.7)`
      : "transparent"

    return (
      <Badge
        className="text-white"
        variant="default"
        style={{ background: backgroundColor }}
        key={stack}
      >
        {value}
      </Badge>

    )
  }, [])

  return (
    <div className="mb-2 flex flex-wrap gap-2">
      {React.Children.toArray(stack.map(renderList))}
    </div>
  )
}

export default StackList
