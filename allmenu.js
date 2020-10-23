////////////////////// FUNCTION SECTION //////////////////
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


////////////////////////DATA SECTION //////////////////////////////
let allMenuInObject = {
    file : [
        'rendang.jpg',
        'udang.jpg',
        'lele.jpg',
        'ampela_ati.jpg',
        'kikil.jpeg',
        'otak.jpg',
        'usus.jpg'
    ],
    description : [
        'Tau gak sih? ini tuh rendang terenak di dunia loh, makanya semua orang nyariin menu kami ini, ayok pesen sebelum keabisan',
        'udangnya digoreng sampe kriuk dan hmmmmmmmmmm enak banget',
        'digoreng pake tepung terus disiram pake santan favorit kamu, dijamin yummyy',
        'ampela ati ayam dengan kuah santan yang berbumbu istimewa',
        'kikilnya empuk dan bumbunya super gurih',
        'sumber nutrisi luar biasa, bisa bikin otak kita lebih encer loh',
        'wah ini mah ususnya kenyal dan enak banget sih, apalagi dimasak pake bumbu khas kami'
    ] 
}

for (let i = 0; i < allMenuInObject.file.length; i++){
    let fileName = allMenuInObject.file[i]
    let theDescription = allMenuInObject.description[i]
    let judulMenu = namaMenu(fileName)
    let tambahTag = `<div><h3>${judulMenu}</h3>
    <img src="img/${fileName}" alt="${judulMenu}">
    <p>${theDescription}</p></div>`

    document.getElementById('allMenu').innerHTML += tambahTag
}
