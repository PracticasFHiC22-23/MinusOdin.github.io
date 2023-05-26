(function(){"use strict";var e={2426:function(e,a,n){var l=n(9242),t=n(3396);function o(e,a,n,l,o,i){const r=(0,t.up)("navbar"),s=(0,t.up)("router-view"),u=(0,t.up)("easyfit-footer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(r),(0,t.Wm)(s),(0,t.Wm)(u,{class:"footer"})],64)}const i={class:"navbar navbar-expand-lg navbar-light bg-light"},r=(0,t._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,t._)("span",{class:"navbar-toggler-icon"})],-1),s={class:"collapse navbar-collapse",id:"navbarCollapse"},u={class:"navbar-nav me-auto"};function d(e,a){const n=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("nav",i,[(0,t.Wm)(n,{to:"/",class:"navbar-brand",href:"#"},{default:(0,t.w5)((()=>[(0,t.Uk)("Easyfit")])),_:1}),r,(0,t._)("div",s,[(0,t._)("div",u,[(0,t.Wm)(n,{to:"/fitness",class:"nav-item nav-link"},{default:(0,t.w5)((()=>[(0,t.Uk)("Fitness")])),_:1}),(0,t.Wm)(n,{to:"/nutricion",class:"nav-item nav-link"},{default:(0,t.w5)((()=>[(0,t.Uk)("Nutricion")])),_:1}),(0,t.Wm)(n,{to:"/perfil",class:"nav-item nav-link"},{default:(0,t.w5)((()=>[(0,t.Uk)("Perfil")])),_:1})])])])}var c=n(89);const p={},m=(0,c.Z)(p,[["render",d]]);var g=m;const v=(0,t.uE)('<div class="col-sm"><p>Quienes somos</p></div><div class="col-sm"><p>Contactar</p></div><div class="col-sm"><p>FAQ</p></div><div class="col-sm"><p><a href="#" class="text-dark">Terminos de uso</a></p><p><a href="#" class="text-dark">Copyright</a></p></div>',4);function b(e,a,n,l,t,o){return v}var f={name:"EasyfitFooter"};const _=(0,c.Z)(f,[["render",b]]);var y=_,w={data(){return{activePage:0,ejercicio:[{route:"/fitness/0",title:"Ejercicios Aerobicos",content:"Text"},{route:"/fitness/1",title:"Ejercicios de Flexibilidad",content:"Text"},{route:"/fitness/2",title:"Ejercicios de Resistencia",content:"Text"}]}},methods:{async getEjercicios(){let e=await fetch("ejercicios.json"),a=await e.json();return a}},components:{Navbar:g,EasyfitFooter:y}};const h=(0,c.Z)(w,[["render",o]]);var k=h,U=(n(7154),n(2483));const j={class:"container"},x=(0,t._)("h1",null,"Bienvenido a Easyfit",-1),V=[x];function P(e,a,n,l,o,i){return(0,t.wg)(),(0,t.iD)("div",j,V)}var D={created(){console.log(this.$route.params.index)}};const E=(0,c.Z)(D,[["render",P]]);var q=E;const C={class:"container"},G={class:"row"};function z(e,a,n,l,o,i){const r=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",C,[(0,t._)("div",G,[(0,t.Wm)(r,{class:"col-lg-4",to:"/fitness/0"},{default:(0,t.w5)((()=>[(0,t.Uk)("Aerobicos")])),_:1}),(0,t.Wm)(r,{class:"col-lg-4",to:"/fitness/1"},{default:(0,t.w5)((()=>[(0,t.Uk)("Flexiblilidad")])),_:1}),(0,t.Wm)(r,{class:"col-lg-4",to:"/fitness/2"},{default:(0,t.w5)((()=>[(0,t.Uk)("Resistencia")])),_:1})])])}var T={created(){console.log(this.$route.params.index)}};const N=(0,c.Z)(T,[["render",z]]);var W=N;const F={class:"container"},O={class:"row"};function A(e,a,n,l,o,i){const r=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",F,[(0,t._)("div",O,[(0,t.Wm)(r,{class:"col-lg-4",to:"/nutricion/0"},{default:(0,t.w5)((()=>[(0,t.Uk)("Proteines")])),_:1}),(0,t.Wm)(r,{class:"col-lg-4",to:"/nutricion/1"},{default:(0,t.w5)((()=>[(0,t.Uk)("Carbohidratos")])),_:1}),(0,t.Wm)(r,{class:"col-lg-4",to:"/nutricion/2"},{default:(0,t.w5)((()=>[(0,t.Uk)("Grasas")])),_:1}),(0,t.Wm)(r,{class:"col-lg-4",to:"/nutricion/3"},{default:(0,t.w5)((()=>[(0,t.Uk)("Vitaminas")])),_:1}),(0,t.Wm)(r,{class:"col-lg-4",to:"/nutricion/4"},{default:(0,t.w5)((()=>[(0,t.Uk)("Calculadora de dietas ")])),_:1})])])}var L={created(){console.log(this.$route.params.index)}};const S=(0,c.Z)(L,[["render",A]]);var Z=S;const I=(0,t._)("h1",null,"Perfil",-1);function $(e,a,n,l,o,i){const r=(0,t.up)("perfil-datos"),s=(0,t.up)("test");return(0,t.wg)(),(0,t.iD)("div",null,[I,(0,t.Wm)(r,{datos:o.datos},null,8,["datos"]),(0,t.Wm)(s,{onDatosTest:i.actualizarPerfil},null,8,["onDatosTest"]),o.editable?((0,t.wg)(),(0,t.iD)("button",{key:1,onClick:a[1]||(a[1]=(...e)=>i.guardarPerfil&&i.guardarPerfil(...e))},"Guardar Perfil")):((0,t.wg)(),(0,t.iD)("button",{key:0,onClick:a[0]||(a[0]=(...e)=>i.editarPerfil&&i.editarPerfil(...e))},"Editar Perfil"))])}var M=n(7139);const H=(0,t._)("h2",null,"Datos del Perfil",-1),Q={key:0},R={key:1},Y={key:0},B={key:1},J={key:0},K={key:1},X={key:0},ee={key:1},ae={key:0},ne={key:1},le={key:0},te={key:1};function oe(e,a,n,o,i,r){return(0,t.wg)(),(0,t.iD)("div",null,[H,(0,t._)("p",null,[(0,t.Uk)("Nombre: "),n.editable?((0,t.wg)(),(0,t.iD)("span",Q,[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>n.datos.nombre=e)},null,512),[[l.nr,n.datos.nombre]])])):((0,t.wg)(),(0,t.iD)("span",R,(0,M.zw)(n.datos.nombre),1))]),(0,t._)("p",null,[(0,t.Uk)("Edad: "),n.editable?((0,t.wg)(),(0,t.iD)("span",Y,[(0,t.wy)((0,t._)("input",{type:"number","onUpdate:modelValue":a[1]||(a[1]=e=>n.datos.nombre=e)},null,512),[[l.nr,n.datos.nombre]])])):((0,t.wg)(),(0,t.iD)("span",B,(0,M.zw)(n.datos.edad),1))]),(0,t._)("p",null,[(0,t.Uk)("Email: "),n.editable?((0,t.wg)(),(0,t.iD)("span",J,[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>n.datos.nombre=e)},null,512),[[l.nr,n.datos.nombre]])])):((0,t.wg)(),(0,t.iD)("span",K,(0,M.zw)(n.datos.email),1))]),(0,t._)("p",null,[(0,t.Uk)("Sexo: "),n.editable?((0,t.wg)(),(0,t.iD)("span",X,[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=e=>n.datos.nombre=e)},null,512),[[l.nr,n.datos.nombre]])])):((0,t.wg)(),(0,t.iD)("span",ee,(0,M.zw)(n.datos.sexo),1))]),(0,t._)("p",null,[(0,t.Uk)("Altura: "),n.editable?((0,t.wg)(),(0,t.iD)("span",ae,[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":a[4]||(a[4]=e=>n.datos.nombre=e)},null,512),[[l.nr,n.datos.nombre]])])):((0,t.wg)(),(0,t.iD)("span",ne,(0,M.zw)(n.datos.altura),1))]),(0,t._)("p",null,[(0,t.Uk)("Peso: "),n.editable?((0,t.wg)(),(0,t.iD)("span",le,[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":a[5]||(a[5]=e=>n.datos.nombre=e)},null,512),[[l.nr,n.datos.nombre]])])):((0,t.wg)(),(0,t.iD)("span",te,(0,M.zw)(n.datos.peso),1))]),n.editable?((0,t.wg)(),(0,t.iD)("button",{key:0,onClick:a[6]||(a[6]=(...e)=>r.guardarCambios&&r.guardarCambios(...e))},"Guardar Cambios")):(0,t.kq)("",!0)])}var ie={props:{datos:Object,editable:Boolean},methods:{guardarCambios(){this.$emit("actualzar-datos",this.datos)}}};const re=(0,c.Z)(ie,[["render",oe]]);var se=re;const ue=(0,t._)("h1",null,"Cuestionario",-1),de=(0,t._)("h2",null,"Datos personales",-1),ce=(0,t._)("label",null,"Nombre:",-1),pe=(0,t._)("label",null,"Edad:",-1),me=(0,t._)("label",null,"Sexo:",-1),ge=(0,t._)("option",{value:"masc"},"Masculino",-1),ve=(0,t._)("option",{value:"fem"},"Femenino",-1),be=(0,t._)("option",{value:"otro"},"Otro",-1),fe=[ge,ve,be],_e=(0,t._)("label",null,"Correo Electronico:",-1),ye=(0,t._)("label",null,"Peso en kg:",-1),we=(0,t._)("label",null,"Altura en cm:",-1),he=(0,t._)("h2",null,"Conocimientos Previos",-1),ke=(0,t._)("legend",null,"1- ¿Ha estado en algun gimnasio anteriormente?",-1),Ue=(0,t._)("legend",null,"2- ¿Como de activo eres en tu dia a dia? ",-1),je={class:"col-md-2"},xe={class:"col-md-2"},Ve={class:"col-md-2"},Pe=(0,t._)("legend",null,"3- ¿Que te describe mejor? ",-1),De=(0,t._)("legend",null,"4- ¿Fumas o bebes alcohol de manera moderada?",-1),Ee=(0,t._)("br",null,null,-1),qe=(0,t._)("hr",null,null,-1),Ce=(0,t._)("section",{class:"row"},[(0,t._)("div",{class:"col-md-12"},[(0,t._)("h3",null,"Objetivos."),(0,t._)("p")])],-1),Ge=(0,t._)("label",{for:"diasEjercicio"},"Cuantos dias a la semana haras ejercicio: *",-1),ze=(0,t._)("legend",null,"6- ¿Tienes conocimiento de como hacer los ejercicios?",-1),Te=(0,t._)("legend",null,"7- ¿Prefieres realizar los ejercicios con tu propio peso?",-1),Ne=(0,t._)("legend",null,"8- ¿Te gustaria haer clases grupales? Como yoga, bodypump... ",-1),We={class:"radio"},Fe=(0,t.uE)('<section class="row"><div><h4>Comentarios.</h4><p></p></div></section><section class="row"><div><div class="form-group"><label for="comment">Comentarios:</label><textarea class="form-control" rows="6" id="comentarios"></textarea></div></div></section>',2);function Oe(e,a,n,o,i,r){return(0,t.wg)(),(0,t.iD)("div",null,[ue,de,ce,(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>i.nombre=e)},null,512),[[l.nr,i.nombre]]),pe,(0,t.wy)((0,t._)("input",{type:"number","onUpdate:modelValue":a[1]||(a[1]=e=>i.edad=e)},null,512),[[l.nr,i.edad]]),me,(0,t.wy)((0,t._)("select",{class:"form-control","onUpdate:modelValue":a[2]||(a[2]=e=>i.sexo=e)},fe,512),[[l.bM,i.sexo]]),_e,(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=e=>i.email=e)},null,512),[[l.nr,i.email]]),ye,(0,t.wy)((0,t._)("input",{type:"number","onUpdate:modelValue":a[4]||(a[4]=e=>i.peso=e)},null,512),[[l.nr,i.peso]]),we,(0,t.wy)((0,t._)("input",{type:"number","onUpdate:modelValue":a[5]||(a[5]=e=>i.altura=e)},null,512),[[l.nr,i.altura]]),he,(0,t._)("form",null,[(0,t._)("fieldset",null,[ke,(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[6]||(a[6]=a=>e.pregunta1=a),value:"5"},null,512),[[l.G2,e.pregunta1]]),(0,t.Uk)(" Si ")]),(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[7]||(a[7]=a=>e.pregunta1=a),value:"0"},null,512),[[l.G2,e.pregunta1]]),(0,t.Uk)(" No ")]),(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[8]||(a[8]=a=>e.pregunta1=a),value:"0"},null,512),[[l.G2,e.pregunta1]]),(0,t.Uk)(" N/A ")])]),(0,t._)("fieldset",null,[Ue,(0,t._)("div",je,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[9]||(a[9]=a=>e.pregunta2=a),value:"5"},null,512),[[l.G2,e.pregunta2]]),(0,t.Uk)(" Muy activo ")])]),(0,t._)("div",xe,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[10]||(a[10]=a=>e.pregunta2=a),value:"3"},null,512),[[l.G2,e.pregunta2]]),(0,t.Uk)(" Activo ")])]),(0,t._)("div",Ve,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[11]||(a[11]=a=>e.pregunta2=a),value:"0"},null,512),[[l.G2,e.pregunta2]]),(0,t.Uk)(" Poco Activo ")])])]),(0,t._)("fieldset",null,[Pe,(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[12]||(a[12]=a=>e.pregunta3=a),value:"5"},null,512),[[l.G2,e.pregunta3]]),(0,t.Uk)(" No puedo ganar musculo ni engordar sin importar lo que coma ")])]),(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[13]||(a[13]=a=>e.pregunta3=a),value:"3"},null,512),[[l.G2,e.pregunta3]]),(0,t.Uk)(" Tengo un peso acorde a mi cuerpo ")])]),(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[14]||(a[14]=a=>e.pregunta3=a),value:"1"},null,512),[[l.G2,e.pregunta3]]),(0,t.Uk)(" Estoy a gusto con mi cuerpo pero me gustaria reducir algun quilo ")])]),(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[15]||(a[15]=a=>e.pregunta3=a),value:"0"},null,512),[[l.G2,e.pregunta3]]),(0,t.Uk)(" Necesito reducir bastante mi peso ")])])]),(0,t._)("fieldset",null,[De,(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[16]||(a[16]=a=>e.pregunta4=a),value:"0"},null,512),[[l.G2,e.pregunta4]]),(0,t.Uk)(" Si ")])]),(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[17]||(a[17]=a=>e.pregunta4=a),value:"5"},null,512),[[l.G2,e.pregunta4]]),(0,t.Uk)(" No ")])]),(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[18]||(a[18]=a=>e.pregunta4=a),value:"0"},null,512),[[l.G2,e.pregunta4]]),(0,t.Uk)(" N/A ")])])]),Ee]),qe,Ce,(0,t._)("div",null,[(0,t._)("div",null,[Ge,(0,t.wy)((0,t._)("input",{type:"number","onUpdate:modelValue":a[19]||(a[19]=a=>e.pregunta5=a),class:"form-control",placeholder:"Numero de dias",maxlength:"3"},null,512),[[l.nr,e.pregunta5]])])]),(0,t._)("fieldset",null,[ze,(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[20]||(a[20]=a=>e.pregunta6=a),value:"5"},null,512),[[l.G2,e.pregunta6]]),(0,t.Uk)(" Si ")])]),(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[21]||(a[21]=a=>e.pregunta6=a),value:"0"},null,512),[[l.G2,e.pregunta6]]),(0,t.Uk)(" No ")])]),(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[22]||(a[22]=a=>e.pregunta6=a),value:"0"},null,512),[[l.G2,e.pregunta6]]),(0,t.Uk)(" N/A ")])])]),(0,t._)("fieldset",null,[Te,(0,t._)("div",null,[(0,t.Uk)("Cuestionario "),(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[23]||(a[23]=a=>e.pregunta7=a),value:"3"},null,512),[[l.G2,e.pregunta7]]),(0,t.Uk)(" Si ")])]),(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[24]||(a[24]=a=>e.pregunta7=a),value:"3"},null,512),[[l.G2,e.pregunta7]]),(0,t.Uk)(" No ")])]),(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[25]||(a[25]=a=>e.pregunta7=a),value:"0"},null,512),[[l.G2,e.pregunta7]]),(0,t.Uk)(" N/A ")])])]),(0,t._)("fieldset",null,[Ne,(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[26]||(a[26]=a=>e.pregunta8=a),value:"3"},null,512),[[l.G2,e.pregunta8]]),(0,t.Uk)(" Si ")])]),(0,t._)("div",null,[(0,t._)("label",null,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[27]||(a[27]=a=>e.pregunta8=a),value:"3"},null,512),[[l.G2,e.pregunta8]]),(0,t.Uk)(" No ")])]),(0,t._)("div",null,[(0,t._)("label",We,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[28]||(a[28]=a=>e.pregunta8=a),value:"3"},null,512),[[l.G2,e.pregunta8]]),(0,t.Uk)(" N/A ")])])]),Fe,(0,t._)("button",{onClick:a[29]||(a[29]=(...e)=>r.enviarTest&&r.enviarTest(...e))},"Enviar Test")])}var Ae={data(){return{nombre:"",edad:"",sexo:"",email:"",altura:"",peso:"",puntuacionFinal:0}},methods:{calcularPuntuacionFinal(){this.puntuacionFinal=parseInt(this.pregunta1)+parseInt(this.pregunta2)+parseInt(this.pregunta3)+parseInt(this.pregunta4)+parseInt(this.pregunta5)+parseInt(this.pregunta6)+parseInt(this.pregunta7)+parseInt(this.pregunta8)},enviarTest(){this.calcularPuntuacionFinal();const e={nombre:this.nombre,edad:this.edad,sexo:this.sexo,email:this.email,altura:this.altura,peso:this.peso,puntuacionFinal:this.puntuacionFinal};this.$emit("datos-cuestionario",e)}}};const Le=(0,c.Z)(Ae,[["render",Oe]]);var Se=Le,Ze={components:{PerfilDatos:se,Test:Se},data(){return{datos:{},editable:!1}},methods:{actualizarPerfil(e){this.datos=e,this.editable=!1},editarPerfil(){this.editable=!0},guardarPerfil(){this.editable=!1}}};const Ie=(0,c.Z)(Ze,[["render",$]]);var $e=Ie;function Me(e,a,n,l,o,i){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("h3",null,(0,M.zw)(o.ejercicio[e.$route.params.index].title),1),(0,t._)("p",null,(0,M.zw)(o.ejercicio[e.$route.params.index].content),1)],64)}var He={data(){return{ejercicio:[{title:"Ejercicios Aerobicos",content:"El ejercicio aeróbico es cualquier tipo de acondicionamiento cardiovascular que abarque los músculos más grandes con movimientos rítmicos y repetitivos. Los ejercicios aeróbicos hacen que el corazón, los pulmones, los vasos sanguíneos y los músculos trabajen más eficientemente. Además, aumentan la fuerza y resistencia corporales. El ejercicio aeróbico también levanta el ánimo, te ayuda a dormir mejor y disminuye lo siguiente:",img:"../../public/aerobic.png"},{title:"Ejercicios de Flexibilidad",content:"Los ejercicios de flexibilidad (también denominados ejercicios para la amplitud de movimiento o de estiramiento) mejoran la elasticidad de los músculos y la amplitud de movimiento de las articulaciones. Puedes esperar sentir una tensión cómoda al hacer ejercicios de flexibilidad, pero nunca dolor. Tener una buena flexibilidad puede ayudarte a hacer prácticamente cualquier movimiento con mayor comodidad, desde caminar hasta sentarte o inclinarte para levantar algo. Los ejercicios de flexibilidad pueden ayudar a reducir el estrés y a relajarte. Los ejercicios de flexibilidad también ayudan a disminuir la rigidez y los cambios de postura que a veces surgen después de lo siguiente:",img:"../../public/flex.png"},{title:"Ejercicios de Resistencia",content:"Los ejercicios de fuerza, también denominados de resistencia, hacen que el trabajo de los músculos sea más arduo mediante la adición de peso o resistencia al movimiento. Los ejercicios de fuerza también fortalecen los huesos, mejoran el equilibrio, la postura y la calidad de vida, ya que las tareas de la casa y las actividades recreativas se facilitan y se disfrutan más. Después de la cirugía de cáncer de mama, los ejercicios de fuerza también pueden contribuir a mejorar el equilibrio del músculo o a fortalecerlo.",img:"../../public/res.png"}]}}};const Qe=(0,c.Z)(He,[["render",Me]]);var Re=Qe;function Ye(e,a,n,l,o,i){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("h3",null,(0,M.zw)(o.nutricion[e.$route.params.index].title),1),(0,t._)("p",null,(0,M.zw)(o.nutricion[e.$route.params.index].content),1)],64)}var Be={data(){return{nutricion:[{title:"Proteinas",content:"Las proteínas son indispensables para reparar las pequeñas roturas fibrilares del músculo que tienen lugar durante la práctica deportiva. Las proteínas proveen el sustrato para un buen rendimiento en el ejercicio y para la adaptación al mismo. La proteína es una molécula estructural que se ensambla a partir de aminoácidos, muchos de los cuales el cuerpo no puede producir por sí mismo. Los alimentos de origen animal suelen ser ricos en proteínas, con todos los aminoácidos esenciales que necesitamos. Muchos alimentos de origen vegetal son también ricos en proteínas.",img:"../../public/aerobic.png"},{title:"Carbohidratos",content:"Los carbohidratos o hidratos de carbono son uno de los principales tipos de nutrientes de nuestra dieta. Específicamente, son la fuente más importante de energía para el organismo. Presentes en gran variedad de alimentos como frutas, verduras, granos y productos lácteos, el sistema digestivo convierte estos hidratos de carbono en glucosa (azúcar en sangre), que básicamente es la energía con la que funcionan las células, tejidos y órganos. Además, hay una parte de dicha glucosa que se conserva en el hígado y en los músculos como reserva y que se utilizará en el caso de algún esfuerzo extra, como la práctica deportiva.",img:"../../public/flex.png"},{title:"Grasas",content:"Las grasas deben estar presentes en cualquier dieta variada y equilibrada, y en la del deportista no pueden ser menos. Lo adecuado es que aporten el 25-30% del total de calorías de la dieta diaria ya que si se reduce el aporte de grasas drásticamente por miedo a engordar, por ejemplo, corremos el riesgo de no incorporar los suficientes ácidos grasos esenciales. Eso sí, además de vigilar la cantidad también hemos de prestar atención a la calidad pues no todas las grasas son iguales. Según la estructura química de los ácidos grasos que componen las grasas, variarán sus propiedades y, como consecuencia, sus efectos sobre la salud.",img:"../../public/res.png"},{title:"Vitaminas",content:"El deporte exige un esfuerzo considerable a las personas que lo practican. Entrenar constantemente inflama los músculos, provoca estrés y nos pone en riesgo de sufrir lesiones. Para disminuir la propensión a estos problemas, los atletas deben consumir dosis relativamente altas de vitaminas C y E, tanto en los alimentos, como por medio de suplementos nutricionales. Estas vitaminas elevan el sistema inmunológico, protegiéndonos de las enfermedades comunes que interfieren con nuestro entrenamiento.",img:"../../public/res.png"},{title:"Vitaminas",content:"Working on it...",img:"../../public/res.png"}]}}};const Je=(0,c.Z)(Be,[["render",Ye]]);var Ke=Je;const Xe=(0,U.p7)({history:(0,U.r5)(),routes:[{path:"/",name:"Inici",component:q},{path:"/fitness",name:"Fitness",component:W},{path:"/fitness/:index",name:"Ejercicios",component:Re},{path:"/nutricion",name:"Nutricion",component:Z},{path:"/nutricion/:index",name:"Macroalimentos",component:Ke},{path:"/perfil",name:"Perfil",component:$e}]});var ea=Xe;const aa=(0,l.ri)(k);aa.use(ea),aa.mount("#app")}},a={};function n(l){var t=a[l];if(void 0!==t)return t.exports;var o=a[l]={exports:{}};return e[l].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(a,l,t,o){if(!l){var i=1/0;for(d=0;d<e.length;d++){l=e[d][0],t=e[d][1],o=e[d][2];for(var r=!0,s=0;s<l.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](l[s])}))?l.splice(s--,1):(r=!1,o<i&&(i=o));if(r){e.splice(d--,1);var u=t();void 0!==u&&(a=u)}}return a}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[l,t,o]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var l in a)n.o(a,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,l){var t,o,i=l[0],r=l[1],s=l[2],u=0;if(i.some((function(a){return 0!==e[a]}))){for(t in r)n.o(r,t)&&(n.m[t]=r[t]);if(s)var d=s(n)}for(a&&a(l);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},l=self["webpackChunkvue_start_spa"]=self["webpackChunkvue_start_spa"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(2426)}));l=n.O(l)})();
//# sourceMappingURL=app.25092fba.js.map