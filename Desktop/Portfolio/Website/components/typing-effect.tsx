"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  text: string
  initialPlaceholder?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBeforeDeleting?: number
  delayBeforeTyping?: number
}

export function TypingEffect({
  text,
  initialPlaceholder = "a Computer Science Student", // Start with a phrase to backspace
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBeforeDeleting = 1500, // Longer delay to read the initial phrase
  delayBeforeTyping = 500,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState(initialPlaceholder)
  const [isDeleting, setIsDeleting] = useState(true) // Start by deleting placeholder
  const [index, setIndex] = useState(initialPlaceholder.length)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (animationComplete) {
      return // Stop animation once complete
    }

    if (isDeleting) {
      if (index > 0) {
        timer = setTimeout(() => {
          setDisplayedText(initialPlaceholder.substring(0, index - 1))
          setIndex(index - 1)
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setIndex(0)
        timer = setTimeout(() => {}, delayBeforeTyping) // Small delay before typing
      }
    } else {
      if (index < text.length) {
        timer = setTimeout(() => {
          setDisplayedText(text.substring(0, index + 1))
          setIndex(index + 1)
        }, typingSpeed)
      } else {
        setAnimationComplete(true) // Mark animation as complete
      }
    }

    return () => clearTimeout(timer)
  }, [
    index,
    isDeleting,
    displayedText,
    text,
    initialPlaceholder,
    typingSpeed,
    deletingSpeed,
    delayBeforeDeleting,
    delayBeforeTyping,
    animationComplete,
  ])

  return <>{displayedText}</>
}
