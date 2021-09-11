import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store:AngularFirestore,
    private router:Router
    ) { }

  ngOnInit(): void {
    document.body.style.backgroundColor="black"
    if(eval(sessionStorage.getItem("logged"))){
      this.router.navigate(["/home"])
    }
  }
  username;
  password;
  check(){
    var pass;
    this.store.collection("admin").ref.where("username","==",this.username).where("password","==",this.password)
    .get().then(res=>{
      res.forEach(obj=>{
        this.router.navigate(["/home"])
        sessionStorage.setItem("logged","true")
      })
    }).catch(err=>{
      console.log(err)
    })
  }
}
