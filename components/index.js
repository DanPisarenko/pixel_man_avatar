import template from "./template.js";

export default class DanAvatar extends HTMLElement {
    static get observedAttributes() {
        return []
    }
    connectedCallback() {
        // this.data = {
        //     type: this.type
        // }
        this.innerHTML = template.render({bg: this.getAttribute("bg")});
        const btnBody = document.querySelector(".btn-body1");
        const btnBody2 = document.querySelector(".btn-body2");
        const btnBody3 = document.querySelector(".btn-body3");

        btnBody.addEventListener("click", this.AddBody1);
        btnBody2.addEventListener("click", this.AddBody2);
        btnBody3.addEventListener("click", this.AddBody3);

        const btnHair = document.querySelector(".btn-hair");
        const btnHair2 = document.querySelector(".btn-hair2");
        const btnHair3 = document.querySelector(".btn-hair3");
        const btnHair4 = document.querySelector(".btn-hair4");

        btnHair.addEventListener("click", this.AddHair1);
        btnHair2.addEventListener("click", this.AddHair2);
        btnHair3.addEventListener("click", this.AddHair3);
        btnHair4.addEventListener("click", this.AddHair4);


        const btnEyes = document.querySelector(".btn-eyes");
        const btnEyes2 = document.querySelector(".btn-eyes2");

        btnEyes.addEventListener("click", this.AddEyes1);
        btnEyes2.addEventListener("click", this.AddEyes2);




    }
    AddHair1(){
        const addHair = document.querySelector(".hair1");
        const addHair2 = document.querySelector(".hair2");
        const addHair3 = document.querySelector(".hair3");
        const addHair4 = document.querySelector(".hair4");




        if(addHair.style.display === "none"){
            addHair2.style.display = "none";
            addHair4.style.display = "none";
            addHair3.style.display = "none";
            addHair.style.display = "block";
           
        } else{
            addHair.style.display = "block";
        }
    }
    AddHair2(){
        const addHair = document.querySelector(".hair1");
        const addHair2 = document.querySelector(".hair2");
        const addHair3 = document.querySelector(".hair3");
        const addHair4 = document.querySelector(".hair4");



        if(addHair2.style.display === "none"){
            addHair2.style.display = "block";
            addHair3.style.display = "none";
            addHair4.style.display = "none";
            addHair.style.display = "none";

        } else{
            addHair2.style.display = "none";
        }
    }
    AddHair3(){
        const addHair = document.querySelector(".hair1");
        const addHair2 = document.querySelector(".hair2");
        const addHair3 = document.querySelector(".hair3");
        const addHair4 = document.querySelector(".hair4");




        if(addHair3.style.display === "none"){
            addHair2.style.display = "none";
            addHair3.style.display = "block";
            addHair4.style.display = "none";
            addHair.style.display = "none";
           
        } else{
            addHair3.style.display = "none";
        }
    }
    AddHair4(){
        const addHair = document.querySelector(".hair1");
        const addHair2 = document.querySelector(".hair2");
        const addHair3 = document.querySelector(".hair3");
        const addHair4 = document.querySelector(".hair4");




        if(addHair4.style.display === "none"){
            addHair2.style.display = "none";
            addHair3.style.display = "none";
            addHair4.style.display = "block";
            addHair.style.display = "none";

        } else{
            addHair4.style.display = "none";
        }
    }
    AddBody1(){
        const addBody3 = document.querySelector(".avatar-body3");
        const addBody2 = document.querySelector(".avatar-body2");
        const addBody = document.querySelector(".avatar-body");

        if(addBody.style.display === "none"){
            addBody.style.display = "block";
            addBody2.style.display = "none";
            addBody3.style.display = "none";

        } else{
            addBody.style.display = "block";
            addBody3.style.display = "none";
            addBody2.style.display = "none";
        }
    }
    AddBody2(){
        const addBody3 = document.querySelector(".avatar-body3");
        const addBody2 = document.querySelector(".avatar-body2");
        const addBody = document.querySelector(".avatar-body");

        if(addBody2.style.display === "none"){
            addBody.style.display = "none";
            addBody2.style.display = "block";
            addBody3.style.display = "none";

        } else{
            addBody.style.display = "block";
            addBody3.style.display = "none";
            addBody2.style.display = "none";
        }
    }
    AddBody3(){
        const addBody3 = document.querySelector(".avatar-body3");
        const addBody2 = document.querySelector(".avatar-body2");
        const addBody = document.querySelector(".avatar-body");

        if(addBody3.style.display === "none"){
            addBody.style.display = "none";
            addBody2.style.display = "none";
            addBody3.style.display = "block";

        } else{
            addBody.style.display = "block";
            addBody3.style.display = "none";
            addBody2.style.display = "none";
        }
    }

    AddEyes1(){
        const addEyes = document.querySelector(".eye");
        const addEyes2 = document.querySelector(".eye2");



        if(addEyes.style.display === "none"){
            addEyes2.style.display = "none";
            addEyes.style.display = "block";
           
        } else{
            addEyes.style.display = "block";
        }
    }
    AddEyes2(){
        const addEyes = document.querySelector(".eye");
        const addEyes2 = document.querySelector(".eye2");



        if(addEyes2.style.display === "none"){
            addEyes2.style.display = "block";
            addEyes.style.display = "none";
           
        } else{
            addEyes2.style.display = "none";
            addEyes.style.display = "block";
        }
    }




}