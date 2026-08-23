const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 20;
const columns = Math.floor(canvas.width / fontSize);
const drops = [];

for(let i=0;i<columns;i++){
    drops[i]=Math.random()*-100;
}

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function matrix(){

    ctx.fillStyle="rgba(0,0,0,0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#00ff66";
    ctx.font=fontSize+"px Consolas";

    for(let i=0;i<drops.length;i++){

        const text=chars[Math.floor(Math.random()*chars.length)];

        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if(drops[i]*fontSize>canvas.height && Math.random()>0.975){
            drops[i]=0;
        }

        drops[i]++;

    }

}

setInterval(matrix,33);

// =====================

const title=document.getElementById("codex");

const names=[
"CODEX",
"CØDEX",
"CODΞX",
"COD3X",
"C0DEX"
];

setInterval(()=>{

title.textContent=names[Math.floor(Math.random()*names.length)];

},150);

// =====================

const boot=document.getElementById("bootlogs");

const logs=[

"Initializing Kernel...",
"Loading Memory...",
"Checking Hardware...",
"Connecting Database...",
"Scanning Files...",
"Loading Graphics...",
"Authenticating User...",
"Starting AI Engine...",
"Decrypting Assets...",
"Loading Drivers...",
"Connecting Network...",
"Synchronizing...",
"Building Interface...",
"Finalizing...",
"System Ready.."

];


let line=0;

const bootTimer=setInterval(()=>{

if(line<logs.length){

const p=document.createElement("p");

p.textContent="> "+logs[line];

boot.appendChild(p);

boot.scrollTop=boot.scrollHeight;

line++;

}

},800);

// =====================

const progress=document.getElementById("progress");
const percent=document.getElementById("percent");
const home=document.getElementById("homeButton");

// 1 detik

let value=0;

const total=12;

const timer=setInterval(()=>{

value++;

const p=value/total*100;

progress.style.width=p+"%";

percent.textContent=Math.floor(p)+"%";

if(value>=total){

clearInterval(timer);

document.getElementById("endMessage").style.display = "block";

percent.textContent = "SYSTEM READY";

}

},1000);

// =====================

home.onclick=function(){

location.href="../index.html";

};

// =====================

window.onresize=function(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

};
