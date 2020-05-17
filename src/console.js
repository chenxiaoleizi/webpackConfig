import $ from "jquery"

export function consoleNum(){
    console.log(1)
}

$(".bg").click(function(){
    console.log("bind event with jQuery")
})