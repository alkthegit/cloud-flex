export function fadeInElement(selector, threshold = 0.25) {
    const element = document.querySelector(selector);
    if (!element) {
        return;
    }

    const elementObserver = new IntersectionObserver(entries => {
        for (const e of entries) {
            if (e.isIntersecting) {
                /**
                 * @type {HTMLElement}
                 */
                const target = e.target;
                Object.assign(target.style, {
                    opacity: 1
                })
            }
        }
    }, {
        threshold
    });

    elementObserver.observe(element);

}
