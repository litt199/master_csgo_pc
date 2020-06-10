export default(Vue)=>{
    Vue.directive('top_down',{
        update:(el,binding,vnode)=>{
            if(binding.value===1){
                
                el.classList.add("ani");
            }else if(binding.value===2){
                el.classList.remove("ani");
            }
        }
    })
    Vue.directive('text_show',{
        update:(el,binding,vnode)=>{
            if(binding.value===1){
                el.classList.add("textShow");
            }else if(binding.value===2){
                el.classList.remove("textShow");
            }
        }
    })

    Vue.directive('bg_red',{      
        update:(el,binding,vnone)=>{
            if(binding.value===1){
                // console.log(el)
                el.classList.add("bg_red");
            }else if(binding.value===2){
                el.classList.remove("bg_red");
            }
        }
    })

    Vue.directive('cursor',{    //自定义指令,自动变成小手
        bind:(el,binding)=>{
            el.style.cursor="pointer"
        }
    })
}

