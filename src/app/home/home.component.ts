import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private store:AngularFirestore) { }

  ngOnInit(): void {
    document.body.style.backgroundColor="black";
  }
username;
password;
name;
lastname;
msg;
  logout(){
    this.router.navigate(["/login"])
    sessionStorage.setItem("logged","false")
  }
  add(){
    var admin={}
    if(this.username !="" && this.password !=""){
    admin["username"]=this.username;
    admin["password"]=this.password;
    admin["name"]=this.name;
    admin["last"]=this.lastname;
     this.store.collection("admin").add(admin).then(res=>{
       console.log(res)
       this.username =" " , this.password ="",
       this.lastname=" ",this.name=" ";
       this.msg="sucess"
     })
  }
}
}
