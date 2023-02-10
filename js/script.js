
console.log("Trip to Bangladesh By Sazzad Alam Bhuiyan.");

let name = document.getElementById("name");
let division = document.getElementById("division");
let details = document.getElementById("details");


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

function districtInfo(district_name,district_division,district_area,district_population,disFromDhk, famousPlace){
  console.log("click");
  name.innerText = district_name;
  division.innerText = district_division+" Division";
  details.innerHTML = `<b>Area: </b> ${district_area} km<sup>2</sup> <br>
  <b>Popilation: </b> ${district_population} (2011) <br>
  <b>Distance from Dhaka: </b> ${disFromDhk} km<br>  <br>
  <b>Interesting places of ${district_name} : </b><br>
  `;

  for (let i=0;i<famousPlace.length;i++){
    details.innerHTML += ` &#10687; ${famousPlace[i]} <br>`;
  }
}



// area,population,upozila,municipality,union,disFromDhk


// ,1927.11,"1473787 (2011)",9,8,100,"107"







function clickBrahmanbaria(){
  let name = "Brahmanbaria";
  let division = "Chottogram";
  let area = 1927.11;
  let population= 1473787;
  let distanceFromDhaka=107;
  let touristPlact=[
  "Fort Stone Martyr’s Cemetery",
  "Kella Shaheed Mazar",
  "Natghar temple",
  "Kachua shrine",
  "Jayakumar zamindar’s house",
  "Arifail Mosque",
  "Shrine of Ayat Ullah Shah",
  "Tighar Jamal Sagar Dighi",
  "Shrine of Abdur Rahman Shah",
  "MP Tila",
  "Kalikachch Nandiparastha Dayamaya Anandadham",
  "Dighirpar of Rasulullah Khan’s house"];
  districtInfo(name,division,area,population,distanceFromDhaka,touristPlact);
  
  playAudio("audio/brahmanbaria.mp3");
  console.log("Brahmanbaria");
  setColor("brahmanbaria");
  selectorUpdate(7);
  changeImage("brahmanbaria"); 
}

function clickDhaka(){
  let name = "Dhaka";
  let division = "Dhaka";
  let area =  1463.60;
  let population= 12517361;
  let distanceFromDhaka=0;
  let touristPlact=[
  "Ahsan Manzil",
"Khan Mohammad Mridha Mosque",
"Small cuts",
"Big cut",
"Bahadur Shah Park",
"Hosseini Dalan",
"Rayer Bazar slaughterhouse",
"Ginger cosmetics",
"The seven-domed mosque",
"They are mosques",
"Suhrawardy Udyan",
"Dhaka Zoo",
"Curzon Hall",
"Central Shaheed Minar",
"Rose Garden",
"Elephant Lake",
"Lalbagh Fort",
"Jatiya Sangsad Bhaban"];  
  districtInfo(name,division,area,population,distanceFromDhaka,touristPlact);

  playAudio("audio/dhaka.mp3");
  console.log("Dhaka");
  setColor("dhaka");
  selectorUpdate(13);
  changeImage("dhaka");
}

function clickRajshahi(){
  let name = "Rajshahia";
  let division = "Rajshahi";
  let area = 2497.92;
  let population= 3220814;
  let distanceFromDhaka=140.8;
  let touristPlact=[
  "Navaratna temple",
  "Suchitra Sen’s Bhangabari village",
  "Jayasagar Dighi",
  "Elliott Bridge",
  "Eco Park",
  "The ladder of liberation",
  "Yadav Chakraborty’s house",
  "Home of Syed Ismail Hossain Siraj",
  "Shrine of Bhola Dewan",
  "Atgharia zamindar house",
  "Shiva Durga Temple of Sanyal Zamindar Bari",
  "Makimpur Zamindar Bari Mandir",
  "Maulana Abdul Hamid Khan Bahanil Bari"];
  districtInfo(name,division,area,population,distanceFromDhaka,touristPlact);

  playAudio("audio/rajshahi.mp3");
  setColor("rajshahi");
  selectorUpdate(54);
  changeImage("rajshahi");
}

function clickNilphamari(){
  let name = "Nilphamari";
  let division = "Rangpur";
  let area = 2179.27;
  let population= 2430627;
  let distanceFromDhaka=267.1;
  let touristPlact=[
  "Balasoghat",
  "Gaibandha Municipal Park",
  "Rangpur Sugar Mills",
  "Extension factory",
  "The historic Shah Sultan Ghazi Mosque in Mir Bagan",
  "Wall Masta Mosque",
  "SKS In.",
  "Friendship Center"];
  districtInfo(name,division,area,population,distanceFromDhaka,touristPlact);

  playAudio("audio/nilphamari.mp3");
  setColor("nilphamari");
  selectorUpdate(47);
  changeImage("nilphamari");
}
function clickPanchagarh(){
  let name = "Panchagarh";
  let division = "Rangpur";
  let area = 1404.63;
  let population= 987644;
  let distanceFromDhaka=414.7;
  let touristPlact=[
  "BMirzapur Shahi Mosque",
  "Maharaja Dighi",
  "Rocks Museum",
  "Vitargarh is a fortified city",
  "Banglabandha Zero Point",
  "Vitargarh",
  "Mirgarh",
  "Asian Highway",
  "Golak Dham Temple",
  "Tetulia Post Bungalow",
  "Maharaja Dighi"];
  districtInfo(name,division,area,population,distanceFromDhaka,touristPlact);

  playAudio("audio/panchagarh.mp3");
  setColor("panchagarh");
  selectorUpdate(50);
  changeImage("panchagarh");
}

function clickThakurgaon(){
  let name = "Thakurgaon";
  let division = "Rangpur";
  let area = 1809.52;
  let population= 1466877;
  let distanceFromDhaka=405.9;
  let touristPlact=[
  "Shalban Mosque and Imambara",
  "Khuniya Dighi Memorial",
  "Sanga Shahi Mosque",
  "Ranishankail",
  "Goraksanath temple well",
  "Haripur zamindar house",
  "Harinmari Shiva Temple",
  "Haripur Rajbari",
  "Jagdal Rajbari",
  "Mahal Rajbari",
  "Rajvita",
  "Jamalpur Zamindarbari Jame Mosque"];
  districtInfo(name,division,area,population,distanceFromDhaka,touristPlact);

  playAudio("audio/thakurgaon.mp3");
  setColor("thakurgaon");
  selectorUpdate(64);
  changeImage("thakurgaon");
}

function clickLalmonirhat(){
  let name = "Lalmonirhat";
  let division = "Rangpur";
  let area = 1247.37;
  let population= 1256099;
  let distanceFromDhaka=337.9;
  let touristPlact=[
  "Three Bigha Corridor and Dahagram Angarpota enclave",
  "Nidaria Mosque",
  "Tusbhandar zamindar house",
  "Kakina zamindar’s house",
  "Burimari land port",
  "Teesta Barrage and Leisure Rest House",
  "The lost mosque"];
  districtInfo(name,division,area,population,distanceFromDhaka,touristPlact);

  playAudio("audio/lalmonirhat.mp3");
  setColor("lalmonirhat");
  selectorUpdate(32);
  changeImage("lalmonirhat");
}

function clickDinajpur(){
  let name = "Dinajpur";
  let division = "Rangpur";
  let area = 3444.30;
  let population= 3109628;
  let distanceFromDhaka=356.9;
  let touristPlact=[
  "Nayabad Mosque",
  "Kantjiu Temple",
  "Swapnapuri",
  "The palace",
  "Ram Sagar",
  "Happiness Sea Ecopark"];
  districtInfo(name,division,area,population,distanceFromDhaka,touristPlact);

  playAudio("audio/dinajpur.mp3");
  setColor("dinajpur");
  selectorUpdate(14);
  changeImage("dinajpur");
}

function clickRangpur(){
  let name = "Rangpur";
  let division = "Rangpur";
  let area = 2400.56;
  let population= 2996336;
  let distanceFromDhaka=302.9;
  let touristPlact=[
  "Tajhat zamindar house",
  "Chikli’s bill",
  "Town Hall",
  "Rangpur Zoo",
  "Itkumari zamindar house",
  "Dewan house zamindar house",
  "Begum Rokeya Memorial Center",
  "Ananda Nagar",
  "Lahiri Hat slaughterhouse",
  "Centennial tree",
  "Ecopark",
  "Nandina Dighi",
  "Nine-domed mosque",
  "Mithapukur Dighi"];
  districtInfo(name,division,area,population,distanceFromDhaka,touristPlact);

  playAudio("audio/rangpur.mp3");
  setColor("rangpur");
  selectorUpdate(56);
  changeImage("rangpur");
}
function clickKurigram(){
  name.innerText = "Kurigram";
  playAudio("audio/kurigram.mp3");
  division.innerText = "Rangpur Division";
  details.innerText = "";
  setColor("kurigram");
  selectorUpdate(29);
}
function clickGaibandha(){
  name.innerText = "Gaibandha";
  playAudio("audio/gaibandha.mp3");
  division.innerText = "Rangpur Division";
  details.innerText = "";
  setColor("gaibandha");
  selectorUpdate(17);
}
function clickJoypurhat(){
  name.innerText = "Joypurhat";
  playAudio("audio/joypurhat.mp3");
  division.innerText = "Rajshahi Division";
  details.innerText = "";
  setColor("joypurhat");
  selectorUpdate(25);
}
function clickNaogaon(){
  name.innerText = "Naogaon";
  playAudio("audio/naogaon.mp3");
  division.innerText = "Rajshahi Division";
  details.innerText = "";
  setColor("naogaon");
  selectorUpdate(40);
}
function clickNawabganj(){
  name.innerText = "Chapai Nawabganj";
  playAudio("audio/nawabganj.mp3");
  division.innerText = "Rajshahi Division";
  details.innerText = "";
  setColor("nawabganj");
  selectorUpdate(45);
}
function clickBogra(){
  name.innerText = "Bogra";
  playAudio("audio/bogra.mp3");
  division.innerText = "Rajshahi Division";
  details.innerText = "";
  setColor("bogra");
  selectorUpdate(6);
}
function clickNatore(){
  name.innerText = "Natore";
  playAudio("audio/natore.mp3");
  division.innerText = "Rajshahi Division";
  details.innerText = "";
  setColor("natore");
  selectorUpdate(44);
}
function clickSirajganj(){
  name.innerText = "Sirajganj";
  playAudio("audio/sirajganj.mp3");
  division.innerText = "Rajshahi Division";
  details.innerText = "";
  setColor("sirajganj");
  selectorUpdate(60);
}
function clickPabna(){
  name.innerText = "Pabna";
  playAudio("audio/pabna.mp3");
  division.innerText = "Rajshahi Division";
  details.innerText = "";
  setColor("pabna");
  selectorUpdate(49);
}
function clickKushtia(){
  name.innerText = "Kushtia";
  playAudio("audio/kushtia.mp3");
  division.innerText = "Khulna Division";
  details.innerText = "";
  setColor("kushtia");
  selectorUpdate(30);
}
function clickRajbari(){
  name.innerText = "Rajbari";
  playAudio("audio/rajbari.mp3");
  division.innerText = "Dhaka Division";
  details.innerText = "";
  setColor("rajbari");
  selectorUpdate(53);
}
function clickMeherpur(){
  name.innerText = "Meherpur";
  playAudio("audio/meherpur.mp3");
  division.innerText = "Khulna Division";
  details.innerText = "";
  setColor("meherpur");
  selectorUpdate(37);
}
function clickChuadanga(){
  name.innerText = "Chuadanga";
  playAudio("audio/chuadanga.mp3");
  division.innerText = "Khulna Division";
  details.innerText = "";
  setColor("chuadanga");
  selectorUpdate(10);
}
function clickJhenaidah(){
  name.innerText = "Jhenaidah";
  playAudio("audio/jhenaidah.mp3");
  division.innerText = "Khulna Division";
  details.innerText = "";
  setColor("jhenaidah");
  selectorUpdate(24);
}
function clickMagura(){
  name.innerText = "Magura";
  playAudio("audio/magura.mp3");
  division.innerText = "Khulna Division";
  details.innerText = "";
  setColor("magura");
  selectorUpdate(34);
}
function clickJessore(){
  name.innerText = "Jessore";
  playAudio("audio/jessore.mp3");
  division.innerText = "Khulna Division";
  details.innerText = "";
  setColor("jessore");
  selectorUpdate(22);
}
function clickNarail(){
  name.innerText = "Narail";
  playAudio("audio/narail.mp3");
  division.innerText = "Khulna Division";
  details.innerText = "";
  setColor("narail");
  selectorUpdate(41);
}
function clickSatkhira(){
  name.innerText = "Satkhira";
  playAudio("audio/satkhira.mp3");
  division.innerText = "Khulna Division";
  details.innerText = "";
  setColor("satkhira");
  selectorUpdate(57);
}
function clickKhulna(){
  name.innerText = "Khulna";
  playAudio("audio/khulna.mp3");
  division.innerText = "Khulna Division";
  details.innerText = "";
  setColor("khulna");
  selectorUpdate(27);
}
function clickFaridpur(){
  name.innerText = "Faridpur";
  playAudio("audio/faridpur.mp3");
  division.innerText = "Dhaka Division";
  details.innerText = "";
  setColor("faridpur");
  selectorUpdate(15);
}
function clickGopalganj(){
  name.innerText = "Gopalganj";
  playAudio("audio/gopalganj.mp3");
  division.innerText = "Dhaka Division";
  details.innerText = "";
  setColor("gopalganj");
  selectorUpdate(19);
}
function clickBagerhat(){
  name.innerText = "Bagerhat";
  playAudio("audio/bagerhat.mp3");
  division.innerText = "Khulna Division";
  details.innerText = "";
  setColor("bagerhat");
  selectorUpdate(1);
}
function clickJamalpur(){
  name.innerText = "Jamalpur";
  playAudio("audio/jamalpur.mp3");
  division.innerText = "Mymenshingh Division";
  details.innerText = "";
  setColor("jamalpur");
  selectorUpdate(21);
}
function clickTangail(){
  name.innerText = "Tangail";
  playAudio("audio/tangail.mp3");
  division.innerText = "Mymenshingh Division";
  details.innerText = "";
  setColor("tangail");
  selectorUpdate(63);
}
function clickManikganj(){
  name.innerText = "Manikganj";
  playAudio("audio/manikganj.mp3");
  division.innerText = "Dhaka Division";
  details.innerText = "";
  setColor("manikganj");
  selectorUpdate(35);
}

function clickMadaripur(){
  name.innerText = "Madaripur";
  playAudio("audio/madaripur.mp3");
  division.innerText = "Dhaka Division";
  details.innerText = "";
  setColor("madaripur");
  selectorUpdate(33);
}
function clickShariatpur(){
  name.innerText = "Shariatpur";
  playAudio("audio/shariatpur.mp3");
  division.innerText = "Dhaka Division";
  details.innerText = "";
  setColor("shariatpur");
  selectorUpdate(58);
}
function clickGazipur(){
  name.innerText = "Gazipur";
  playAudio("audio/gazipur.mp3");
  division.innerText = "Dhaka Division";
  details.innerText = "";
  setColor("gazipur");
  selectorUpdate(18);
}
function clickSherpur(){
  name.innerText = "Sherpur";
  playAudio("audio/sherpur.mp3");
  division.innerText = "Mymenshingh Division";
  details.innerText = "";
  setColor("sherpur");
  selectorUpdate(59);
}
function clickMymenshingh(){
  name.innerText = "Mymenshingh";
  playAudio("audio/mymenshingh.mp3");
  division.innerText = "Mymenshingh Division";
  details.innerText = "";
  setColor("mymenshingh");
  selectorUpdate(39);
}
function clickKishoreganj(){
  name.innerText = "Kishoreganj";
  playAudio("audio/kishoreganj.mp3");
  division.innerText = "Mymenshingh Division";
  details.innerText = "";
  setColor("kishoreganj");
  selectorUpdate(28);
}
function clickNetrokona(){
  name.innerText = "Netrokona";
  playAudio("audio/netrokona.mp3");
  division.innerText = "Mymenshingh Division";
  details.innerText = "";
  setColor("netrokona");
  selectorUpdate(46);
}
function clickSunamganj(){
  name.innerText = "Sunamganj";
  playAudio("audio/sunamganj.mp3");
  division.innerText = "Sylhet Division";
  details.innerText = "";
  setColor("sunamganj");
  selectorUpdate(61);
}
function clickSylhet(){
  name.innerText = "Sylhet";
  playAudio("audio/sylhet.mp3");
  division.innerText = "Sylhet Division";
  details.innerText = "";
  setColor("sylhet");
  selectorUpdate(62);
}
function clickHabiganj(){
  name.innerText = "Habiganj";
  playAudio("audio/habiganj.mp3");
  division.innerText = "Sylhet Division";
  details.innerText = "";
  setColor("habiganj");
  selectorUpdate(20);
}
function clickMoulovibazar(){
  name.innerText = "Moulovibazar";
  playAudio("audio/moulovibazar.mp3");
  division.innerText = "Sylhet Division";
  details.innerText = "";
  setColor("moulovibazar");
  selectorUpdate(36);
}
function clickNarshingdi(){
  name.innerText = "Narshingdi";
  playAudio("audio/narshingdi.mp3");
  division.innerText = "Dhaka Division";
  details.innerText = "";
  setColor("narshingdi");
  selectorUpdate(43);
}
function clickNarayanganj(){
  name.innerText = "Narayanganj";
  playAudio("audio/narayanganj.mp3");
  division.innerText = "Dhaka Division";
  details.innerText = "";
  setColor("narayanganj");
  selectorUpdate(42);
}

function clickMunshiganj(){
  name.innerText = "Munshiganj";
  playAudio("audio/munshiganj.mp3");
  division.innerText = "Dhaka Division";
  details.innerText = "";
  setColor("munshiganj");
  selectorUpdate(38);
}
function clickComilla(){
  name.innerText = "Cumilla";
  playAudio("audio/comilla.mp3");
  division.innerText = "Chottogram Division";
  details.innerText = "";
  setColor("comilla");
  selectorUpdate(11);
}
function clickChandpur(){
  name.innerText = "Chandpur";
  playAudio("audio/chandpur.mp3");
  division.innerText = "Chottogram Division";
  details.innerText = "";
  setColor("chandpur");
  selectorUpdate(8);
}
function clickLaxmipur(){
  name.innerText = "Laxmipur";
  playAudio("audio/laxmipur.mp3");
  division.innerText = "Chottogram Division";
  details.innerText = "";
  setColor("laxmipur");
  selectorUpdate(31);
}
function clickPerojpur(){
  name.innerText = "Pirojpur";
  playAudio("audio/perojpur.mp3");
  division.innerText = "Barisal Division";
  details.innerText = "";
  setColor("perojpur");
  selectorUpdate(52);
}
function clickJhalokati(){
  name.innerText = "Jhalokati";
  playAudio("audio/jhalokati.mp3");
  division.innerText = "Barisal Division";
  details.innerText = "";
  setColor("jhalokati");
  selectorUpdate(23);
}
function clickBarisal(){
  name.innerText = "Barisal";
  playAudio("audio/barisal.mp3");
  division.innerText = "Barisal Division";
  details.innerText = "";
  setColor("barisal");
  selectorUpdate(4);
}
function clickBarguna(){
  name.innerText = "Barguna";
  playAudio("audio/barguna.mp3");
  division.innerText = "Barisal Division";
  details.innerText = "";
  setColor("barguna");
  selectorUpdate(3);
}
function clickPatuakhali(){
  name.innerText = "Patuakhali";
  playAudio("audio/patuakhali.mp3");
  division.innerText = "Barisal Division";
  details.innerText = "";
  setColor("patuakhali");
  selectorUpdate(51);
}
function clickBhola(){
  name.innerText = "Bhola";
  playAudio("audio/bhola.mp3");
  division.innerText = "Barisal Division";
  details.innerText = "";
  setColor("bhola");
  selectorUpdate(5);
}
function clickNoakhali(){
  name.innerText = "Noakhali";
  playAudio("audio/noakhali.mp3");
  division.innerText = "Chottogram Division";
  details.innerText = "";
  setColor("noakhali");
  selectorUpdate(48);
}
function clickFeni(){
  name.innerText = "Feni";
  playAudio("audio/feni.mp3");
  division.innerText = "Chottogram Division";
  details.innerText = "";
  setColor("feni");
  selectorUpdate(16);
}
function clickChottogram(){
  name.innerText = "Chottogram";
  playAudio("audio/chottogram.mp3");
  division.innerText = "Chottogram Division";
  details.innerText = "";
  setColor("chottogram");
  selectorUpdate(9);
}
function clickKhagrachari(){
  name.innerText = "Khagrachari";
  playAudio("audio/khagrachari.mp3");
  division.innerText = "Chottogram Division";
  details.innerText = "";
  setColor("khagrachari");
  selectorUpdate(26);
}
function clickCoxs_bazar(){
  name.innerText = "Cox's bazar";
  playAudio("audio/coxs_bazar.mp3");
  division.innerText = "Chottogram Division";
  details.innerText = "";
  setColor("coxs_bazar");
  selectorUpdate(12);
}
function clickBandarban(){
  name.innerText = "Bandarban";
  playAudio("audio/bandarban.mp3");
  division.innerText = "Chottogram Division";
  details.innerText = "";
  setColor("bandarban");
  selectorUpdate(2);
}
function clickRangamati(){
  name.innerText = "Rangamati";
  playAudio("audio/rangamati.mp3");
  division.innerText = "Chottogram Division";
  details.innerText = "";
  setColor("rangamati");
  selectorUpdate(55);
}



function selectorChanged(){
  var x = document.getElementById("DistrictSelector").value;
  console.log(x);
  var newFunction = window["click" + x];
    newFunction();
}