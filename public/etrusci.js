// @ts-check

window.addEventListener('load', () => {
    new Scur().autodeob()
}, false)


class Scur {
    s = 'A36385130-d8d7-4b-1fbfb3c3-1$e0b-4c18-9fae-033a7badxb575-6a-97-9ea9c8f8-273c-4a67-b922-b2Z217260_aa6b-eb-42fac72a8b28'

    deob(data) {
        const dump = []
        data.split('|').forEach((v) => {
            dump.push(String.fromCharCode(parseInt(v)))
        })
        const text = this.#_r(atob(this.#_r(dump.join(''))))
        if (text.indexOf(this.s) == -1) {
            console.error('Invalid or missing salt')
            return data
        }
        return text.replace(this.s, '')
    }

    autodeob() {
        const nodeList = document.querySelectorAll('[data-scur]')
        nodeList.forEach(node => {
            if (node instanceof HTMLElement
                && node.dataset['scur'] !== undefined) {
                if (node instanceof HTMLAnchorElement) {
                    node.setAttribute('href', this.deob(node.dataset['scur']))
                }
                else {
                    node.innerHTML = this.deob(node.dataset['scur'])
                }
                delete node.dataset['scur']
            }
        })
    }

    #_r(data) {
        return data.split('').reverse().join('')
    }
}
