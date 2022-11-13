import { useEffect, useRef } from 'react'

export const useScroll = () => {
  const scroll = useRef(null)

  useEffect(() => {
    if (scroll && scroll.current) {
      document.body.style.paddingBottom =
        scroll.current.scrollWidth - scroll.current.offsetWidth + 'px'

      window.addEventListener('scroll', (e) => {
        let top = document.documentElement.scrollTop

        let limit =
          scroll.current.offsetTop -
          scroll.current.scrollLeft -
          (window.innerHeight - scroll.current.offsetHeight) / 2
        let width = scroll.current.scrollWidth - scroll.current.offsetWidth
        let delta = Math.min(Math.max(top - limit, 0), width)

        scroll.current.scrollLeft = delta
        document.body.style.paddingTop = delta + 'px'
        document.body.style.paddingBottom = width - delta + 'px'
      })
    }
  }, [])

  return {
    scroll,
  }
}
