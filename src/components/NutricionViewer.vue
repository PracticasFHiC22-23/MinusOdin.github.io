<template>
    <h3> {{ nutricion[$route.params.index].title }} </h3>
    <p> {{ nutricion[$route.params.index].content }}</p>
    <!-- <img src={{ ejercicio[$route.params.index].img }}> -->
</template>

<script>
    export default {
        data() {
            return {
                nutricion: [
                    {
                        title: "Proteinas",
                        content: "Las proteínas son indispensables para reparar las pequeñas roturas fibrilares del músculo que tienen lugar durante la práctica deportiva. Las proteínas proveen el sustrato para un buen rendimiento en el ejercicio y para la adaptación al mismo. La proteína es una molécula estructural que se ensambla a partir de aminoácidos, muchos de los cuales el cuerpo no puede producir por sí mismo. Los alimentos de origen animal suelen ser ricos en proteínas, con todos los aminoácidos esenciales que necesitamos. Muchos alimentos de origen vegetal son también ricos en proteínas.",
                        img: '../../public/aerobic.png'
                    },
                    {
                        title: "Carbohidratos",
                        content: "Los carbohidratos o hidratos de carbono son uno de los principales tipos de nutrientes de nuestra dieta. Específicamente, son la fuente más importante de energía para el organismo. Presentes en gran variedad de alimentos como frutas, verduras, granos y productos lácteos, el sistema digestivo convierte estos hidratos de carbono en glucosa (azúcar en sangre), que básicamente es la energía con la que funcionan las células, tejidos y órganos. Además, hay una parte de dicha glucosa que se conserva en el hígado y en los músculos como reserva y que se utilizará en el caso de algún esfuerzo extra, como la práctica deportiva.",
                        img: '../../public/flex.png'
                    },
                    {
                        title: "Grasas",
                        content: "Las grasas deben estar presentes en cualquier dieta variada y equilibrada, y en la del deportista no pueden ser menos. Lo adecuado es que aporten el 25-30% del total de calorías de la dieta diaria ya que si se reduce el aporte de grasas drásticamente por miedo a engordar, por ejemplo, corremos el riesgo de no incorporar los suficientes ácidos grasos esenciales. Eso sí, además de vigilar la cantidad también hemos de prestar atención a la calidad pues no todas las grasas son iguales. Según la estructura química de los ácidos grasos que componen las grasas, variarán sus propiedades y, como consecuencia, sus efectos sobre la salud.",
                        img: '../../public/res.png'
                    },
                    {
                        title: "Vitaminas",
                        content: "El deporte exige un esfuerzo considerable a las personas que lo practican. Entrenar constantemente inflama los músculos, provoca estrés y nos pone en riesgo de sufrir lesiones. Para disminuir la propensión a estos problemas, los atletas deben consumir dosis relativamente altas de vitaminas C y E, tanto en los alimentos, como por medio de suplementos nutricionales. Estas vitaminas elevan el sistema inmunológico, protegiéndonos de las enfermedades comunes que interfieren con nuestro entrenamiento.",
                        img: '../../public/res.png'
                    }
                    ,
                    {
                        title: "Vitaminas",
                        content: "Working on it...",
                        img: '../../public/res.png'
                    }
                ]
            };
        }
    };
</script>