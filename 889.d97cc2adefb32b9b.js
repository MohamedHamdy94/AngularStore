"use strict";(self.webpackChunkangular_store=self.webpackChunkangular_store||[]).push([[889],{5889:($,f,i)=>{i.r(f),i.d(f,{AuthModule:()=>z});var a=i(9808),t=i(2382),u=i(4091),o=i(1223);function c(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this field is required "),o.qZA())}function p(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this format is not match email format "),o.qZA())}function g(r,n){if(1&r&&(o.TgZ(0,"div",16),o.YNc(1,c,2,0,"small",17),o.YNc(2,p,2,0,"small",17),o.qZA()),2&r){o.oxw();const e=o.MAs(10);o.xp6(1),o.Q6J("ngIf",null==e.errors?null:e.errors.required),o.xp6(1),o.Q6J("ngIf",null==e.errors?null:e.errors.pattern)}}function _(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this field is required "),o.qZA())}function Z(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this field is must be 8 or more characters "),o.qZA())}function A(r,n){if(1&r&&(o.TgZ(0,"div",16),o.YNc(1,_,2,0,"small",17),o.YNc(2,Z,2,0,"small",17),o.qZA()),2&r){o.oxw();const e=o.MAs(16);o.xp6(1),o.Q6J("ngIf",e.hasError("required")),o.xp6(1),o.Q6J("ngIf",e.hasError("minlength"))}}function v(r,n){return e=>{const s=e.controls[n];s.errors&&!s.errors.confirmedValidator||s.setErrors(e.controls[r].value!==s.value?{confirmedValidator:!0}:null)}}function x(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this field is required "),o.qZA())}function T(r,n){if(1&r&&(o.TgZ(0,"div",17),o.YNc(1,x,2,0,"small",18),o.qZA()),2&r){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.formControls.name.errors?null:e.formControls.name.errors.required)}}function h(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this field is required "),o.qZA())}function w(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this field is not mactch the email format "),o.qZA())}function q(r,n){if(1&r&&(o.TgZ(0,"div",17),o.YNc(1,h,2,0,"small",18),o.YNc(2,w,2,0,"small",18),o.qZA()),2&r){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.formControls.emailAddress.errors?null:e.formControls.emailAddress.errors.required),o.xp6(1),o.Q6J("ngIf",null==e.formControls.emailAddress.errors?null:e.formControls.emailAddress.errors.pattern)}}function b(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this field is required "),o.qZA())}function I(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this field is contain spaces "),o.qZA())}function N(r,n){if(1&r&&(o.TgZ(0,"div",17),o.YNc(1,b,2,0,"small",18),o.YNc(2,I,2,0,"small",18),o.qZA()),2&r){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.formControls.userName.errors?null:e.formControls.userName.errors.required),o.xp6(1),o.Q6J("ngIf",null==e.formControls.userName.errors?null:e.formControls.userName.errors.pattern)}}function U(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this field is required "),o.qZA())}function J(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," the min length must be 8 "),o.qZA())}function F(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this field is not mactch the password format "),o.qZA())}function R(r,n){if(1&r&&(o.TgZ(0,"div",17),o.YNc(1,U,2,0,"small",18),o.YNc(2,J,2,0,"small",18),o.YNc(3,F,2,0,"small",18),o.qZA()),2&r){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.formControls.password.errors?null:e.formControls.password.errors.required),o.xp6(1),o.Q6J("ngIf",null==e.formControls.password.errors?null:e.formControls.password.errors.minlength),o.xp6(1),o.Q6J("ngIf",null==e.formControls.password.errors?null:e.formControls.password.errors.pattern)}}function Q(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this field is required "),o.qZA())}function Y(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," this field is not mactch the password format "),o.qZA())}function y(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," the min length must be 8 "),o.qZA())}function P(r,n){1&r&&(o.TgZ(0,"small"),o._uU(1," Password and Confirm Password must be match. "),o.qZA())}function L(r,n){if(1&r&&(o.TgZ(0,"div",17),o.YNc(1,Q,2,0,"small",18),o.YNc(2,Y,2,0,"small",18),o.YNc(3,y,2,0,"small",18),o.YNc(4,P,2,0,"small",18),o.qZA()),2&r){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.formControls.confirmPassword.errors?null:e.formControls.confirmPassword.errors.required),o.xp6(1),o.Q6J("ngIf",null==e.formControls.confirmPassword.errors?null:e.formControls.confirmPassword.errors.pattern),o.xp6(1),o.Q6J("ngIf",null==e.formControls.confirmPassword.errors?null:e.formControls.confirmPassword.errors.minLength),o.xp6(1),o.Q6J("ngIf",null==e.formControls.password.errors?null:e.formControls.password.errors.confirmedValidator)}}const M=[{path:"login",component:(()=>{class r{constructor(){}ngOnInit(){}submitloginForm(e){console.log(e)}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-login"]],decls:24,vars:3,consts:[[1,"container-fluid"],[1,"row","justify-content-center"],[1,"text-center","text-primary","fw-bold","mt-5","col-12"],[1,"m-5","col-5","d-flex","flex-column",3,"ngSubmit"],["loginForm","ngForm"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label","fw-bold","fs-5"],["type","email","id","exampleInputEmail1","required","","ngModel","","name","emailAddress","pattern","^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",1,"form-control"],["emailAddress","ngModel"],["class","text-danger",4,"ngIf"],["for","exampleInputPassword1",1,"form-label","fw-bold","fs-5"],["type","password","id","exampleInputPassword1","required","","ngModel","","minlength","8","name","pass",1,"form-control"],["pass","ngModel"],["type","submit",1,"btn","btn-primary","fw-bold","fs-3",3,"disabled"],[1,"fw-bold","fs-5","text-center","pt-5"],[1,"text-dark"],[1,"text-danger"],[4,"ngIf"]],template:function(e,l){if(1&e){const s=o.EpF();o.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),o._uU(3,"Login"),o.qZA(),o.TgZ(4,"form",3,4),o.NdJ("ngSubmit",function(){o.CHM(s);const m=o.MAs(5);return l.submitloginForm(m)}),o.TgZ(6,"div",5)(7,"label",6),o._uU(8,"Email address"),o.qZA(),o._UZ(9,"input",7,8),o.YNc(11,g,3,2,"div",9),o.qZA(),o.TgZ(12,"div",5)(13,"label",10),o._uU(14,"Password"),o.qZA(),o._UZ(15,"input",11,12),o.YNc(17,A,3,2,"div",9),o.qZA(),o.TgZ(18,"button",13),o._uU(19,"Login"),o.qZA(),o.TgZ(20,"p",14),o._uU(21,"Don't have account /? "),o.TgZ(22,"a",15),o._uU(23," Register"),o.qZA()()()()()}if(2&e){const s=o.MAs(5),d=o.MAs(10),m=o.MAs(16);o.xp6(11),o.Q6J("ngIf",d.touched&&!d.valid),o.xp6(6),o.Q6J("ngIf",m.touched&&!m.valid),o.xp6(1),o.Q6J("disabled",s.invalid)}},directives:[t._Y,t.JL,t.F,t.Fj,t.Q7,t.JJ,t.On,t.c5,a.O5,t.wO],styles:[""]}),r})()},{path:"register",component:(()=>{class r{constructor(e){this.FB=e,this.loginForm=this.FB.group({name:["",t.kI.required],emailAddress:["",[t.kI.required,t.kI.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],userName:["",[t.kI.required,t.kI.pattern("^[^\r\n\t\f\v ]*$")]],password:["",[t.kI.required,t.kI.minLength(8),t.kI.pattern("^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))).{8,32}$")]],confirmPassword:["",[t.kI.required,t.kI.minLength(8),t.kI.pattern("^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))).{8,32}$")]]},{validator:v("password","confirmPassword")})}get formControls(){return this.loginForm.controls}submitloginForm(){console.log(this.loginForm)}ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)(o.Y36(t.qu))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-register"]],decls:32,vars:7,consts:[[1,"container-fluid"],[1,"row","justify-content-center"],[1,"text-primary","fw-bold","text-center","pt-5"],[1,"m-5","col-5","d-flex","flex-column",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","name",1,"form-label","fw-bold","fs-5"],["type","text","id","name","formControlName","name",1,"form-control"],["class","text-danger",4,"ngIf"],["for","email",1,"form-label","fw-bold","fs-5"],["type","email","id","email","formControlName","emailAddress",1,"form-control"],["for","userName",1,"form-label","fw-bold","fs-5"],["type","text","id","userName","formControlName","userName",1,"form-control"],["for","pass",1,"form-label","fw-bold","fs-5"],["type","password","id","pass","formControlName","password",1,"form-control"],["for","confirmPass",1,"form-label","fw-bold","fs-5"],["type","password","id","confirmPass","formControlName","confirmPassword",1,"form-control"],["type","submit",1,"btn","btn-primary","fw-bold",3,"disabled"],[1,"text-danger"],[4,"ngIf"]],template:function(e,l){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),o._uU(3,"Register"),o.qZA(),o.TgZ(4,"form",3),o.NdJ("ngSubmit",function(){return l.submitloginForm()}),o.TgZ(5,"div",4)(6,"label",5),o._uU(7,"Name"),o.qZA(),o._UZ(8,"input",6),o.YNc(9,T,2,1,"div",7),o.qZA(),o.TgZ(10,"div",4)(11,"label",8),o._uU(12,"Email"),o.qZA(),o._UZ(13,"input",9),o.YNc(14,q,3,2,"div",7),o.qZA(),o.TgZ(15,"div",4)(16,"label",10),o._uU(17,"User Name"),o.qZA(),o._UZ(18,"input",11),o.YNc(19,N,3,2,"div",7),o.qZA(),o.TgZ(20,"div",4)(21,"label",12),o._uU(22,"Password"),o.qZA(),o._UZ(23,"input",13),o.YNc(24,R,4,3,"div",7),o.qZA(),o.TgZ(25,"div",4)(26,"label",14),o._uU(27,"Confirm Password"),o.qZA(),o._UZ(28,"input",15),o.YNc(29,L,5,4,"div",7),o.qZA(),o.TgZ(30,"button",16),o._uU(31,"Submit"),o.qZA()()()()),2&e&&(o.xp6(4),o.Q6J("formGroup",l.loginForm),o.xp6(5),o.Q6J("ngIf",l.loginForm.controls.name.touched&&!l.loginForm.controls.name.valid),o.xp6(5),o.Q6J("ngIf",l.loginForm.controls.emailAddress.touched&&!l.loginForm.controls.emailAddress.valid),o.xp6(5),o.Q6J("ngIf",l.loginForm.controls.userName.touched&&!l.loginForm.controls.userName.valid),o.xp6(5),o.Q6J("ngIf",l.loginForm.controls.password.touched&&!l.loginForm.controls.password.valid),o.xp6(5),o.Q6J("ngIf",l.loginForm.controls.confirmPassword.touched&&!l.loginForm.controls.password.valid),o.xp6(1),o.Q6J("disabled",l.loginForm.invalid))},directives:[t._Y,t.JL,t.sg,t.Fj,t.JJ,t.u,a.O5],styles:[""]}),r})()}];let k=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[u.Bz.forChild(M)],u.Bz]}),r})(),z=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[a.ez,k,t.u5,t.UX]]}),r})()}}]);