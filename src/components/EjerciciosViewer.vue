<template>
    <h3> {{ ejercicio[$route.params.index].title }} </h3>
    <p> {{ ejercicio[$route.params.index].content }}</p>
    <!-- <img src={{ ejercicio[$route.params.index].img }}> -->
</template>

<script>
    export default {
        data() {
            return {
                ejercicio: [
                    {
                        title: "Ejercicios Aerobicos",
                        content:"El ejercicio aeróbico es cualquier tipo de acondicionamiento cardiovascular que abarque los músculos más grandes con movimientos rítmicos y repetitivos. Los ejercicios aeróbicos hacen que el corazón, los pulmones, los vasos sanguíneos y los músculos trabajen más eficientemente. Además, aumentan la fuerza y resistencia corporales. El ejercicio aeróbico también levanta el ánimo, te ayuda a dormir mejor y disminuye lo siguiente:",
                          
                        img: '../../public/aerobic.png'
                    },
                    {
                        title: "Ejercicios de Flexibilidad",
                        content: "Los ejercicios de flexibilidad (también denominados ejercicios para la amplitud de movimiento o de estiramiento) mejoran la elasticidad de los músculos y la amplitud de movimiento de las articulaciones. Puedes esperar sentir una tensión cómoda al hacer ejercicios de flexibilidad, pero nunca dolor. Tener una buena flexibilidad puede ayudarte a hacer prácticamente cualquier movimiento con mayor comodidad, desde caminar hasta sentarte o inclinarte para levantar algo. Los ejercicios de flexibilidad pueden ayudar a reducir el estrés y a relajarte. Los ejercicios de flexibilidad también ayudan a disminuir la rigidez y los cambios de postura que a veces surgen después de lo siguiente:",
                        img: '../../public/flex.png'
                    },
                    {
                        title: "Ejercicios de Resistencia",
                        content: "Los ejercicios de fuerza, también denominados de resistencia, hacen que el trabajo de los músculos sea más arduo mediante la adición de peso o resistencia al movimiento. Los ejercicios de fuerza también fortalecen los huesos, mejoran el equilibrio, la postura y la calidad de vida, ya que las tareas de la casa y las actividades recreativas se facilitan y se disfrutan más. Después de la cirugía de cáncer de mama, los ejercicios de fuerza también pueden contribuir a mejorar el equilibrio del músculo o a fortalecerlo.",
                        img: '../../public/res.png'
                    }
                ]
            };
        }
    };
</script>