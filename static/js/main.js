/*
 * Main Kajuryto's dot com site behavior
 */

 var randomHeader = ['Jamás has estado tan cerca de la muerte'
                      ,'Veo que has construido una preciosa ssshhhhhh...'
                      ,'Tala, cava, pica, mina, construye, explora, muere'
                      ,'Si ves un zombie no es un zombie, es el Apocalipsis'
                      ,'Se dice que en las noches de luna llena se puede oír los llantos de los otros jugadores'
                      ,'¡Corred, insensatos!'
                      ,'Tu muralla no es lo suficientemente segura ni alta'
                      ,'Braaaaainzzz'
                      ,'¿Oyes eso? Es la muerte que viene a por tí'
                      ,'Supervivencia extrema al limite'
                      ,'¿Gatos y creepers en la misma jaula?'
                      ,'tu + PFHS = muerte']

// Auto execution script
$(function(){
  $('#randomHeader').html(function(){
    return randomHeader[Math.floor(Math.random()*randomHeader.length)]
  })
})