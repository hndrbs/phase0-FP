// FUNCTION SECTION ///
function captilize (string){

    let strOut = string[0].toUpperCase()
    let willBeCap = false

    for (let i = 1; i < string.length; i++){
        
        if (string[i] == ' '){
            willBeCap = true
            strOut += string[i]

        } else {

            if (willBeCap){
                strOut += string[i].toUpperCase()

            } else {
                strOut += string[i]
            }

            willBeCap = false
        }
    }
    return strOut
}
function namaMenu(namaGambar) {
    let nama = ''
    for (let i of namaGambar){
        if (i == '.'){
            break
        } else {
            if (i == '_'){
                nama += ' '
            } else {
                nama += i
            }
        }
    }
    nama = captilize(nama) //setiap huruf awal, captilize
    return nama
}

// function next-previous carousel
function nextImg (){
    // bertambah index
    if (indexCarousel == daftarMenu.favorit.length - 1){
        indexCarousel = 0
    } else {
        indexCarousel++
    }

    document.getElementById('imgCarousel').src = `img/${daftarMenu.favorit[indexCarousel]}` 
}

function prevImg (){
    // index berkurang
    if (indexCarousel == 0){
        indexCarousel = daftarMenu.favorit.length - 1
    } else {
        indexCarousel--
    }

    document.getElementById('imgCarousel').src = `img/${daftarMenu.favorit[indexCarousel]}`
    
}

/// DATA SECTION
let indexCarousel = 0

let daftarMenu = {
    favorit : [
        'bigImg.jpg',
        'rendang.jpg',
        'udang.jpg',
        'lele.jpg'
    ],
    deskripsiFavorit : [
        '',
        'Tau gak sih? ini tuh rendang terenak di dunia loh, makanya semua orang nyariin menu kami ini, ayok pesen sebelum keabisan',
        'udangnya digoreng sampe kriuk dan hmmmmmmmmmm enak banget',
        'digoreng pake tepung terus disiram pake santan favorit kamu, dijamin yummyy'
    ],
    lainnya : [
        'ampela_ati.jpg',
        'kikil.jpeg',
        'otak.jpg',
        'usus.jpg'
    ],
    deskripsiLainnya: [
        'ampela ati ayam dengan kuah santan yang berbumbu istimewa',
        'kikilnya empuk dan bumbunya super gurih',
        'sumber nutrisi luar biasa, bisa bikin otak kita lebih encer loh',
        'wah ini mah ususnya kenyal dan enak banget sih, apalagi dimasak pake bumbu khas kami'

    ]
}

let daftarPelanggan = [
    {username : 'raja', password : 'password1'},
    {username : 'lulu', password : 'passsss'},
    {username : 'mboh sopo', password : 'gak mau ingat password ah'},
    {username : 'kim jong un' , password : 'ngeyel saya dor ya kamu iubo!'}
]






// DOM SECTION and PROECESSSSES

// insert namaMenu lainnya 3 buah ke aside

for (let i = 0; i < 3; i++){
    let namaFile = daftarMenu.lainnya[i]
    let judulMenu = namaMenu(namaFile)
    let deskripsi = daftarMenu.deskripsiLainnya[i]
    let tambahTag = `<h3>${judulMenu}</h3> \n
    <img src="img/${namaFile}" alt='gambar ${judulMenu}'> \n
    <p>${deskripsi}</P>`
    document.getElementById('side-other-menus').innerHTML += tambahTag
}


// ketika pencet kiri
// ubah alamat carousel image

document.getElementById('imgCarousel').src= `img/${daftarMenu.favorit[indexCarousel]}`


