const notesdiv=document.querySelector("#titlediv");
const titlecard=document.querySelector("#title");
const addnotebtn=document.querySelector("#add");
const mainnotesdiv=document.querySelector(".mainnotes");
const removenotediv=document.querySelector(".removenote");
const select=document.querySelector("#select");
addnotebtn.addEventListener("click",addNote);
var localstorage;
var checkboxenable;
var flagenable;
var paroptdiv;
var clrarr=['#FED7D7','#FEFCBF','#FEEBC8','#C6F6D5','#BEE3F8','#C3DAFE','#E9D8FD','#FED7E2'];
function addNote(){
    const parentdiv=document.createElement('div');
    parentdiv.classList.add("parentdiv");
    parentdiv.setAttribute("draggable","true");
    mainnotesdiv.appendChild(parentdiv);
    const titleofnote= document.createElement("p");
    parentdiv.appendChild(titleofnote);
    titleofnote.classList.add("titleofnote");
    const contentdiv=document.createElement('div');
    contentdiv.setAttribute('id','contentdiv');
    contentdiv.classList.add("contentdiv");
    parentdiv.appendChild(contentdiv)
    contentdiv.contentEditable=true;
    titleofnote.contentEditable=true;
    const tooldiv=document.createElement('div');
    parentdiv.appendChild(tooldiv);
    tooldiv.classList.add("toolbox");
    tooldiv.contentEditable=false;
    /*checkboxenable=document.createElement("input");
    checkboxenable.setAttribute("type","checkbox");
    checkboxenable.label="Show CB";
    tooldiv.appendChild(checkboxenable);
    checkboxenable.addEventListener('click',()=>{
        if(checkboxenable.checked==true){
            const p=document.createElement('p');
            var c1=document.createElement("input");
            c1.setAttribute("type","checkbox");
            p.appendChild(c1);
            contentdiv.appendChild(p);
        }
    });*/
    const removebtn=document.createElement('img');
    removebtn.classList.add('removebtn');
    removebtn.src="assets/recycle-bin.png";
    tooldiv.appendChild(removebtn);
    removebtn.addEventListener('click',()=>{
        mainnotesdiv.removeChild(parentdiv);
    });
    const stickynotebtn=document.createElement('img');
    stickynotebtn.classList.add('stickynotebtn');
    stickynotebtn.src="./assets/sticky-note.png";
    tooldiv.appendChild(stickynotebtn);
    stickynotebtn.addEventListener('click',(e)=>{
   
        mainnotesdiv.removeChild(e.target.parentNode.parentNode);
        addStickyNote();

    });
    const changecolor=document.createElement('img');
    changecolor.src="assets/colorchange.png";
    changecolor.classList.add('changecolor');
    tooldiv.appendChild(changecolor);
    changecolor.addEventListener('click',()=>{
        (function chooseBG(){
            let index=Math.round(Math.random()*6);
            parentdiv.style.backgroundColor = clrarr[index];
        })();
    });
    const fileuploader=document.createElement("input");
    fileuploader.setAttribute("type","file");
    fileuploader.setAttribute("id","file");
    fileuploader.setAttribute("display","none");
    const lab=document.createElement("label");
    lab.setAttribute("for","file");
    const labimg=document.createElement("img");
    labimg.src="./assets/upload1.png";
    labimg.classList.add("fileuploader");
    lab.appendChild(labimg);
    tooldiv.appendChild(fileuploader);
    tooldiv.appendChild(lab);
    const newmsgdiv=document.createElement("div");
    fileuploader.addEventListener('change', ()=>{
        newmsgdiv.innerText="Selected File :"+fileuploader.value;
        contentdiv.appendChild(newmsgdiv);
        
    });
}
function addStickyNote(){
    const newnote=document.createElement('div');
    (function chooseBG(){
        let index=Math.round(Math.random()*6);
        newnote.style.backgroundColor = clrarr[index];
    })();
    mainnotesdiv.appendChild(newnote);
    const note=document.createElement('div');
    newnote.classList.add("parentnote");
    newnote.appendChild(note);
    note.contentEditable=true;
    note.classList.add('newnote');
    const bottomdiv=document.createElement('div');
    const removebtn=document.createElement('img'); 
    bottomdiv.classList.add('bottomdiv');
    removebtn.classList.add('removebtn');
    removebtn.src="assets/recycle-bin.png";
    bottomdiv.contentEditable=false;
    newnote.appendChild(bottomdiv);
    bottomdiv.appendChild(removebtn);
    removebtn.addEventListener('click',()=>{
    mainnotesdiv.removeChild(newnote);
    });
    function displayonload(){
    localstorage.setItem("Note",contentdiv.value);
    localstorage.setItem("StickyNote",note.value);
    }
    document.body.addEventListener('load',()=>{
    displayonload();
    });
    
}


