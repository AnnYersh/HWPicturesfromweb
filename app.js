let pictures = document.querySelector('.pictures')

async function getPictures() {
    try {
        let base = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=30')
        let data = await base.json()

        data.forEach((el) => {
            let item = document.createElement('div')
            item.classList.add('pic')

            let id = document.createElement('h2')
            let im = document.createElement('img')            
            let text = document.createElement('p')

            id.textContent = `ID: ${el.id}`
            im.src = `${el.url}`
            text.textContent = `Описание: ${el.title}`

            item.append(id,im,text)

            pictures.append(item)

        }) 

        } catch (error) {
            console.log(error)
        }
    }

    getPictures()