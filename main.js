var nav__main = document.querySelector('.nav__main')
var nav__slider = document.querySelectorAll('.nav__slider')
var circle = document.querySelectorAll('.circle')
var lengthSlider = nav__slider[0].offsetWidth

const content1__box = document.querySelector('.content1__box'),
firtImage = content1__box.querySelectorAll('.content1__box-item')[0]

const content2__boxImg = document.querySelector('.content2__boxImg'),
firtBoxImage = content2__boxImg.querySelectorAll('img')[0]

const control1 = document.querySelectorAll('.control1')
const control2 = document.querySelectorAll('.control2')
//header slider
var index = 0
function handleSlider(index){
    
    
    const lengthSlide= nav__main.style.transform = `translateX(${-lengthSlider*index}px)`
    document.querySelector('.circle.active_color-red').classList.remove('active_color-red')
    circle[index].classList.add('active_color-red')
}


circle.forEach((item,index)=>{
    
   
    item.onclick = function(){
        document.querySelector('.circle.active_color-red').classList.remove('active_color-red')
        this.classList.add('active_color-red')
        handleSlider(index)
    }

})
setInterval(
    ()=>{
        
        if(index>3){
            index = 0
            
        }else{
            handleSlider(index)
            index++
        }
        
    }
,4000)



//Section slider
const arrBoxPrducts = [
    {
        img: './assets/imgs/img_foods/lau-ga-thuoc-bac-manh-hoach-300x200.jpg',
        name: 'Lẩu gà thuốc bắc',
        desc: '2-4-6 Người'
    },
    {
        img: './assets/imgs/img_foods/nom-ga-xe-phay-manh-hoach-300x200.jpg',
        name: 'Nộm gà xé phay',
        desc: '39.000 VNĐ'
    },
    {
        img: './assets/imgs/img_foods/mien-xao-300x200.png',
        name: 'Miến xào',
        desc: '49.000 VNĐ'
    },
    {
        img: './assets/imgs/img_foods/lau-ga-nam-manh-hoach-300x200.jpg',
        name: 'Lẩu gà nấm',
        desc: '2-4-6 Người'
    },
    {
        img: './assets/imgs/img_foods/ga-rang-muoi-300x200.png',
        name: 'Gà rang muối',
        desc: '109.000 VNĐ'
    },
    {
        img: './assets/imgs/img_foods/ga-ran-manh-hoach-300x200.png',
        name: 'Gà rán Mạnh Hoạch',
        desc: '105.000 VNĐ'
    },
    {
        img: './assets/imgs/img_foods/ga-khong-loi-thoat-manh-hoach-300x200.png',
        name: 'Gà không lối thoát',
        desc: '299.000 VNĐ'
    },
    {
        img: './assets/imgs/img_foods/ga-chien-mam-300x200.png',
        name: 'Gà chiên mắm',
        desc: '109.000 VNĐ'
    },
    {
        img: './assets/imgs/img_foods/cu-qua-luoc-cham-kho-quet-manh-hoach-300x200.jpg',
        name: 'Củ quả luộc',
        desc: '44.000 VNĐ'
    },
    {
        img: './assets/imgs/img_foods/cai-ngong-xao-manh-hoach-300x200.jpg',
        name: 'Cải ngồng xào',
        desc: '39.000 VNĐ'
    },
]
                //Template

                    // <div class="content1__box-item">
                    //     <div class="content1__box-item-img">
                    //         <img src="./assets/imgs/img_foods/lau-ga-thuoc-bac-manh-hoach-300x200.jpg" alt="">
                    //     </div>
                    //     <p class="content1__box-item-desc">Lẩu gà thuốc bắc</p>
                    //     <p class="content1__box-item-money">2-4-6 Người</p>
                    // </div> 

    
// function renderBoxProduct(item){
//          const elDivItem = document.createElement('div')
//          elDivItem.setAttribute('class','content1__box-item')
//          const boxProduct =  elDivItem.innerHTML = `<div class="content1__box-item-img">
//                                         <img src="${item.img}" alt="">
//                                     </div>
//                                     <p class="content1__box-item-desc">${item.name}</p>
//                                     <p class="content1__box-item-money">${item.desc}</p>
            
//                                     `
        
//         content1__box.appendChild(elDivItem)
    
    
// }






                        //section slide
let isDragStart = false, prevPageX, prevScrollLeft
let firstImgWidth = firtImage.clientWidth+67
let firtBoxImageWidth = firtBoxImage.clientWidth+5

    control1.forEach((icon)=>{
        icon.addEventListener('click',()=>{
// if (content1__box.scrollLeft + icon.id == 'left'){
//    content1__box.scrollLeft = -firstImgWidth
// }else {content1__box.scrollLeft = firstImgWidth}

            content1__box.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth
            console.log(firstImgWidth)
        })
    })
    
    control2.forEach((icon)=>{
        icon.addEventListener('click',()=>{
            content2__boxImg.scrollLeft += icon.id == 'left' ? -firtBoxImageWidth : firtBoxImageWidth
    
        })
    })



handleBoxSlider(content1__box)
handleBoxSlider(content2__boxImg)



                    //Notify content2
function handleBoxSlider(el){
    const dragStart = (e)=>{
        isDragStart = true
        prevPageX = e.pageX
        prevScrollLeft = el.scrollLeft
    }
    
    const dragStop = ()=>{
        isDragStart = false
        el.classList.remove('dragging')
    }
    
    const dragging = (e)=>{
        if(!isDragStart) return
        e.preventDefault()
        el.classList.add('dragging')
        let positionDiff = e.pageX - prevPageX
        el.scrollLeft = prevScrollLeft - positionDiff
        
    }
    
    el.addEventListener('mousedown', dragStart)
    el.addEventListener('mouseup', dragStop)
    el.addEventListener('mousemove', dragging)
    el.addEventListener('mouseleave', dragStop)
}