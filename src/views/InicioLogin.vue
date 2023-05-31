<template>
    <div class="p-10 bg-gray-200 h-[100vh] flex items-center justify-center">
        <div class="bg-white shadow-lg overflow-hidden rounded-xl w-[50%] h-[32em] z-50">
            <div class="flex space-between items-start">
                <div class="image-container lg:w-[50%] xs:hidden">
                </div>
                <div class="lg:w-[50%] xs:w-full sm:w-full px-8 py-10">
                    <div>
                        <b class="text-2x1 text-gray-900">Sistema Login</b>
                        <p class="text-[12px] text-gray-600">
                            Necesariamente tiene que registrar sus datos
                        </p>
                    </div>
                    <br>
                    <div>
                    <div class="flex flex-col">
                        <span class="font-bold-mb-1 text-[12px]">
                            <i class="fa-fauser-circle-circle-o"></i> Correo
                        </span>
                        <input type="email" v-model="username" name="email" placeholder="ejemplo@gmail.com" class="p-3 rounded-lg border border-gray-200 w-full"/>
                    </div>
                    <br>
                    <div class="mb-1">
                        <div class="flex flex-col">
                            <span class="font-bold mb-1 text-[12px]">Contraseña</span>
                            <input type="password" v-model="password" name="password" placeholder="Escriba su contraseña..." class="p-3 rounded-lg border border-gray-200 w-full"/>
                        </div>
                    </div>
                    <br>
                    <button v-on:click="validateFields()" class="transition p-3 w-full bg-blue-500">Ingresar</button>
                    <div class="text-center mb-3">
                        <span class="text-[12px] text-gray-600">Todavia no tiene una cuenta registrese ahora?<a href="../views/index2.html" class="text-[12px] text-blue-500 hover:text-blue-700 font-bold">Click</a></span>
                    </div>
                    <div class="text-center">
                        <a href="#" class="text[12px] text-blue-500 hover:text-blue-700"><b>¿Olvidaste tu contraseña?</b></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="text-center p-5 text-[10px] font-bold absolute bottom-0 left-0 w-full">© 2023 | All Rights Reserved | Bryam León</div>
    </div>
</template>
<style scoped>
    .image-container{
        background-image:url(../assets/img/bg1.jpg);
        background-position: center;
        background-size: cover;
        height: calc(3.2 * 10em);
    }
</style>
<script>
    export default{
        data(){
            return{
                username: null,
                password: null,
            }
        },
        methods: {
            validaEmail: function(email){
                let regExp = /^\S+@\S+\.\S+$/;
                return regExp.test(email);
            },
            validaArroba: function(email) {
            let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return regExp.test(email);
            },
            validateFields: function(){
                if(!this.validaEmail(this.username)){
                    swal({
                        title: 'Email invalido',
                        text: '',
                        icon: 'error'
                    })
                } else if (!this.validaArroba(this.username)){
                    swal({
                        title: 'Email tiene varios arroba!',
                        text: '',
                        icon: 'error'
                    })
                    return false;
                }
                if(this.username == null || this.username.length == 0){
                    swal({
                        title: 'Email no puede estar vacio',
                        text: '',
                        icon: 'error'
                    })
                    return false;
                }
                if(this.password == null || this.password.length == 0){
                    swal({
                        title: 'La contraseña no puede estar vacia',
                        text: '',
                        icon: 'error'
                    })
                    return false;
                }
                swall({
                    title: 'Datos invalidos',
                    text: '',
                    icon: 'Exito'
                })
                console.log(this.username,this.password,'<<<<');
            }
        },
        mounted: function(){
            console.log('login'); 
        }
    }
</script>