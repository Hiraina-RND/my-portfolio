import { useEffect, useState } from 'react'

function useTypeWriter(texts: string[], speed: number, pauseDuration: number) {
    const [displayed, setDisplayed] = useState('')

    useEffect(() => {
        let i = 0
        let textIndex = 0
        let isDeleting = false
        let timeout: ReturnType<typeof setTimeout>

        const tick = () => {
            const currentText = texts[textIndex]

            if (!isDeleting) {
                setDisplayed(currentText.slice(0, ++i))

                if (i >= currentText.length) {
                    isDeleting = true
                    timeout = setTimeout(tick, pauseDuration)
                    return
                }
            } else {
                setDisplayed(currentText.slice(0, --i))

                if (i <= 0) {
                    isDeleting = false
                    textIndex = (textIndex + 1) % texts.length
                    timeout = setTimeout(tick, pauseDuration / 2)
                    return
                }
            }

            timeout = setTimeout(tick, isDeleting ? speed / 2 : speed)
        }

        timeout = setTimeout(tick, speed)

        return () => clearTimeout(timeout)
    }, [])

    return displayed
}

export default useTypeWriter