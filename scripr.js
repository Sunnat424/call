// o1 =document.querySelector('.o1'),
// o2 =document.querySelector('.o2'),
// o3 =document.querySelector('.o3'),
// o4 =document.querySelector('.o4'),
// o5 =document.querySelector('.o5'),
// o6 =document.querySelector('.o6'),
// o7 =document.querySelector('.o7'),
// o8 =document.querySelector('.o8'),
// o9 =document.querySelector('.o9'),
// o0 =document.querySelector('.o0'),
// min =document.querySelector('.min'),                
// plu =document.querySelector('.plu'),
// umno =document.querySelector('.umno'),
// del =document.querySelector('.del'),



let pokaz = document.querySelector('.header-p'),
heder = document.querySelectorAll('.header_rerult'),
pop = document.querySelector('.pop'),
headerZnak = document.querySelector('.header-znak'),
pokazz = document.querySelector('.header-p2'),
calZnak = document.querySelectorAll('.cal-znak'),
calNumber = document.querySelectorAll('.cal-number'),
ansver =document.querySelector('.ansver'),
pusto =document.querySelector('.pusto'),
dell = document.querySelector('.del'),
button = document.querySelectorAll('button');



calNumber.forEach((el)=> {
el.addEventListener('click', function() {
    close(el)
   znak()
   dellite()
    })
      
 })

  function close(el){
    let nomber = el.closest('.cal-number').innerHTML;
    if(headerZnak.innerHTML == ''){
      
       pokaz.style= `z-index: -100;
                     margin-left: -3px;`;
        pop.innerHTML +=nomber;
    } 
    
    console.log(nomber);
    if(headerZnak.innerHTML != ''){
      
      pokazz.innerHTML += nomber;
      
    }
  }

  dell.addEventListener('click', function() {
    // dellite()
    if(pokazz.innerHTML !=''){
      pokazz.innerHTML= '' ;
    }else if(pokazz.innerHTML == ''){
     headerZnak.innerHTML = '' ;
    }
    if(headerZnak.innerHTML == ''){
      pop.innerHTML = '' ;
      pokaz.style = `z-index:1;`;
    }
    
  })

  function znak(){
    calZnak.forEach((lo)=> {
        lo.addEventListener('click', function() {
            let randoms = lo.closest('.cal-znak');
            headerZnak.innerHTML= randoms.innerHTML
           
        })
    })

  }
function atvet() {
     
    let lol =  pop.innerHTML - pokazz.innerHTML;
    let pluse =  +pop.innerHTML + +pokazz.innerHTML;
    let dell =  pop.innerHTML / pokazz.innerHTML;
    let umno =  pop.innerHTML * pokazz.innerHTML;
    
      headerZnak.innerHTML == '-' ? pop.innerHTML = lol : '';
     headerZnak.innerHTML == `+` ? pop.innerHTML = pluse : '';
     headerZnak.innerHTML == '/'?  pop.innerHTML = dell: '';
    headerZnak.innerHTML == '*' ? pop.innerHTML = umno  : '';
    
  }
  pusto.addEventListener('click', ()=> {
    headerZnak.innerHTML = '';
    pokazz.innerHTML = '';
    pokaz.innerHTML = 0;
    pokaz.style = `z-index:1 ;`
    pop.innerHTML = '';
  })
  function dellite(){
    heder.forEach((el) => {
      let dele  = el.closest('.deli').innerHTML;
     
     
        
      
     
    })
  
  }

  ansver.addEventListener('click', ()=> {
    atvet()
    headerZnak.innerHTML = '';
    pokazz.innerHTML = '';
    
  } )
  
