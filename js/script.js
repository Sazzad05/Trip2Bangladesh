
console.log("Trip to Bangladesh By Sazzad Alam Bhuiyan.");

let name = document.getElementById("name");
let division = document.getElementById("division");
let details = document.getElementById("details");
let district_info = document.getElementById("district_info");

let rows;

let Barguna = 1;
let Barisal = 2;
let Bhola = 3;
let Jhalokati = 4;
let Patuakhali = 5;
let Pirojpur = 6;
let Bandarban = 7;
let Brahmanbaria = 8;
let Chandpur = 9;
let Chattogram = 10;
let Cumilla = 11;
let Coxs_Bazar = 12;
let Feni = 13;
let Khagrachari = 14;
let Lakshmipur = 15;
let Noakhali = 16;
let Rangamati = 17;
let Dhaka = 18;
let Faridpur = 19;
let Gazipur = 20;
let Gopalganj = 21;
let Kishoreganj = 22;
let Madaripur = 23;
let Manikganj = 24;
let Munshiganj = 25;
let Narayanganj = 26;
let Narsingdi = 27;
let Rajbari = 28;
let Shariatpur = 29;
let Tangail = 30;
let Bagerhat = 31;
let Chuadanga = 32;
let Jashore = 33;
let Jhenaidah = 34;
let Khulna = 35;
let Kushtia = 36;
let Magura = 37;
let Meherpur = 38;
let Narail = 39;
let Satkhira = 40;
let Jamalpur = 41;
let Mymensingh = 42;
let Netrokona = 43;
let Sherpur = 44;
let Bogura = 45;
let Joypurhat = 46;
let Naogaon = 47;
let Natore = 48;
let Nawabganj = 49;
let Pabna = 50;
let Rajshahi = 51;
let Sirajganj = 52;
let Dinajpur = 53;
let Gaibandha = 54;
let Kurigram = 55;
let Lalmonirhat = 56;
let Nilphamari = 57;
let Panchagarh = 58;
let Rangpur = 59;
let Thakurgaon = 60;
let Habiganj = 61;
let Moulvibazar = 62;
let Sunamganj = 63;
let Sylhet = 64;

let Division_data = 0;
let District_Name_data = 1;
let Area_data = 2;
let Population_data = 3;
let Upazila_data = 4;
let Unions_data = 5;
let Villages_data = 6;
let Distance_frm_Dhk_data = 7;
let district_ban_name = 8;
let Discription = 9;
let history = 10;
let place = 11;
let transportation = 12;

// ----------------------------connect to spreadsheet-----------------------------------------------


const url = 'https://script.google.com/macros/s/AKfycbz8dBh2nyidqn-ohu5IayBUYPeFV1mbXqCmB9Ff9Iw85skPVn6OO-qRGCYTv6h-6zXr/exec';

    fetch(url)
  .then(res => res.json())
  .then(data => {
    rows = data.content;  // Access the array inside 'content'
    if (Array.isArray(rows)) {
      rows.forEach(row => {
        console.log(row);
        console.log(rows[8][0]);
        const a2Value = rows[8][0];  // Get "Karim"
        // document.getElementById('cellA2').textContent = a2Value;
        
        


      });
    } else {
      console.error("content is not an array", rows);
    }
  })
  .catch(err => console.error(err));





// ---------------------------------------------------------------------------


function playAudio(audioInfo){
  let audio = new Audio(`${audioInfo}`);
  audio.play();
}
  
let previous;
function setColor(name){
   document.getElementById(`${name}`).style.fill = '#f42a41';
  if (previous) {
    console.log(previous);
    document.getElementById(`${previous}`).style.fill = '#006a4e';
  }
  previous = name;
}

function selectorUpdate(id){
  document.getElementById("DistrictSelector").selectedIndex = id;
}

let img=[];
img[0] = document.getElementById("img1");
img[1] = document.getElementById("img2");
img[2] = document.getElementById("img3");

function changeImage(district){
  img[0].src=`image/districts/${district}1.jpg`;
  img[1].src=`image/districts/${district}2.jpg`;
  img[2].src=`image/districts/${district}3.jpg`;
  // document.body.style.backgroundImage=`url(image/bg/${district}bg.jpg)`;
}

function districtInfo(district_name,district_division,district_area,district_population,district_Upazila,district_Unions,district_Villages,disFromDhk, district_ban_name, Discription, history, place, transportation){
  console.log("click");
  // name.innerText = district_name + " | " + district_ban_name;
  name.innerText = district_name
  division.innerText = district_division+" Division";
  details.innerHTML = `</b><b>Area: </b> ${district_area} km<sup>2</sup> <br>
                        <b>Population: </b> ${district_population} (2011) <br>
                        <b>No of Upazilas: </b> ${district_Upazila} <br>
                        <b>No of Unions: </b> ${district_Unions} <br>
                        <b>No of Villages: </b> ${district_Villages} (2011) <br>
                        <b>Distance from Dhaka: </b> ${disFromDhk} km<br>  <br>
                        
  `;

  district_info.innerHTML = `<b> ${district_ban_name}</b> <br>
                            ${Discription} <br><br>
                            <b>ইতিহাস ঐতিহ্য </b>
                            <br>${history} <br><br>
                            <b>দর্শনীয় স্থান </b>
                            <br>${place} <br><br>
                            <b>যাতায়াত </b>
                            <br>${transportation} <br><br>
  `;

  // for (let i=0;i<famousPlace.length;i++){
  //   details.innerHTML += ` &#10687; ${famousPlace[i]} <br>`;
  // }
}


function districtData(districtName){
  districtInfo(rows[districtName][District_Name_data],
                rows[districtName][Division_data],
                rows[districtName][Area_data],
                rows[districtName][Population_data],
                rows[districtName][Upazila_data],
                rows[districtName][Unions_data],
                rows[districtName][Villages_data],
                rows[districtName][Distance_frm_Dhk_data],
                rows[districtName][district_ban_name],
                rows[districtName][Discription],
                rows[districtName][history],
                rows[districtName][place],
                rows[districtName][transportation],
                );
}





function clickBrahmanbaria(){
  let disName = Brahmanbaria;
  // let touristPlact=[
  // "Fort Stone Martyr’s Cemetery",
  // "Kella Shaheed Mazar",
  // "Natghar temple",
  // "Kachua shrine",
  // "Jayakumar zamindar’s house",
  // "Arifail Mosque",
  // "Shrine of Ayat Ullah Shah",
  // "Tighar Jamal Sagar Dighi",
  // "Shrine of Abdur Rahman Shah",
  // "MP Tila",
  // "Kalikachch Nandiparastha Dayamaya Anandadham",
  // "Dighirpar of Rasulullah Khan’s house"];
  
  districtData(disName);
  playAudio("audio/brahmanbaria.mp3");
  console.log("Brahmanbaria");
  setColor("brahmanbaria");
  selectorUpdate(7);
  changeImage("brahmanbaria"); 
}



function clickDhaka(){
 

  
  districtData(Dhaka);
  playAudio("audio/dhaka.mp3");
  console.log("Dhaka");
  setColor("dhaka");
  selectorUpdate(13);
  changeImage("dhaka");
}

function clickRajshahi(){
  let disName = Rajshahi;
  districtData(disName);
  playAudio("audio/rajshahi.mp3");
  setColor("rajshahi");
  selectorUpdate(54);
  changeImage("rajshahi");
}

function clickNilphamari(){
  let disName = Nilphamari;
  districtData(disName);
  playAudio("audio/nilphamari.mp3");
  setColor("nilphamari");
  selectorUpdate(47);
  changeImage("nilphamari");
}
function clickPanchagarh(){
  let disName = Panchagarh;
  districtData(disName);
  playAudio("audio/panchagarh.mp3");
  setColor("panchagarh");
  selectorUpdate(50);
  changeImage("panchagarh");
}

function clickThakurgaon(){
  let disName = Thakurgaon;
  districtData(disName);
  playAudio("audio/thakurgaon.mp3");
  setColor("thakurgaon");
  selectorUpdate(64);
  changeImage("thakurgaon");
}

function clickLalmonirhat(){
  let disName = Lalmonirhat;
  districtData(disName);
  playAudio("audio/lalmonirhat.mp3");
  setColor("lalmonirhat");
  selectorUpdate(32);
  changeImage("lalmonirhat");
}

function clickDinajpur(){
  let disName = Dinajpur;
  districtData(disName);
  playAudio("audio/dinajpur.mp3");
  setColor("dinajpur");
  selectorUpdate(14);
  changeImage("dinajpur");
}

function clickRangpur(){
  let disName = Rangpur;
  districtData(disName);
  playAudio("audio/rangpur.mp3");
  setColor("rangpur");
  selectorUpdate(56);
  changeImage("rangpur");
}
function clickKurigram(){
  let disName = Kurigram;
  districtData(disName);
  playAudio("audio/kurigram.mp3");
  setColor("kurigram");
  selectorUpdate(29);
  changeImage("kurigram");
}
function clickGaibandha(){
  let disName = Gaibandha;
  districtData(disName);
  playAudio("audio/gaibandha.mp3");
  setColor("gaibandha");
  selectorUpdate(17);
  changeImage("gaibandha");
}
function clickJoypurhat(){
  let disName = Joypurhat;
  districtData(disName);
  playAudio("audio/joypurhat.mp3");
  setColor("joypurhat");
  selectorUpdate(25);
  changeImage("joypurhat")
}
function clickNaogaon(){
  let disName = Naogaon;
  districtData(disName);
  playAudio("audio/naogaon.mp3");
  setColor("naogaon");
  selectorUpdate(40);
  changeImage("naogaon")
}
function clickNawabganj(){
  let disName = Nawabganj;
  districtData(disName);
  playAudio("audio/nawabganj.mp3");
  setColor("nawabganj");
  selectorUpdate(45);
  changeImage("nawabganj");
}
function clickBogra(){
  let disName = Bogura;
  districtData(disName);
  playAudio("audio/bogra.mp3");
  setColor("bogra");
  selectorUpdate(6);
  changeImage("bogra")
}
function clickNatore(){
  let disName = Natore;
  districtData(disName);
  playAudio("audio/natore.mp3");
  setColor("natore");
  selectorUpdate(44);
  changeImage("natore")
}
function clickSirajganj(){
  let disName = Sirajganj;
  districtData(disName);
  playAudio("audio/sirajganj.mp3");
  setColor("sirajganj");
  selectorUpdate(60);
  changeImage("sirajganj")
}
function clickPabna(){
  let disName = Pabna;
  districtData(disName);
  playAudio("audio/pabna.mp3");
  setColor("pabna");
  selectorUpdate(49);
  changeImage("pabna")
}
function clickKushtia(){
  let disName = Kushtia;
  districtData(disName);
  playAudio("audio/kushtia.mp3");
  setColor("kushtia");
  selectorUpdate(30);
  changeImage("kushtia");
}
function clickRajbari(){
  let disName = Rajbari;
  districtData(disName);
  playAudio("audio/rajbari.mp3");
  setColor("rajbari");
  selectorUpdate(53);
  changeImage("rajbari");
}
function clickMeherpur(){
  let disName = Meherpur;
  districtData(disName);
  playAudio("audio/meherpur.mp3");
  setColor("meherpur");
  selectorUpdate(37);
  changeImage("meherpur");
}
function clickChuadanga(){
  let disName = Chuadanga;
  districtData(disName);
  playAudio("audio/chuadanga.mp3");
  setColor("chuadanga");
  selectorUpdate(10);
  changeImage("chuadanga");
}
function clickJhenaidah(){
  let disName = Jhenaidah;
  districtData(disName);
  playAudio("audio/jhenaidah.mp3");
  setColor("jhenaidah");
  selectorUpdate(24);
  changeImage("jhenaidah");
}
function clickMagura(){
  let disName = Magura;
  districtData(disName);
  playAudio("audio/magura.mp3");
  setColor("magura");
  selectorUpdate(34);
  changeImage("magura");
}
function clickJessore(){
  let disName = Jashore;
  districtData(disName);
  playAudio("audio/jessore.mp3");
  setColor("jessore");
  selectorUpdate(22);
  changeImage("jessore");
}
function clickNarail(){
  let disName = Noakhali;
  districtData(disName);
  playAudio("audio/narail.mp3");
  setColor("narail");
  selectorUpdate(41);
  changeImage("narail");
}
function clickSatkhira(){
  let disName = Satkhira;
  districtData(disName);
  playAudio("audio/satkhira.mp3");
  setColor("satkhira");
  selectorUpdate(57);
  changeImage("satkhira");
}
function clickKhulna(){
  let disName = Khulna;
  districtData(disName);
  playAudio("audio/khulna.mp3");
  setColor("khulna");
  selectorUpdate(27);
  changeImage("khulna");
}
function clickFaridpur(){
  let disName = Faridpur;
  districtData(disName);
  playAudio("audio/faridpur.mp3");
  setColor("faridpur");
  selectorUpdate(15);
  changeImage("faridpur");
}
function clickGopalganj(){
  let disName = Gopalganj;
  districtData(disName);
  playAudio("audio/gopalganj.mp3");
  setColor("gopalganj");
  selectorUpdate(19);
  changeImage("gopalganj");
}
function clickBagerhat(){
  let disName = Bagerhat;
  districtData(disName);
  playAudio("audio/bagerhat.mp3");
  setColor("bagerhat");
  selectorUpdate(1);
  changeImage("bagerhat");
}
function clickJamalpur(){
  let disName = Jamalpur;
  districtData(disName);
  playAudio("audio/jamalpur.mp3");
  setColor("jamalpur");
  selectorUpdate(21);
  changeImage("jamalpur")
}
function clickTangail(){
  let disName = Tangail;
  districtData(disName);
  playAudio("audio/tangail.mp3");
  setColor("tangail");
  selectorUpdate(63);
  changeImage("tangail");
}
function clickManikganj(){
  let disName = Manikganj;
  districtData(disName);
  playAudio("audio/manikganj.mp3");
  setColor("manikganj");
  selectorUpdate(35);
  changeImage("manikganj");
}

function clickMadaripur(){
  let disName = Madaripur;
  districtData(disName);
  playAudio("audio/madaripur.mp3");
  setColor("madaripur");
  selectorUpdate(33);
  changeImage("madaripur");
}
function clickShariatpur(){
  let disName = Shariatpur;
  districtData(disName);
  playAudio("audio/shariatpur.mp3");
  setColor("shariatpur");
  selectorUpdate(58);
  changeImage("shariatpur");
}
function clickGazipur(){
  let disName = Gazipur;
  districtData(disName);
  playAudio("audio/gazipur.mp3");
  setColor("gazipur");
  selectorUpdate(18);
  changeImage("gazipur");
}
function clickSherpur(){
  let disName = Sherpur;
  districtData(disName);
  playAudio("audio/sherpur.mp3");
  setColor("sherpur");
  selectorUpdate(59);
  changeImage("sherpur");
}
function clickMymenshingh(){
  let disName = Mymensingh;
  districtData(disName);
  playAudio("audio/mymenshingh.mp3");
  setColor("mymenshingh");
  selectorUpdate(39);
  changeImage("mymenshingh");
}
function clickKishoreganj(){
  let disName = Kishoreganj;
  districtData(disName);
  playAudio("audio/kishoreganj.mp3");
  setColor("kishoreganj");
  selectorUpdate(28);
  changeImage("kishoreganj");
}
function clickNetrokona(){
  let disName = Netrokona;
  districtData(disName);
  playAudio("audio/netrokona.mp3");
  setColor("netrokona");
  selectorUpdate(46);
  changeImage("netrokona");
}
function clickSunamganj(){
  let disName = Sunamganj;
  districtData(disName);
  playAudio("audio/sunamganj.mp3");
  setColor("sunamganj");
  selectorUpdate(61);
  changeImage("sunamganj");
}
function clickSylhet(){
  let disName = Sylhet;
  districtData(disName);
  playAudio("audio/sylhet.mp3");
  setColor("sylhet");
  selectorUpdate(62);
  changeImage("sylhet");
}
function clickHabiganj(){
  let disName = Habiganj;
  districtData(disName);
  playAudio("audio/habiganj.mp3");
  setColor("habiganj");
  selectorUpdate(20);
  changeImage("habiganj");
}
function clickMoulovibazar(){
  let disName = Moulvibazar;
  districtData(disName);
  playAudio("audio/moulovibazar.mp3");
  setColor("moulovibazar");
  selectorUpdate(36);
  changeImage("moulovibazar");
}
function clickNarshingdi(){
  let disName = Narsingdi;
  districtData(disName);
  playAudio("audio/narshingdi.mp3");
  setColor("narshingdi");
  selectorUpdate(43);
  changeImage("narshingdi");
}
function clickNarayanganj(){
  let disName = Narayanganj;
  districtData(disName);
  playAudio("audio/narayanganj.mp3");
  setColor("narayanganj");
  selectorUpdate(42);
  changeImage("narayanganj");
}

function clickMunshiganj(){
  let disName = Munshiganj;
  districtData(disName);
  playAudio("audio/munshiganj.mp3");
  setColor("munshiganj");
  selectorUpdate(38);
  changeImage("munshiganj");
}
function clickComilla(){
  let disName = Cumilla;
  districtData(disName);
  playAudio("audio/comilla.mp3");
  setColor("comilla");
  selectorUpdate(11);
  changeImage("comilla");
}
function clickChandpur(){
  let disName = Chandpur;
  districtData(disName);
  playAudio("audio/chandpur.mp3");
  setColor("chandpur");
  selectorUpdate(8);
  changeImage("chandpur");
}
function clickLaxmipur(){
  let disName = Lakshmipur;
  districtData(disName);
  playAudio("audio/laxmipur.mp3");
  setColor("laxmipur");
  selectorUpdate(31);
  changeImage("laxmipur");
}
function clickPerojpur(){
  let disName = Pirojpur;
  districtData(disName);
  playAudio("audio/perojpur.mp3");
  setColor("perojpur");
  selectorUpdate(52);
  changeImage("perojpur");
}
function clickJhalokati(){
  let disName = Jhalokati;
  districtData(disName);
  playAudio("audio/jhalokati.mp3");
  setColor("jhalokati");
  selectorUpdate(23);
  changeImage("jhalokati");
}
function clickBarisal(){
  let disName = Barisal;
  districtData(disName);
  playAudio("audio/barisal.mp3");
  setColor("barisal");
  selectorUpdate(4);
  changeImage("barisal");
}
function clickBarguna(){
  let disName = Barguna;
  districtData(disName);
  playAudio("audio/barguna.mp3");
  setColor("barguna");
  selectorUpdate(3);
  changeImage("barguna");
  
}
function clickPatuakhali(){
  let disName = Patuakhali;
  districtData(disName);
  playAudio("audio/patuakhali.mp3");
  setColor("patuakhali");
  selectorUpdate(51);
  changeImage("patuakhali");
}

function clickBhola(){
  let disName = Bhola;
  districtData(disName);
  playAudio("audio/bhola.mp3");
  setColor("bhola");
  selectorUpdate(5);
  changeImage("bhola");
}
function clickNoakhali(){
  let disName = Noakhali;
  districtData(disName);
  playAudio("audio/noakhali.mp3");
  setColor("noakhali");
  selectorUpdate(48);
  changeImage("noakhali");
}
function clickFeni(){
  let disName = Feni;
  districtData(disName);
  playAudio("audio/feni.mp3");
  setColor("feni");
  selectorUpdate(16);
  changeImage("feni");
}
function clickChottogram(){
  let disName = Chattogram;
  districtData(disName);
  playAudio("audio/chottogram.mp3");
  setColor("chottogram");
  selectorUpdate(9);
  changeImage("chottogram");
}
function clickKhagrachari(){
  let disName = Khagrachari;
  districtData(disName);
  playAudio("audio/khagrachari.mp3");
  setColor("khagrachari");
  selectorUpdate(26);
  changeImage("khagrachari");
}
function clickCoxs_bazar(){
  let disName = Coxs_Bazar;
  districtData(disName);
  playAudio("audio/coxs_bazar.mp3");
  setColor("coxs_bazar");
  selectorUpdate(12);
  changeImage("coxs_bazar");
}
function clickBandarban(){
  let disName = Bandarban;
  districtData(disName);
  playAudio("audio/bandarban.mp3");
  setColor("bandarban");
  selectorUpdate(2);
  changeImage("bandarban");
}
function clickRangamati(){
  let disName = Rangamati;
  districtData(disName);
  playAudio("audio/rangamati.mp3");
  setColor("rangamati");
  selectorUpdate(55);
  changeImage("rangamati");
}



function selectorChanged(){
  var x = document.getElementById("DistrictSelector").value;
  console.log(x);
  var newFunction = window["click" + x];
    newFunction();
}