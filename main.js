function nightMode( ){
if(Number(sessionStorage.nightMode)==0){
        sessionStorage.nightMode=1;
        document.body.style.setProperty('--bg-color', "#151E29");
        document.body.style.setProperty('--font-color'," rgb(199, 199, 199)");
        document.body.style.setProperty('--input-color', "#1d8dee");
        document.body.style.setProperty('--bx-shadow0', "rgba(255 , 255 , 255,0.02)");
        document.body.style.setProperty('--bx-shadow1', "rgba( 0, 0, 0, 0.27)");
        document.body.style.setProperty('--bx-shadow2', "rgba(255,255,255, 0.07)");
        document.body.style.setProperty('--hover', "rgba(0, 108, 144, 1)");
        document.getElementById("checkbox").checked=true;
        }
else{
        sessionStorage.nightMode=0;
        document.body.style.setProperty('--bg-color', "#f0ebe2");
        document.body.style.setProperty('--font-color',"#1e272e");
        document.body.style.setProperty('--input-color',"#ed4264");
        document.body.style.setProperty('--bx-shadow0', "rgba(255 , 255 , 255,0.5)");
        document.body.style.setProperty('--bx-shadow1', "rgba( 0, 0, 0, 0.15)");
        document.body.style.setProperty('--bx-shadow2', "rgba(255,255,255, 0.9)");
        document.body.style.setProperty('--hover', "rgb(175, 28, 84)");
    }
}
