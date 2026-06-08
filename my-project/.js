<script>
const roles = [
"LTE RAN Enthusiast",
"AI Learner",
"Data Analyst",
"Web Developer"
];

let role = 0;
let char = 0;
let deleting = false;

const typing =
document.getElementById("typing");

function type(){

let current = roles[role];

if(!deleting){

typing.textContent =
current.substring(0,char++);

if(char > current.length){
deleting = true;
setTimeout(type,1500);
return;
}

}else{

typing.textContent =
current.substring(0,char--);

if(char < 0){
deleting = false;
role = (role + 1) % roles.length;
}
}

setTimeout(type,deleting ? 50 : 100);
}

type();
</script>